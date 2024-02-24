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
          {/* Add more color options as needed */}
        </ColorOptionsContainer>
      </ColorPickerContainer>
    </Container>
  );
}

export default Template_Page;

const Container = styled.div``;

const ColorPickerContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
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
  background-color: transparent;
  border: 2px solid #d3d3d3; /* Grey border */
  border-radius: 50%;
`;
