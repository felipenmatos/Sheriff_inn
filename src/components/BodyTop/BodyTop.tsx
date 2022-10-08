import React from "react";
import styled from "styled-components";
import imgOne from "../../assets/BodyTopOne.jpg";
import imgTwo from "../../assets/BodyTopTwo.jpg";

function BodyTop() {
  return (
    <Container>
      <Cards>
        <CardOne src={imgOne} alt="morro de sp" />
        <CardTwo src={imgTwo} alt="pousada xerife" />
      </Cards>
      <ContainerDescription>
        <Title>Titulo do texto</Title>
        <Description>
          Texto com um breve resumo sobre a pousada, e o benefício de ficar
          hospedado na pousada, focar nos pontos positivos para encantar quem
          visualizar e incentivar a clicar no botão.
        </Description>
        <Button>SABER MAIS</Button>
      </ContainerDescription>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Cards = styled.div`
  display: flex;
  width: 50%;
`;

const CardOne = styled.img`
  margin-left: 40px;
  width: 289px;
  height: 419px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const CardTwo = styled.img`
  margin-top: 230px;
  margin-left: -120px;
  width: 294px;
  height: 164px;
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ContainerDescription = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin-bottom: -5px;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 56px;
  color: #000000;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
`;

const Button = styled.button`
  width: 180px;
  height: 63px;
  background: #4c89bc;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export default BodyTop;
