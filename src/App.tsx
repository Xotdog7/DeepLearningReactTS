import React from "react";
import User from "./components/User";


function App() {
  const users = {
    name: "Rustem",
    lastname: "Seilov",
    dateOrBirth: "08.12.2000",
    email: "Rustem710v@gmail.com",
    gender: "male",
  };
  return (
    <div className="App"> 
      <User
        name={users.name}
        lastname={users.lastname}
        dateOrBirth={users.dateOrBirth}
        email={users.email}
        gender={users.gender}
      />
    </div>
  );
}

export default App;
