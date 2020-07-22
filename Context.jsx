import React, { Component } from "react";

const ContextComp = React.createContext();

class MainComp extends Component {
  render() {
    return (
      <>
        <SubComp1 />
      </>
    );
  }
}

export default MainComp;

const SubComp1 = () => {
  return (
    <>
      <p>Sub-Component 1</p>
      <ContextComp.Provider value="jayasree">
        <SubComp2 />
        <SubComp3 />
      </ContextComp.Provider>
    </>
  );
};

const SubComp2 = () => {
  return (
    <>
      <p>Sub-Component 2</p>
    </>
  );
};

const SubComp3 = () => {
  return (
    <>
      <p>Sub-Component 3</p>
      <ContextComp.Consumer>
        {(name) => {
          return <div>Hello {name}</div>;
        }}
      </ContextComp.Consumer>
    </>
  );
};
