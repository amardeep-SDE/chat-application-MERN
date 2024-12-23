import React from "react";

const SendInput = () => {
  return (
    <>
      <form className="px-4 my-3">
        <div className="w-full relative">
          <input
            // value={message}
            type="text"
            placeholder="Send a message..."
            className="border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white"
          />
          <button
            type="submit"
            className="absolute flex inset-y-0 end-0 items-center pr-4"
          ></button>
        </div>
      </form>
    </>
  );
};

export default SendInput;
