import React from "react";
import styled from "styled-components";
import background from "./assets/Background.png";
import Header from "./components/Header/Header";
import SlideText from "./components/SlideText/SlideText";
import Search from "./components/Search/Search";
import BodyTop from "./components/BodyTop/BodyTop";

function App() {
  return (
    <Container>
      <DivTop>
        <Header />
        <SlideText />
        <Center>
          <Search />
        </Center>
      </DivTop>
      <Body>
        <BodyTop />
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100% 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f2fffe;
`;

const DivTop = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  border-radius: 0px 0px 50px 50px;
`;

const Body = styled.div`
  height: 100vh;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default App;
