import React, { useState, useEffect } from "react";
import "./styles/App.css";
import ProfileCard from "./components/ProfileCard.js";
import faker from "faker";
import Navbar from "./components/Navbar";
import AddUserForm from "./components/AddUserForm";
import { useSelector, useDispatch } from "react-redux";
import { ADD_USER } from "./state/models/profiles/actions";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [addUser, setAddUser] = useState(false);

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(15);
  }, []);

  const getUsers = async (num) => {
    // add random users with formatted random data
    for (let i = 0; i < num; i++) {
      // random user data
      let randomCard = faker.helpers.createCard();
      // random avatar
      let avatar = faker.image.avatar();

      // regex to remove titles from random data names
      const regex = /(^.*?(?=\b\w+ )|,[\s\w]*$)/;
      const result = randomCard.name.replace(regex, "");
      let names = result.split(" ");
      let firstName = names[0] ? names[0] : "John";
      let lastName = names[1] ? names[1] : "Doe";

      let data = {
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        email: randomCard.email,
        phone: randomCard.phone,
        website: randomCard.website,
        address: `${randomCard.address.streetB}, ${randomCard.address.streetD}, ${randomCard.address.streetA}, ${randomCard.address.zipcode}`,
        companyName: randomCard.company.name,
        companyCatchPhrase: randomCard.company.catchPhrase,
        avatar: avatar,
      };
      await dispatch({
        type: ADD_USER,
        payload: {
          data: data,
        },
      });
    }
    setIsLoading(false);
    return;
  };

  return (
    <div className="App">
      <Navbar />
      <>
        {addUser ? (
          <AddUserForm setAddUser={setAddUser} />
        ) : (
          <>
            <button onClick={() => setAddUser(true)}>Create New Profile</button>
            <button
              onClick={() => {
                setIsLoading(true);
                getUsers(5);
              }}
            >
              Show More
            </button>
          </>
        )}
        {!isLoading &&
          Object.keys(users)
            .reverse()
            .map((user, i) => {
              return (
                <ProfileCard
                  key={i}
                  data={users[user]}
                  setIsLoading={setIsLoading}
                />
              );
            })}
      </>
    </div>
  );
}

export default App;
