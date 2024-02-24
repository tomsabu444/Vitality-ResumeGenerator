import React from "react";
import styled from "styled-components";

// this button is from uiverse.io
const StartsButton = ({ title }) => {
  return (
    <Container>

    <button className="custom-btn2">
      {title}
      <div className="star-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 784.11 815.53"
          >
          <path
            d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
            className="fil0"
            ></path>
        </svg>
      </div>
      <div className="star-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 784.11 815.53"
          >
          <path
            d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
            className="fil0"
            ></path>
        </svg>
      </div>
      <div className="star-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 784.11 815.53"
          >
          <path
            d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
            className="fil0"
            ></path>
        </svg>
      </div>
      <div className="star-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 784.11 815.53"
          >
          <path
            d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
            className="fil0"
            ></path>
        </svg>
      </div>
      <div className="star-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 784.11 815.53"
          >
          <path
            d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
            className="fil0"
            ></path>
        </svg>
      </div>
      <div className="star-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 784.11 815.53"
          >
          <path
            d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
            className="fil0"
            ></path>
        </svg>
      </div>
    </button>
</Container>
  );
};

export default StartsButton;

const Container = styled.div`
  .custom-btn2 {
      position: relative;
      padding: 12px 35px;
      background: #92a0b5;
      font-size: 17px;
      font-weight: 500;
      color: #263238;
      border: 3px solid #92a0b5;
      border-radius: 8px;
      box-shadow: 0 0 0 #6c798e;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.75);
      outline: none;
    }
    
    .star-1 {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 25px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
  }

  .star-2 {
    position: absolute;
    top: 45%;
    left: 45%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-3 {
    position: absolute;
    top: 40%;
    left: 40%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-4 {
    position: absolute;
    top: 20%;
    left: 40%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-5 {
    position: absolute;
    top: 25%;
    left: 45%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-6 {
    position: absolute;
    top: 5%;
    left: 50%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.8s ease;
  }

  .custom-btn2:hover {
    background: transparent;
    color: #92a0b5;
    box-shadow: 0 0 25px #5f6978;
  }

  .custom-btn2:hover .star-1 {
    position: absolute;
    top: -80%;
    left: -30%;
    width: 25px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  .custom-btn2:hover .star-2 {
    position: absolute;
    top: -25%;
    left: 10%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  .custom-btn2:hover .star-3 {
    position: absolute;
    top: 55%;
    left: 25%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  .custom-btn2:hover .star-4 {
    position: absolute;
    top: 30%;
    left: 80%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  .custom-btn2:hover .star-5 {
    position: absolute;
    top: 25%;
    left: 115%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  .custom-btn2:hover .star-6 {
    position: absolute;
    top: 5%;
    left: 60%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  .fil0 {
    fill: #fffdef;
  } /*# sourceMappingURL=StarsButton.css.map */
`;
