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
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    margin-top: 20px;
  }

  .event-card {
    transition: all 0.2s;
    cursor: pointer;
    border-radius: 16px;
    height: 430px;
    margin: 30px 0;
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

const Template_page = () => {
  const nav = useNavigate();
  const imageUrls = [
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544388631035956/azurill.jpg?ex=66169a30&is=66042530&hm=5da695226ee8609698c32ac946a28d3ecb6be2a524e8a48380bcc71f7ea67c83&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544389017042945/bronzor.jpg?ex=66169a30&is=66042530&hm=e45f16c0206a1b5b6d93de0c8de11bac1305944e6c520d6828fd080de57db928&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544389293736027/chikorita.jpg?ex=66169a30&is=66042530&hm=e4fcb1f3e44f47603e577c7efeef3c3c6efaf24e2ffdd7b3c8e8f37ea25d7785&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544389583147088/ditto.jpg?ex=66169a30&is=66042530&hm=1ddb75e976daed031adce6f54b931955a19fcf86d568f37ae62fdd5aedb7d7fb&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544389868486656/gengar.jpg?ex=66169a30&is=66042530&hm=be20bb9a2af396031e492c7f0d3a553ae407d650dc6c24488f01674783cae046&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544390195511437/glalie.jpg?ex=66169a30&is=66042530&hm=3e142ab25fefb9bdde1219b9229cfc84a9f52d8a3893268bdcab4788cebad0cf&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544390535254147/kakuna.jpg?ex=66169a30&is=66042530&hm=f045e52c48815416ff72c70db2dffb75500ae6df9f9a6af77c7afa5f1bcf675e&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544390971457608/leafish.jpg?ex=66169a30&is=66042530&hm=64c139288243c1064f27200b5ff816190205372df5a7450e44532d3ca5b64009&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544391286034482/nosepass.jpg?ex=66169a30&is=66042530&hm=ee1a27f3b067c7c267f21caa50dc9893acaadb03df87b8040e42adce7ea54104&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544457292058774/onyx.jpg?ex=66169a40&is=66042540&hm=de6c69ab66d6c8c49c17ae23ec4b4bb4a324c68f91a5e6329f2f7fe916075112&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544457870741605/pikachu.jpg?ex=66169a40&is=66042540&hm=3c988c390f6a42a819ec8beb4d9c790476ea287fce5ede52b5bece125a6451b0&",
    "https://cdn.discordapp.com/attachments/1183273568184832102/1222544458269069493/rhyhorn.jpg?ex=66169a40&is=66042540&hm=9c16df521ed5011dd929373a6b458bf86de199a5185bb4468c26ba0b764a23ac&",
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
    let filteredImages = [];
    if (category === "All") {
      filteredImages = imageUrls;
    } else if (category === "Recomended") {
      filteredImages = [
        imageUrls[10], // Index 10
        imageUrls[11], // Index 11
        imageUrls[8], // Index 8
        imageUrls[9], // Index 9
      ];
    } else if (category === "Professional") {
      // Add logic for filtering professional images
    }
    setCurEvents(filteredImages);
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
            onClick={() => nav(`/user-details`)}
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

export default Template_page;
