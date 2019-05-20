import React from "react";
import { clipboard } from "electron";
import Button from "@material-ui/core/Button";

import logo from "./logo.svg";
import "./index.css";

type Props = {
  className?: string;
};

const Main: React.FC = props => {
  return (
    <div className="Main">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            clipboard.writeText("Example String");
          }}
        >
          copy
        </Button>
      </header>
    </div>
  );
};

export default Main;
