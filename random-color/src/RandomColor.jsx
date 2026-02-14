
import React, { useEffect, useState } from 'react';

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }
  function handleCreateRandomHexColor() {
    console.log("HEX BUTTON CLICKED");
    //# followed by 6 digits
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor)

  }

  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)


    setColor(`rgb(${r},${g},${b})`)
    // logic here
  }
  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor
    else handleCreateRandomHexColor
  }, [typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
      className="container"
    >
      <button onClick={() => setTypeOfColor('hex')}>
        Generate the hex color
      </button>

      <button onClick={() => setTypeOfColor('rgb')}>
        Generate the rgb color
      </button>

      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          marginTop: "40px",
          flexDirection:"column",
          gap:"20px"
        }}

      >
        <h3>{typeOfColor === "rgb" ? "RGB" : "HEX"}</h3>
        <h1>{color}</h1>

      </div>
    </div>
  );
}

export default RandomColor;
