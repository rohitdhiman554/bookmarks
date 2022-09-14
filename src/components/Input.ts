import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const InputItems = styled.div`
  display: flex;
  position: relative;
  width: 40%;
  height: 80%;
  left: 48%;
  top: 10%;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: ${(props) => (props.placeholder = "15px")};
  position: absolute;
  padding: 0.75em;

  ${(props) =>
    props.id === "name" &&
    css`
      width: 96%;
      height: 5%;
      top: 16%;
      border: 1px solid #f1f1fa;
      border-radius: 1em;
    `}

  ${(props) =>
    props.id === "id" &&
    css`
      width: 96%;
      height: 5%;
      top: 30%;
      border: 1px solid #f1f1fa;
      border-radius: 1em;
    `}
  
  ${(props) =>
    props.id === "password" &&
    css`
      width: 96%;
      height: 5%;
      top: 43.5%;
      border: 1px solid #f1f1fa;
      border-radius: 1em;
    `}
  
    ${(props) =>
    props.id === "check" &&
    css`
      position: relative;
      top: -10px;
      width: 22px;
     
      
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
  display: flex;
  ${(props) =>
    props.id === "signin" &&
    css`
      position: relative;
      width: 100%;

      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1em;
      line-height: 1.5em;
    `}

  ${(props) =>
    props.id === "login" &&
    css`
      position: absolute;
      width: 100%;

      top: 95%;
      font-family: Inter, sans-serif;
      align-items: center;
      justify-content: center;
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
      position: absolute;
      width: 100%;
      top: 78%;
      font-family: "'Inter', sans-serif;";
      align-items: center;
      justify-content: center;
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
      position: absolute;
      width: 100%;

      top: 90%;
      font-family: Inter, sans-serif;
      align-items: center;
      justify-content: center;
      color: #91919f;
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
  width: 96%;
  position: absolute;
  display: flex;
  top: 55%;
`;

export const CustomAnchor = styled(Link)`
  position: relative;

  ${(props) =>
    props.id === "forgot" &&
    css`
      width: 100%;
      height: 28.08px;

      top: 73%;
      text-decoration: none;
      font-family: Inter, sans-serif;

      font-weight: 600;
      font-size: 1.1em;
      line-height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${(props) =>
    props.id === "terms" &&
    css`
      display: contents;
      text-decoration: none;
    `}

  


  color: #5352ed;
`;

export const ShowEye = styled(FaRegEye)`
  position: relative;
  color: #91919f;
  height: 4%;
  top: 46%;
  left: 90%;
  font-size: 1.3em;
  cursor: pointer;
`;

export const HideEye = styled(FaRegEyeSlash)`
  position: relative;
  color: #91919f;
  height: 4%;
  top: 46%;
  left: 90%;
  font-size: 1.3em;
  cursor: pointer;
`;
