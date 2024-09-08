import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../axios/eccomerceApi";
import { setUser, setIsAuthenticated } from "../redux/reducers/clientReducer";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);

  useEffect(() => {
    const verifyToken = async () => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token) {
        api.defaults.headers.common["Authorization"] = token;

        dispatch(setIsAuthenticated(true));
        try {
          const response = await api.get("/verify");
          dispatch(setUser(response.data));
          if (response.data.token && localStorage.getItem("token")) {
            localStorage.setItem("token", response.data.token);
            api.defaults.headers.common["Authorization"] = response.data.token;
          } else if (response.data.token && sessionStorage.getItem("token")) {
            sessionStorage.setItem("token", response.data.token);
            api.defaults.headers.common["Authorization"] = response.data.token;
          }
        } catch (error) {
          localStorage.removeItem("token");
          dispatch(setIsAuthenticated(false));
          delete api.defaults.headers.common["Authorization"];
        }
      }
    };
    verifyToken();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
