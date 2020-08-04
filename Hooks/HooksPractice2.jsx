import React, { useState } from "react";
import { useEffect } from "react";

const HookPrac2 = () => {
  const [fruit, setFruit] = useState("apple");
  const [name, setName] = useState("js");
  const [surname] = useState("ramaka");

  useEffect(function saveData() {
    localStorage.setItem("Name", name);
    localStorage.setItem("Surname", surname);
  });

  function handleNameChange() {
    setName("vjs");
  }

  useEffect(function updateTitle() {
    document.title = name + " " + surname;
  });

  return (
    <>
      {fruit}
      <br />
      <button onClick={() => setFruit("banana")}>Change Fruit</button>
      <br />
      {name}
      <br />
      <button onClick={() => handleNameChange()}>CHANGE NAME</button>
    </>
  );
};

export default HookPrac2;
