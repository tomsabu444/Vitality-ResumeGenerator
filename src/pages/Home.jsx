import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <h1>Resume Generator</h1>
      <div className="test"></div>
    </Container>
  );
}

export default Home;


const Container = styled.div`
display: flex;
justify-content: center;


h1 {
  padding-top: 200px;
}

.test {
  height: 200vh;
}


`;
