import React, { useState } from "react";

const initState = {
  fname: "Bruce",
  lname: " Wayne",
};

function ObjectUseState() {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    //  not working as ther pointer is at the same object person
    //  hence it is not working
    // person.fname = "Clark";
    // person.lname = "kent";
    // setPerson(person);

    setPerson({
      fname: "Deeps",
      lname: "Arya",
    });

    console.log("ObjectUseState 12");
    // OR

    const newPerson = {
      ...person,
      fname: "Money",
      lname: "Gupta",
    };
    setPerson(newPerson);
    console.log("ObjectUseState  12221");
  };

  console.log("ObjectUseState");
  return (
    <div>
      <button onClick={changeName}>
        {" "}
        {person.fname} {person.lname}{" "}
      </button>
    </div>
  );
}

export default ObjectUseState;
