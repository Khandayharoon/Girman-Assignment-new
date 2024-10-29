import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
}

function Search() {
  const [inputValue, setInputValue] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const fetchUsers = async (value: string) => {
    try {
      const response = await axios.get(
        `https://girman-assignment-new.onrender.com/user/${value}`
      );
      const users: User[] = response.data.users;
      setUsers(users);

      navigate(`/search/${encodeURIComponent(value)}`, { state: { users } });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setUsers([]);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUsers(inputValue);
  };

  return (
    <div className="w-full max-w-[734px] mx-auto px-4">
      <div className="bg-white h-[51px] rounded-[12px] gap-[10px] border-[1px] border-[#D7D7EA] flex items-center px-4 py-2">
        <div className="flex-shrink-0">
          <svg
            width="15"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#71717A"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </div>
        <div className="flex-grow">
          <form onSubmit={handleFormSubmit}>
            <input
              className="outline-none indent-3 bg-transparent w-full h-[29px] text-gray-700 placeholder-gray-500"
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
