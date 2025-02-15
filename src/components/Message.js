import React from "react";

import { CheckCircleIcon } from "@heroicons/react/solid";

const Message = ({ user, data, showDetails }) => {
  /* 
    props 
      - user : it gives the user details
      - data : the data which we get from the firebase and it is single document 
      - showDetails : it means that do we need to show the message sender's details
  */

  // Checking the current logged in user is the sender of current message
  const isUserSender = user.uid === data.uid;

  const defaultImg =
    "https://worldgovernmentmovement.org/wp-content/uploads/2021/05/profilepic.jpg";

  return (
    <div className={`message ${isUserSender ? "sent" : "received"}`}>
      <div className="flex flex-col">
        {/*
         * We only want to show the receiver image
         * here we are checking if current message is not send by the logged in user then simply show the sender info
         * it will show the image and name of the sender of the current message
         */}

        {!isUserSender && showDetails && (
          <div className="flex items-center my-1 mt-2">
            <img
              className="rounded-full w-7 h-7"
              width={30}
              height={30}
              src={data.photoURL ? data.photoURL : defaultImg}
              alt=""
            />
            <div className="font-medium text-gray-500 ml-2">
              <p className="">{data.displayName}</p>
            </div>
          </div>
        )}

        {/* Message Container */}
        <section
          className={`text-sm bg-blue-500 max-w-xs text-white p-2 relative rounded-xl sm:max-w-lg flex flex-col shadow-md ${!isUserSender && !showDetails && " -mt-6"}`}
        >
          {/* If the user sended the image then show the image in the message */}
          {data.sendImage && (
            <img
              className="rounded-md max-h-full max-w-full mb-2"
              src={data.sendImage}
              alt=""
            />
          )}
          <p className="break-all">{data.text}</p>
          <div className="text-xs font-mono text-gray-300 flex justify-end items-center pt-0.5">
            {data.createdAt && (
              <p>{new Date(data.createdAt?.toDate()).toTimeString().slice(0, 5)}</p>
            )}

            {isUserSender && (
              <p className="ml-1 text-white"><CheckCircleIcon className="w-4 h-4" /></p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Message;
