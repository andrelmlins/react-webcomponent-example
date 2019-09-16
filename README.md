# WebComponent Example

## Installation

```
yarn link
// in another project
yarn link button-wc
```

## Example

```jsx
import React from "react";
import "button-wc";

const App = () => (
  <div>
    <button-wc />
  </div>
);

render(<App />, document.getElementById("root"));
```
