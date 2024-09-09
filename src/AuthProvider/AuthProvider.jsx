import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../axios/eccomerceApi";
import { setUser, setIsAuthenticated } from "../redux/reducers/clientReducer";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token) {
        dispatch(setIsAuthenticated(true));
        // try {
        const response = await api.get("/verify");
        dispatch(setUser(response.data));
        if (response.data.token) {
          if (localStorage.getItem("token")) {
            localStorage.setItem("token", response.data.token);
          } else {
            sessionStorage.setItem("token", response.data.token);
          }
        }
        // }
        // burada başka şekilde hata verebilir!!!!!

        // catch (error) {
        //   localStorage.removeItem("token");
        //   sessionStorage.removeItem("token");
        //   dispatch(setIsAuthenticated(false));
        // }
      }
    };
    verifyToken();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
