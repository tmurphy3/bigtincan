import React, { useState } from "react";
import "../styles/EditProfileCard.css";
import FormInput from "../components/FormInput";
import { EDIT_USER } from "../state/models/profiles/actions";
import { useDispatch } from "react-redux";

function EditProfileCard({
  setIsLoading,
  setEditMode,
  data: {
    id,
    firstName,
    lastName,
    email,
    phone,
    website,
    address,
    companyName,
    companyCatchPhrase,
    avatar,
  },
}) {
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newWebsite, setNewWebsite] = useState(website);
  const [newAddress, setNewAddress] = useState(address);
  const [newCompanyName, setNewCompanyName] = useState(companyName);
  const [newCompanyCatchPhrase, setNewCompanyCatchPhrase] =
    useState(companyCatchPhrase);
  const [newAvatar, setNewAvatar] = useState(avatar);

  const dispatch = useDispatch();

  // update user
  const handleConfirmEdit = async () => {
    let newUserData = {
      id: id,
      firstName: newFirstName ? newFirstName : "John",
      lastName: newLastName ? newLastName : "Doe",
      email: newEmail ? newEmail : "Unknown",
      phone: newPhone ? newPhone : "Unknown",
      website: newWebsite ? newWebsite : "Unknown",
      address: newAddress ? newAddress : "Unknown",
      companyName: newCompanyName ? newCompanyName : "Unknown",
      companyCatchPhrase: newCompanyCatchPhrase
        ? newCompanyCatchPhrase
        : "Unknown",
      avatar: newAvatar ? newAvatar : "Unknown",
    };
    await dispatch({
      type: EDIT_USER,
      payload: {
        data: newUserData,
      },
    });
    setEditMode(false);
    setIsLoading(false);
    return;
  };

  // show the existing information, allow user to change inputs
  return (
    <div className="EditProfileCard">
      <h1>Edit profile</h1>
      <FormInput
        state={newFirstName}
        setState={setNewFirstName}
        placeholder={"First Name"}
      />
      <FormInput
        state={newLastName}
        setState={setNewLastName}
        placeholder={"Last Name"}
      />
      <FormInput
        state={newEmail}
        setState={setNewEmail}
        placeholder={"Email"}
      />
      <FormInput
        state={newPhone}
        setState={setNewPhone}
        placeholder={"Phone"}
      />
      <FormInput
        state={newWebsite}
        setState={setNewWebsite}
        placeholder={"Website"}
      />
      <FormInput
        state={newAddress}
        setState={setNewAddress}
        placeholder={"Address"}
      />
      <FormInput
        state={newCompanyName}
        setState={setNewCompanyName}
        placeholder={"Company Name"}
      />
      <FormInput
        state={newCompanyCatchPhrase}
        setState={setNewCompanyCatchPhrase}
        placeholder={"Company Catch Phrase"}
      />
      <FormInput
        state={newAvatar}
        setState={setNewAvatar}
        placeholder={"Avatar URL"}
      />
      <button
        onClick={() => {
          setIsLoading(true);
          handleConfirmEdit();
        }}
      >
        Confirm
      </button>
      <button onClick={() => setEditMode(false)}>Cancel</button>
    </div>
  );
}

export default EditProfileCard;
