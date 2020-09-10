import React from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/Tourlist/Tourlist";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />
      </React.Fragment>
    );
  }
}
export default App;
