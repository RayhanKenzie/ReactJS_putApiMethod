import Navbar from "../components/navbar";
import "../styles/App.css";
import { getData } from "../utils/api";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-lime-600 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          List Data User    <a href="#" className="underline">(GET Method) &rarr;</a>
        </p>
      </div>
      <h2 className="my-8 align-center"></h2>
      <div className="grid grid-cols-2 gap-6 text-center lg:px-25">
        {users.map((user, index) => (
          <>
            <div key={index} className="flex-col sm:wrap-break-word">
              <p>Nama: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email:{user.email}</p>
            </div>
          </>

        ))
        }
      </div>
    </>
  );
}

export default Home
