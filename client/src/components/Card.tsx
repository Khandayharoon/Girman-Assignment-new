import React, { useState, useRef } from "react";

// Define the User type for the user prop
interface User {
  first_name: string;
  last_name: string;
  city: string;
  contact_number: string;
  image_link: string;
}

// Define the props for the Card component
interface CardProps {
  user: User;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        ref={cardRef}
        className={`relative bg-white w-full max-w-[340px] h-auto rounded-[16px] p-[24px] mb-[16px] shadow-md`}
      >
        <div className="flex flex-col">
          {/* Image */}
          <div className="w-[78px] h-[78px] mb-4">
            <img
              className="w-[78px] h-[78px] rounded-full"
              src={user.image_link}
              alt={`${user.first_name} ${user.last_name}`}
            />
          </div>
          {/* Name */}
          <div className="font-semibold text-[32px] leading-[39px]">
            {user.first_name} {user.last_name}
          </div>
          {/* Location */}
          <div className="flex items-center gap-[8px] mt-2">
            <span>
              <svg
                width={10}
                height={13}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </span>
            <span>{user.city}</span>
          </div>
          {/* Contact Number */}
          <div className="flex gap-[6px] items-center justify-between mt-5">
            <div className="flex items-center gap-[6px]">
              <span>
                <svg
                  width={13}
                  height={13}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </span>
              <span>{user.contact_number}</span>
            </div>
            <div>
              <button
                className="w-full h-[40px] bg-zinc-950 rounded-[8px] px-4 py-2 text-white text-[14px]"
                onClick={handleOpenModal}
              >
                Fetch Details
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <>
            <div className="fixed inset-0 z-[1000] backdrop-blur-sm"></div>
            <div className="absolute z-[1000] top-0 left-0 w-[512px] h-[475px] flex items-center justify-center">
              <div className="relative bg-white text-black rounded-md p-6 w-full h-full">
                <h2 className="text-2xl mb-1 font-semibold">Fetch Details</h2>
                <p className="text-sm mb-2">
                  Here are the details of the following employee
                </p>
                <h2 className="text-xl">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="">Location: {user.city}</p>
                <p className="">Contact Number: {user.contact_number}</p>
                <p className="text-sm mb-2">Profile Picture:</p>
                <div className="w-[207px] h-[207px] mb-5">
                  <img className="w-full h-full" src={user.image_link} alt="" />
                </div>
                <button
                  className="bg-gray-800 text-black px-4 py-2 rounded-md"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
