import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        const response = JSON.parse(request.response);
        setUsers(response);
      }
    };
    request.open("GET", "http://localhost:5000/users", true);
    request.send();
  }, []);
  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div className="App">
      {users && users.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

export default App;
