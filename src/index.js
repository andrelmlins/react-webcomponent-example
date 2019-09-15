import React from "react";
import defineElement from "./custom-element";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello World!
      </Button>
    );
  }
}

defineElement(App, "button-test", [], []);
