import React, { useState } from "react";
import styled from "styled-components";

function Template_Page() {
  const [selectedColor, setSelectedColor] = useState(""); // Initial color

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <Container>
      <h1 className="main-h">Choose from our templates</h1>
      <p>Unlock Your Potential: Explore Our Stylish Resume Templates</p>
      <ColorPickerContainer>
        <label htmlFor="colorPicker">COLOR:</label>
        <ColorOptionsContainer>
          <ColorOption
            onClick={() => handleColorChange("")}
            selected={!selectedColor}
          >
            {selectedColor === "" && <NoColorMarker />}
          </ColorOption>
          <ColorOption
            onClick={() => handleColorChange("#000000")}
            selected={selectedColor === "#000000"}
            backgroundColor="#000000"
          />
          <ColorOption
            onClick={() => handleColorChange("#FF0000")}
            selected={selectedColor === "#FF0000"}
            backgroundColor="#FF0000"
          />
          <ColorOption
            onClick={() => handleColorChange("#00FF00")}
            selected={selectedColor === "#00FF00"}
            backgroundColor="#00FF00"
          />
          <ColorOption
            onClick={() => handleColorChange("#0000FF")}
            selected={selectedColor === "#0000FF"}
            backgroundColor="#0000FF"
          />
          <ColorOption
            onClick={() => handleColorChange("#FFFF00")}
            selected={selectedColor === "#FFFF00"}
            backgroundColor="#FFFF00"
          />
          <ColorOption
            onClick={() => handleColorChange("#FF00FF")}
            selected={selectedColor === "#FF00FF"}
            backgroundColor="#FF00FF"
          />
          <ColorOption
            onClick={() => handleColorChange("#00FFFF")}
            selected={selectedColor === "#00FFFF"}
            backgroundColor="#00FFFF"
          />
        </ColorOptionsContainer>
      </ColorPickerContainer>
      <section className="recommended">
        <div className="line"></div>
        <h2>RECOMMENDED</h2>
        <div className="line"></div>
      </section>
    </Container>
  );
}

export default Template_Page;

const Container = styled.div`
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  .recommended {
    display: flex;
    justify-content: center;
  }
  .line {
    width: 400px;
    height: 6px;
    background-color: grey;
    border-radius: 8px;
    margin: auto 10px;
  }
`;

const ColorPickerContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
`;

const ColorOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center; /* Center vertically */
`;

const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  border: 2px solid transparent; /* Initial transparent border */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* Add black border when selected */
  ${({ selected }) =>
    selected &&
    `
    border-color: black;
  `}
`;

const NoColorMarker = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid black;
  background-color: #5b5959;
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
