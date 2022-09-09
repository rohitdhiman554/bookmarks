import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const InputItems = styled.div`
  display: flex;
  position: absolute;
  width: 400px;
  height: 600px;
  left: 500px;
  top: 100px;
  @media (max-width: 900px) {
    flex-direction: column;
    position: absolute;
    left: 0;
  }
`;

export const CustomInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px 5px;
  font-size: ${(props) => (props.placeholder = "15px")};
  position: absolute;
  padding: 10px;

  ${(props) =>
    props.id === "name" &&
    css`
      width: 100%;
      height: 35px;
      left: 0px;
      top: 100px;
      border: 1px solid #f1f1fa;
      border-radius: 16px;
    `}

  ${(props) =>
    props.id === "id" &&
    css`
      width: 100%;
      height: 35px;
      left: 0;
      top: 180px;
      border: 1px solid #f1f1fa;
      border-radius: 16px;
    `}
  
  ${(props) =>
    props.id === "password" &&
    css`
      width: 100%;
      height: 35px;
      left: 0px;
      top: 260px;
      border: 1px solid #f1f1fa;
      border-radius: 16px;
    `}
  
    ${(props) =>
    props.id === "check" &&
    css`
      height: 20px;
      width: 20px;
      outline: none;

      &:focus {
        outline: 2px solid #5352ed;
      }

      &:hover {
        outline: 2px solid #5352ed;
        outline-style: auto;
      }

      &:checked {
        outline: #5352ed;
        outline-style: auto;
      }
    `}
    


  -ms-input-placeholder {
    color: black;
  }
`;

export const Text = styled.text`
  position: absolute;
  display: flex;
  ${(props) =>
    props.id === "signin" &&
    css`
      width: 90%;
      left: 30px;

      flex-direction: column;

      font-family: Inter, sans-serif;
    `}

  ${(props) =>
    props.id === "login" &&
    css`
      width: 100%;
      height: 30px;
      top: 545px;
      font-family: "'Inter', sans-serif;";
      align-items: center;
      justify-content: center;

      color: #000000;
    `}

    ${(props) =>
    props.id === "orwith" &&
    css`
      width: 100%;
      height: 30px;

      top: 450px;
      font-family: "'Inter', sans-serif;";
      align-items: center;
      justify-content: center;
      color: #91919f;
    `}

    
    ${(props) =>
    props.id === "noAcc" &&
    css`
      width: 100%;
      height: 30px;

      top: 508px;
      font-family: Inter, sans-serif;
      align-items: center;
      justify-content: center;
      color: #91919f;
    `}

  font-style: normal;
  font-weight: 300;
  font-size: 17px;
`;

export const CheckBoxDiv = styled.div`
  width: 100%;
  position: absolute;
  display: flex;

  top: 330px;
  height: 60px;
  left: 10px;
`;

export const CustomAnchor = styled(Link)`
  position: relative;

  ${(props) =>
    props.id === "forgot" &&
    css`
      width: 100%;
      height: 28.08px;
      top: 465px;
      text-decoration: none;
      font-family: Inter, sans-serif;

      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${(props) =>
    props.id === "terms" &&
    css`
      display: contents;
      color: red;
      height: 28px;

      text-decoration: none;
    `}

  
 

  color: #5352ed;
`;

export const ShowEye = styled(FaRegEye)`
  position: absolute;
  color: #91919f;
  height: 25px;

  top: 275px;
  left: 375px;
  font-size: 20px;
  cursor: pointer;
`;

export const HideEye = styled(FaRegEyeSlash)`
  position: absolute;
  color: #91919f;
  height: 25px;

  top: 275px;
  left: 375px;
  font-size: 20px;
  cursor: pointer;
`;
