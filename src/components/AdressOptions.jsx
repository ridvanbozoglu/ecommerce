import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdressThunk } from "../redux/reducers/clientReducer";
import AddressCard from "./AddressCard";
import { Spinner } from "./ui/spinner";
import AddAddressCard from "./AddAddressCard";
import { v4 as uuidv4 } from "uuid";

const AdressOptions = ({ activeAddress, setActiveAddress }) => {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.client.addressList);
  const isAddressLoading = useSelector(
    (state) => state.client.userAddressLoading
  );
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  useEffect(() => {
    dispatch(getAdressThunk());
  }, [dispatch]);

  useEffect(() => {
    if (addressList && addressList.length > 0) {
      setSelectedAddressId(addressList[0].id);
    }
  }, [addressList]);

  return (
    <div>
      <div>
        <ul>
          <li key="add">
            <AddAddressCard />
          </li>
          {addressList && addressList.length > 0 ? (
            addressList.map((address) => (
              <AddressCard
                key={uuidv4()}
                address={address}
                isSelected={selectedAddressId === address.id}
                onSelect={() => setSelectedAddressId(address.id)}
              />
            ))
          ) : isAddressLoading ? (
            <li key="spinner">
              <Spinner />
            </li>
          ) : (
            <li key="empty">Henüz adres eklenmedi</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdressOptions;
