import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <Container>
      <ImgLogo src={logo} alt="logo" />
      <DivSteps>
        <Step>Início</Step>
        <Step>Sobre</Step>
        <Step>Quartos</Step>
        <Step>Localização</Step>
        <Step>Contato</Step>
      </DivSteps>
      <Line />
      <Button>Faça sua reserva</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImgLogo = styled.img`
  width: 230px;
  margin-left: 29px;
  margin-rigth: -60px;
`;

const DivSteps = styled.div`
  width: 600px;
  margin-top: 25px;
  margin-left: -20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Step = styled.p`
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 42px;

  color: #ffffff;
`;

const Line = styled.div`
  width: 2px;
  height: 55px;
  margin-top: 40px;
  margin-left: -40px;
  background-color: #ffffff;
`;

const Button = styled.button`
  cursor: pointer;
  width: 190px;
  height: 55px;
  margin-top: 40px;
  margin-right: 29px;
  border: 3px solid #ffffff;
  background: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 38px;
  color: #ffffff;
`;

export default Header;
