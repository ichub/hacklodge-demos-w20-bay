import * as React from "react";
import * as ReactDOM from "react-dom";

const div = document.createElement("div");
document.body.appendChild(div);

class App extends React.Component {
  public render() {
    return <div>this is my app</div>;
  }
}

ReactDOM.render(<App />, div);
