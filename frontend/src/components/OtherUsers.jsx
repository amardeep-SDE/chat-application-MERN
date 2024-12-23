import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  // my custom hook
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) return; // early return in react
  console.log("otherUsers:", otherUsers);
  const usersArray = otherUsers?.otherUsers; // Access the nested array

  if (!Array.isArray(usersArray)) {
    console.error("usersArray is not an array:", usersArray);
    return null;
  }
  return (
    <>
       <div className="overflow-auto flex-1">
      {usersArray.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
    </>
  );
};

export default OtherUsers;
