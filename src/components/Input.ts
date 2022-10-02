import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import styled, { css } from "styled-components";

export const FormDiv = styled.div``;

export const InputItems = styled.form`
  display: flex;
  flex-direction: column;
  width: 38%;
  margin-left: 50%;

  ${(props) =>
    props.id === "signupItems" &&
    css`
      margin-top: 12%;
    `}
  ${(props) =>
    props.id === "loginItems" &&
    css`
      margin-top: 20%;
    `}
  

  @media (max-width: 700px) {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
  }
`;

export const CustomInput = styled.input`
  font-size: ${(props) => (props.placeholder = "15px")};
  padding: 3.5%;
  border: 1px solid #f1f1fa;
  border-radius: 1em;

  ${(props) =>
    props.id === "name" &&
    css`
      margin-top: 8%;
    `}

  ${(props) =>
    props.id === "email" &&
    css`
      margin-top: 8%;
    `}
    ${(props) =>
    props.id === "password" &&
    css`
      margin-top: 8%;
    `}

  ${(props) =>
    props.id === "check" &&
    css`
     width:5%;
    
      
      @media (max-width: 1045px) {
        top: -20px;
      }
      @media (max-width: 752px) {
        top: -30px;
      }
      @media (max-width: 700px) {
        top: 0px;
     
    `}

  -ms-input-placeholder {
    color: black;
  }
`;

export const Text = styled.p`
  ${(props) =>
    props.id === "signin" &&
    css`
      font-family: Inter, sans-serif;
      font-style: normal;
      margin-left: 2%;
      font-weight: 400;
      font-size: 1em;
      line-height: 1.5em;
    `}

  ${(props) =>
    props.id === "login" &&
    css`
      font-family: Inter, sans-serif;
      text-align: center;
      margin-top: 4%;
      font-style: normal;
      font-size: 1.01em;
      color: #000000;

      @media (max-width: 1045px) {
        top: 96%;
      }
      @media (max-width: 840px) {
        width: max-content;
      }
      @media (max-width: 800px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 753px) {
        top: 101%;
      }
      @media (max-width: 700px) {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    `}

    ${(props) =>
    props.id === "orwith" &&
    css`
      font-family: "'Inter', sans-serif;";
      text-align: center;
      margin-top: 3%;
      color: #91919f;
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      @media (max-width: 1045px) {
        top: 82%;
      }
      @media (max-width: 753px) {
        top: 85%;
      }
    `}

    
    ${(props) =>
    props.id === "noAcc" &&
    css`
      font-family: Inter, sans-serif;
      margin-top: 23%;
      text-align: center;
      font-weight: 300;
      font-size: 1.05em;

      @media (max-width: 957px) {
        width: 100%;
        flex-direction: column;
      }
      @media (max-width: 744px) {
        width: max-content;
      }
      @media (max-width: 700px) {
        flex-direction: row;
        width: 100%;
      }
      @media (max-width: 282px) {
        flex-direction: column;
        width: 100%;
      }
    `}
`;

export const CheckBoxDiv = styled.div`
  display: flex;

  margin-top: 4%;
`;

export const CustomAnchor = styled.a`
  text-decoration: none;
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #5352ed;
  ${(props) =>
    props.id === "forgot" &&
    css`
      text-align: center;
      margin-top: 8%;
      font-size: 1.15em;
    `}
`;

export const ShowEye = styled(FaRegEye)`
  color: #91919f;
  position: absolute;
  top: 49%;
  right: 8%;
  font-size: 1.5em;
  cursor: pointer;
`;

export const HideEye = styled(FaRegEyeSlash)`
  position: absolute;
  top: 49%;
  right: 8%;
  color: #91919f;
  font-size: 1.3em;
  cursor: pointer;
`;
