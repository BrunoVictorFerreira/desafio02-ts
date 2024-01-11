import { Center, Input } from "@chakra-ui/react";
import React from "react";
import { ButtonCP } from "./ButtonCP";
import { login } from "../services/login";
import styled from "styled-components";

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 25%;
`;
const FormH1 = styled.h1`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;
  color: #9c44dc;
`;

export const Card = () => {
  return (
    <React.Fragment>
      <DivForm>
        <FormH1>Faça o login</FormH1>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <ButtonCP eventOnClick={login} />
        </Center>
      </DivForm>
    </React.Fragment>
  );
};
