import React from "react";
import "./App.css";
import List from "./routes/List";

class App extends React.Component {
  render() {
    return (
      <div>
        <List location={{ num: "1" }} />
      </div>
    );
  }
}

export default App;
