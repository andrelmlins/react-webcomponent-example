import React from "react";
import defineElement from "./custom-element";
import Button from "@material-ui/core/Button";

const App = () => (
  <Button variant="contained" color="primary">
    Hello World!
  </Button>
);

defineElement(App, "button-test", [], []);
