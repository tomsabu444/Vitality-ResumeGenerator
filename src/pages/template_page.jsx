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
      <span>Unlock Your Potential: Explore Our Stylish Resume Templates</span>
      <ColorPickerContainer>
        <label htmlFor="colorPicker">Select a Color: </label>
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
    </Container>
  );
}

export default Template_Page;

const Container = styled.div``;

const ColorPickerContainer = styled.div`
  margin-top: 20px;
`;

const ColorOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  border: ${({ selected, backgroundColor }) =>
    selected && !backgroundColor
      ? "2px solid #FF0000"
      : "2px solid transparent"};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoColorMarker = styled.div`
  width: 20px;
  height: 2px;
  background-color: #ff0000;
  border-radius: 2px;
`;
