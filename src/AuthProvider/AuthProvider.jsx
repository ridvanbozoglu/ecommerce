import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../axios/eccomerceApi";
import { setUser, setIsAuthenticated } from "../redux/reducers/clientReducer";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (token || user !== null) {
        api.defaults.headers.common["Authorization"] = token || user.token;
        try {
          const response = await api.get("/verify");
          dispatch(setUser(response.data));
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            api.defaults.headers.common["Authorization"] = response.data.token;
            dispatch(setIsAuthenticated(true));
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
