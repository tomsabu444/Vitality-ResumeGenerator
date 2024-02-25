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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .event-card {
    transition: all 0.2s;
    cursor: pointer;
    border-radius: 16px;
    height: 400px; /* Adjust the height */
    overflow: hidden;

    &:hover {
      transform: scale(1.1);
    }

    .card-content {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Adjusted to contain */
      }
    }
  }
`;

const MainComponent = () => {
  const nav = useNavigate();
  const imageUrls = [
    "https://media.discordapp.net/attachments/1207033542677372928/1211026083026178181/pikachu.jpg?ex=65ecb2ed&is=65da3ded&hm=9e52568c418b6e733bbbda9fa81bf8d7dbee06b2e088eda6cb7153eaef077e74&=&format=webp&width=496&height=701",
    "https://media.discordapp.net/attachments/1207033542677372928/1211026169378635788/ditto.jpg?ex=65ecb302&is=65da3e02&hm=1963a122caeb997098866c5ffdf59c35a4f64202a57daf98aeb9fcce8736b977&=&format=webp&width=413&height=583",
    "https://media.discordapp.net/attachments/1207033542677372928/1211026083315589230/onyx.jpg?ex=65ecb2ee&is=65da3dee&hm=4c380488dfea5846562c792dff46904da10c0b71ce38a5bb8b71ccfb60c3c023&",
    "https://media.discordapp.net/attachments/1207033542677372928/1211026083625832518/nosepass.jpg?ex=65ecb2ee&is=65da3dee&hm=bf45ba0f24d08fca222ba71c7cf5bef2bcd9348acac3f6b811238f7d69ae9df1&=&format=webp&width=496&height=701",
    "https://media.discordapp.net/attachments/1207033542677372928/1211026083970027631/leafish.jpg?ex=65ecb2ee&is=65da3dee&hm=fab23594681eda8bfe3e444e2d5294d06a97a62c3c0a398a88ccb6353d36f963&=&format=webp&width=496&height=701",
    // Add more image URLs for each card as needed
  ];

  const [search, setSearch] = useState("");
  const [curEvents, setCurEvents] = useState([]);
  const options = [
    { value: "All", label: "All" },
    { value: "Recomended", label: "Recomended" },
    { value: "Professional", label: "Professional" },
  ];

  useEffect(() => {
    // Fetch data or setCurEvents with your data
    // Example:
    // setCurEvents([...]); // Set the events fetched from your API or database
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
        {imageUrls.map((url, index) => (
          <div
            className="event-card"
            onClick={() => nav(`/events/cultural/${index + 1}`)}
            key={index}
          >
            <div className="card-content">
              <img src={url} alt={`card-image-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MainComponent;
