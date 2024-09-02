import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import clientReducer, {
  loginThunk,
  setUser,
} from "../../../redux/reducers/clientReducer";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(loginThunk(data));
      if (!response.massage) {
        dispatch(setUser(response.payload));
        if (data.rememberMe) {
          localStorage.setItem("token", response.payload.token);
        }
        toast.success("Login successful!");
        history.push("/");
        // history.back() state i kaybettiği için kullanmadım ve çözülmesi gerek....
      }
    } catch (error) {
      toast.error("Login failed!");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          className={`w-full px-3 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:border-blue-500`}
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">Email is required</div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Password:</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className={`w-full px-3 py-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:border-blue-500`}
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">Password is required</div>
        )}
      </div>

      <div className="mb-4">
        <label>
          <input type="checkbox" {...register("rememberMe")} />
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
