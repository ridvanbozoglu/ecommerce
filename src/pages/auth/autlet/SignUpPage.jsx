import api from "../../../axios/eccomerceApi";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("customer");
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: selectedRole,
      };
      if (selectedRole === "store") {
        formData.store = {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTaxId,
          bank_account: data.storeBankAccount,
        };
      }
      const response = await api.post("/signup", formData);
      history.push({
        pathname: history.location.state?.from?.pathname || "/",
        state: {
          warning: "You need to click link in email to activate your account!",
        },
      });
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          {...register("name", { required: true, minLength: 3 })}
          className={`w-full px-3 py-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:border-blue-500`}
        />
        {errors.name && (
          <div className="text-red-500 text-sm mt-1">
            This field is required and must be at least 3 characters long.
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          className={`w-full px-3 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:border-blue-500`}
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">
            This field must be a valid email address.
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Password:</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          })}
          className={`w-full px-3 py-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:border-blue-500`}
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">
            This field must be at least 8 characters long and contain a mix of
            uppercase, lowercase, numbers, and special characters.
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Confirm Password:
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
          className={`w-full px-3 py-2 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:border-blue-500`}
        />
        {errors.confirmPassword && (
          <div className="text-red-500 text-sm mt-1">
            This field must match the password field.
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Role:</label>
        <select
          value={selectedRole}
          onChange={(e) => {
            setSelectedRole(e.target.value);
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          {roles && roles.length > 0 ? (
            roles.map((role) => (
              <option key={role.id} value={role.code}>
                {role.name}
              </option>
            ))
          ) : (
            <option>Loading roles...</option>
          )}
        </select>
      </div>

      {selectedRole === "store" && (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Store Name:
            </label>
            <input
              type="text"
              {...register("storeName", { required: true, minLength: 3 })}
              className={`w-full px-3 py-2 border ${
                errors.storeName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:border-blue-500`}
            />
            {errors.storeName && (
              <div className="text-red-500 text-sm mt-1">
                This field is required and must be at least 3 characters long.
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Store Phone:
            </label>
            <input
              type="text"
              {...register("storePhone", {
                required: true,
                pattern: /^0\d{3} \d{3} \d{4}$/,
              })}
              className={`w-full px-3 py-2 border ${
                errors.storeName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:border-blue-500`}
            />
            {errors.storePhone && (
              <div className="text-red-500 text-sm mt-1">
                This field must be a valid Turkish phone number.
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Store Tax ID:
            </label>
            <input
              type="text"
              {...register("storeTaxId", {
                required: true,
                pattern: /^T\d{4}V\d{6}$/,
              })}
              className={`w-full px-3 py-2 border ${
                errors.storeName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:border-blue-500`}
            />
            {errors.storeTaxId && (
              <div className="text-red-500 text-sm mt-1">
                This field must match the pattern "TXXXXVXXXXXX" where X is a
                digit.
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Store Bank Account:
            </label>
            <input
              type="text"
              {...register("storeBankAccount", {
                required: true,
                pattern: /^[A-Z]{2}\d{2} \d{4} \d{4} \d{4} \d{4}$/,
              })}
              className={`w-full px-3 py-2 border ${
                errors.storeName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:border-blue-500`}
            />
            {errors.storeBankAccount && (
              <div className="text-red-500 text-sm mt-1">
                This field must be a valid IBAN address.
              </div>
            )}
          </div>
        </div>
      )}
      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-2 text-white rounded-md ${
          submitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {submitting ? <span>Submitting...</span> : <span>Sign Up</span>}
      </button>
    </form>
  );
};

export default SignUpForm;
