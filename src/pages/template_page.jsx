import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #222c;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 0 5px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
    font-size: 2.1rem;

    h1 {
      color: white;
      font-size: 6xl;
      font-family: "neu", sans-serif;
      letter-spacing: widest;
    }
  }

  .category-selector {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .select-container {
      position: relative;
      background-color: transparent;

      select {
        width: 100%;
        height: 100%;
        font-family: "pop", sans-serif;
        border-radius: 8px;
        background-color: transparent;
        border: 1px solid gray;
        color: black;
        padding: 8px;
        font-size: small;
        outline: none;
        cursor: pointer;
      }

      label {
        position: absolute;
        left: 5px;
        top: -15px;
        font-size: x-small;
        color: #000000;
        font-weight: bold;
        transition: all 0.3s;
        z-index: 2;
      }

      select:focus + label {
        font-size: x-small;
        color: #000000;
      }
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin: 0 4px 12px;
  }
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }

  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  .event-card {
    transition: all 0.2s;
    cursor: pointer;
    border-radius: 16px;

    &:hover {
      transform: scale(1.1);
    }

    .card-content {
      max-width: 100%;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        object-fit: cover;
        height: 120px;
      }
    }
  }
`;

const Template_Page = () => {
  const nav = useNavigate();
  const [search, setSearch] = useState("");
  const [curEvents, setCurEvents] = useState([]);
  const options = [
    { value: "All", label: "All" },
    { value: "Recomended", label: "Recomended" },
    { value: "Professional", label: "Professional" },
  ];

  useEffect(() => {
    // Example: Create an array of 10 placeholder events with image URLs
    const placeholderEvents = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      imgurl: `assets/image${index + 1}.jpg`, // Assuming your images are in the "assets" folder
    }));

    setCurEvents(placeholderEvents);
  }, []);
  const handleChangeCategory = (category) => {
    // Logic to filter events based on selected category
    // Example:
    // if (category === "All") {
    //   setCurEvents([...]); // Set all events
    // } else {
    //   setCurEvents([...]); // Set events filtered by category
    // }
  };

  return (
    <Container>
      <div className="header">
        <h1>Choose from our templates</h1>
      </div>
      <p className="pp">
        Unlock Your Potential: Explore Our Stylish Resume Templates
      </p>
      <div className="category-selector">
        <div className="select-container">
          <select
            onChange={(item) => {
              handleChangeCategory(item.target.value);
            }}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label>Categories</label>
        </div>
      </div>
      <div className="grid-container">
        {curEvents.map((event, index) => (
          <div
            className="event-card"
            onClick={() => nav(`/events/cultural/${event.id}`)}
            key={index}
          >
            <div className="card-content">
              <img
                src={event.imgurl ? event.imgurl : "placeholder_image_url"}
                alt={`${event.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Template_Page;
