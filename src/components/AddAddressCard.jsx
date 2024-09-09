import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAdressThunk } from "../redux/reducers/clientReducer";

const AddAddressCard = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addAdressThunk(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Address Title:
        </label>
        <input
          id="title"
          {...register("title", { required: "Address title is required" })}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          id="name"
          {...register("name", { required: "Name is required" })}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="surname"
          className="block text-sm font-medium text-gray-700"
        >
          Surname:
        </label>
        <input
          id="surname"
          {...register("surname", { required: "Surname is required" })}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.surname && (
          <span className="text-red-500 text-sm">{errors.surname.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone:
        </label>
        <input
          id="phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10,11}$/,
              message: "Invalid phone number",
            },
          })}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City (İl):
        </label>
        <input
          id="city"
          {...register("city", { required: "City is required" })}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.city && (
          <span className="text-red-500 text-sm">{errors.city.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="district"
          className="block text-sm font-medium text-gray-700"
        >
          District (İlçe):
        </label>
        <input
          id="district"
          {...register("district", { required: "District is required" })}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.district && (
          <span className="text-red-500 text-sm">
            {errors.district.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="neighborhood"
          className="block text-sm font-medium text-gray-700"
        >
          Neighborhood (Mahalle):
        </label>
        <input
          id="neighborhood"
          {...register("neighborhood", {
            required: "Neighborhood is required",
          })}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.neighborhood && (
          <span className="text-red-500 text-sm">
            {errors.neighborhood.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address Details:
        </label>
        <textarea
          id="address"
          {...register("address", { required: "Address details are required" })}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Address
      </button>
    </form>
  );
};

export default AddAddressCard;
