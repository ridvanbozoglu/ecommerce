import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteAdressThunk,
  editAdressThunk,
} from "../redux/reducers/clientReducer";

const AddressCard = ({ address, isSelected, onSelect }) => {
  const {
    title,
    name,
    surname,
    phone,
    city,
    district,
    neighborhood,
    address: fullAddress,
  } = address;

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedAddress, setEditedAddress] = useState(address);

  const dispatch = useDispatch();
  const editFormRef = useRef(null);
  const saveButtonRef = useRef(null);

  const handleEditClick = () => {
    setIsEditMode((prev) => !prev);
    console.log(isEditMode);
  };

  const handleSaveClick = () => {
    dispatch(editAdressThunk(editedAddress));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleDelete = () => {
    dispatch(deleteAdressThunk(address.id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        editFormRef.current &&
        !editFormRef.current.contains(event.target) &&
        saveButtonRef.current &&
        !saveButtonRef.current.contains(event.target)
      ) {
        handleSaveClick();
        setIsEditMode(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [handleSaveClick]);

  return (
    <li className="flex flex-col max-w-md">
      <div className="flex justify-between p-[4px]">
        <div
          onClick={onSelect}
          className="flex items-center cursor-pointer gap-1"
        >
          <input type="radio" checked={isSelected} onChange={() => {}} />
          <p>{title}</p>
        </div>
        <div className="flex items-center space-x-4">
          <p
            onClick={handleEditClick}
            ref={saveButtonRef}
            className="underline"
          >
            {isEditMode ? "Save" : "Edit"}
          </p>
          <p
            onClick={handleDelete}
            className="underline text-red-500 cursor-pointer"
          >
            Delete {address.id}
          </p>
        </div>
      </div>
      {isEditMode ? (
        <div
          ref={editFormRef}
          className="p-4 bg-white border rounded-lg shadow-lg"
        >
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <FaUser />
              <input
                type="text"
                name="name"
                value={editedAddress.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="surname"
                value={editedAddress.surname}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center space-x-4">
              <MdOutlineSmartphone />
              <input
                type="tel"
                name="phone"
                value={editedAddress.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <textarea
            name="fullAddress"
            value={editedAddress.fullAddress}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div className="p-4 bg-white border rounded-lg shadow-lg">
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <FaUser />
              <p>
                <strong>
                  {name} {surname}
                </strong>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <MdOutlineSmartphone />
              <p>{phone}</p>
            </div>
          </div>
          <p>{fullAddress}</p>
        </div>
      )}
    </li>
  );
};

export default AddressCard;
