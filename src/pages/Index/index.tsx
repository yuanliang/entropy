import React from "react";
import AppContainer from "../components/AppContainer";
import Aside from "./components/Aside";
import Main from "./components/Main";

import "./index.css";

const Index: React.FC = () => {
  return (
    <div className="Wrap">
      <AppContainer>
        <Aside />
        <Main />
      </AppContainer>
    </div>
  );
};

export default Index;
