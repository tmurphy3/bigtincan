import React, { useState } from "react";
import "../styles/AddUserForm.css";
import FormInput from "./FormInput.js";
import { v4 as uuidv4 } from "uuid";
import { ADD_USER } from "../state/models/profiles/actions";
import { useDispatch } from "react-redux";

function AddUserForm({ setAddUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyCatchPhrase, setCompanyCatchPhrase] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  // add user given user inputs, and set defaults
  const handleAddUser = () => {
    let newUserData = {
      id: uuidv4(),
      firstName: firstName ? firstName : "John",
      lastName: lastName ? lastName : "Doe",
      email: email ? email : "Unknown",
      phone: phone ? phone : "Unknown",
      website: website ? website : "Unknown",
      address: address ? address : "Unknown",
      companyName: companyName ? companyName : "Unknown",
      companyCatchPhrase: companyCatchPhrase ? companyCatchPhrase : "Unknown",
      avatar: avatar ? avatar : "Unknown",
    };
    dispatch({
      type: ADD_USER,
      payload: {
        data: newUserData,
      },
    });
    setAddUser(false);
    return;
  };

  return (
    <div className="AddUserFormContainer">
      <div className="AddUserForm">
        <FormInput
          state={firstName}
          setState={setFirstName}
          placeholder={"First Name"}
        />
        <FormInput
          state={lastName}
          setState={setLastName}
          placeholder={"Last Name"}
        />
        <FormInput state={email} setState={setEmail} placeholder={"Email"} />
        <FormInput state={phone} setState={setPhone} placeholder={"Phone"} />
        <FormInput
          state={website}
          setState={setWebsite}
          placeholder={"Website"}
        />
        <FormInput
          state={address}
          setState={setAddress}
          placeholder={"Address"}
        />
        <FormInput
          state={companyName}
          setState={setCompanyName}
          placeholder={"Company Name"}
        />
        <FormInput
          state={companyCatchPhrase}
          setState={setCompanyCatchPhrase}
          placeholder={"Company Catch Phrase"}
        />
        <FormInput
          state={avatar}
          setState={setAvatar}
          placeholder={"Avatar URL"}
        />
        <button onClick={() => handleAddUser()}>Create</button>
        <button onClick={() => setAddUser(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default AddUserForm;
