import React from "react";
import Button from "./Button";
import InputField from "./InputField";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Component Library</h1>

      <div className="content">
        <Button
          state="default"
          variation="primary"
          onClick={() => console.log("Button clicked")}
        >
          Primary Button
        </Button>
        <Button state="hover" variation="secondary">
          Secondary Button
        </Button>
        <Button state="active" variation="danger">
          Danger Button
        </Button>
        <Button state="disabled" disabled>
          Disabled Button
        </Button>
        <br></br>
        <Button
          state="default"
          variation="primary"
          onClick={() => console.log("Button clicked")}
          className="my-custom-class"
          style={{ backgroundColor: "#f00", color: "#fff" }}
        >
          Primary Button
        </Button>
        <br></br>
        <InputField
          type="text"
          state="default"
          value=""
          onChange={(e) => console.log(e.target.value)}
          className="my-custom-class"
          style={{ border: "2px solid #f00" }}
        />
        <br></br>

        <InputField
          type="text"
          state="default"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
        <InputField
          type="email"
          state="focus"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
        <InputField
          type="password"
          state="error"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
