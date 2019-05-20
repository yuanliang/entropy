import * as React from "react";

import "./index.css";

type Props = {
  className?: string;
};

const AppContainer: React.FC = props => {
  const { children } = props;
  return <div className="AppContainer">{children}</div>;
};

export default AppContainer;
