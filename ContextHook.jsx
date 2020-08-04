import React, { useContext, createContext } from "react";

const buttons = {
  add: {
    textColor: "white",
    background: "blue",
    margin: "10px",
  },
  delete: {
    textColor: "black",
    background: "red",
    margin: "10px",
  },
};

const ButtonContext = createContext(buttons.delete);

const ContextHook = () => {
  return (
      <>
      <ButtonContext.Provider value={buttons.add}>
        <AddButton />
      </ButtonContext.Provider>
      <br />
      <ButtonContext.Provider value={buttons.delete}>
        <DeleteButton />
      </ButtonContext.Provider>
      </>
  );
};

function AddButton() {
  const button = useContext(ButtonContext);
  return (
    <>
      <button
        style={{
          backgroundColor: button.background,
          color: button.textColor,
          marginTop: button.margin,
        }}
      >
        Add
      </button>
    </>
  );
}

function DeleteButton() {
  const button = useContext(ButtonContext);
  return (
    <>
      <button
        style={{
          backgroundColor: button.background,
          color: button.textColor,
          marginTop: button.margin,
        }}
      >
        Delete
      </button>
    </>
  );
}

export default ContextHook;
