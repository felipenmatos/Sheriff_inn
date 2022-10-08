import React from "react";
import styled from "styled-components";

function SlideText() {
  return (
    <Container>
      <Line />
      <Column>
        <Text>Venha conhecer Morro de São Paulo</Text>
        <Button>SAIBA MAIS</Button>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 908px;
  height: 400px;
  margin-top: 20px;
  margin-left: 100px;
`;

const Line = styled.div`
  width: 15px;
  height: 100%;
  background: #ffffff;
`;

const Column = styled.div`
  height: 50%;
  margin-left: 50px;
`;

const Text = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 85px;
  line-height: 120px;
  color: #ffffff;
`;

const Button = styled.button`
  width: 190px;
  height: 55px;
  margin-top: -20px;
  background: #fff8f8;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  border: none;
  cursor: pointer;
`;

export default SlideText;