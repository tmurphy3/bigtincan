import React, { useState } from "react";
import "../styles/ProfileCard.css";
import LanguageIcon from "@material-ui/icons/Language";
import HomeIcon from "@material-ui/icons/Home";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import EmailIcon from "@material-ui/icons/Email";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import UIAvatar from "react-ui-avatars";
import EditProfileCard from "../components/EditProfileCard.js";
import { DELETE_USER } from "../state/models/profiles/actions";
import { useDispatch } from "react-redux";
const logo = require("../assets/bigtincan_logo.png");

function ProfileCard({
  setIsLoading,
  data,
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
  const [editMode, setEditMode] = useState(false);
  const [initialsAvatar, setInitialsAvatar] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteUser = async () => {
    await dispatch({
      type: DELETE_USER,
      payload: {
        id: id,
      },
    });
    setIsLoading(false);
    return;
  };

  return (
    <div className="ProfileCard">
      {editMode ? (
        <EditProfileCard
          setIsLoading={setIsLoading}
          setEditMode={setEditMode}
          data={data}
        />
      ) : (
        <>
          <div className="ProfileCard__imageContainer">
            {initialsAvatar ? (
              <UIAvatar name={`${firstName} ${lastName}`} color="#551a8b" />
            ) : (
              <img
                src={`${avatar}`}
                alt=""
                onError={() => setInitialsAvatar(true)}
              />
            )}
          </div>
          <div className="ProfileCard__infoContainer">
            <h1 style={{ color: "black" }}>{`${firstName} ${lastName}`}</h1>
            <div className="ProfileCard__infoElement">
              <EmailIcon style={{ color: "#272727" }} />
              <p>{email}</p>
            </div>
            <div className="ProfileCard__infoElement">
              <HomeIcon style={{ color: "#272727" }} />
              <p>{address}</p>
            </div>
            <div className="ProfileCard__infoElement">
              <PhoneEnabledIcon style={{ color: "#272727" }} />
              <p>{phone}</p>
            </div>
            <div className="ProfileCard__infoElement">
              <LanguageIcon style={{ color: "#272727" }} />
              <p style={{ color: "blue" }}>{website}</p>
            </div>
            <div className="ProfileCard__companyContainer">
              <img
                src={logo.default}
                style={{ width: "70px", height: "60px" }}
                alt=""
              />
              <div className="ProfileCard__companyInfo">
                <p style={{ fontWeight: "bold" }}>{companyName}</p>
                <p>{companyCatchPhrase}</p>
              </div>
            </div>
            <div className="ProfileCard__editButton">
              <EditIcon
                style={{ color: "#272727", cursor: "pointer" }}
                onClick={() => setEditMode(true)}
              />
              <DeleteIcon
                style={{ color: "#272727", cursor: "pointer" }}
                onClick={() => {
                  setIsLoading(true);
                  handleDeleteUser();
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileCard;
