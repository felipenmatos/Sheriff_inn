import React from "react";
import styled from "styled-components";

function Search() {
  return (
    <Card>
      <Column>
        <Label>Data de Ida</Label>
        <InputDate />
      </Column>
      <Column>
        <Label>Data de Retorno</Label>
        <InputDate />
      </Column>
      <Column>
        <Label>N. Adultos</Label>
        <InputNumber />
      </Column>
      <Column>
        <Label>N. Crianças</Label>
        <InputNumber />
      </Column>
      <Button>Buscar</Button>
    </Card>
  );
}

const Card = styled.div`
  width: 900px;
  height: 140px;
  margin-top: 60px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(76, 137, 188, 0.93);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;

const Column = styled.div`
  display: flex;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  margin-top: -28px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #ffffff;
`;

const InputDate = styled.input`
  width: 220px;
  height: 63px;
  background: #b4cbfb;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const InputNumber = styled.input`
  width: 63px;
  height: 63px;
  background: #b4cbfb;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  width: 199px;
  height: 65px;
  background: #b4cbfb;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 42px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export default Search;
