import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [active, setActive] = useState("red");

  console.log(active);
  useEffect(() => {
    const intervals = {
      red: 4000,
      yellow: 3000,
      green: 2000,
    };
    let timer = setTimeout(() => {
      setActive((prev) => {
        if (prev === "green") {
          return "red";
        } else if (prev === "red") {
          return "yellow";
        } else {
          return "green";
        }
      });
    }, intervals[active]);

    return () => {
      clearTimeout(timer);
    };
  }, [active]);

  return (
    <div>
      <h1 style={{ fontSize: "16px" }}>Traffic Light</h1>
      <div
        style={{
          height: "200px",
          width: "80px",
          backgroundColor: "black",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          padding: "6px",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            height: "60px",
            width: "60px",
            backgroundColor: "red",
            borderRadius: "50%",
            opacity: active === "red" ? 1 : 0.3,
          }}
        ></div>
        <div
          style={{
            height: "60px",
            width: "60px",
            backgroundColor: "yellow",
            borderRadius: "50%",
            opacity: active === "yellow" ? 1 : 0.3,
          }}
        ></div>
        <div
          style={{
            height: "60px",
            width: "60px",
            backgroundColor: "green",
            borderRadius: "50%",
            opacity: active === "green" ? 1 : 0.3,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
