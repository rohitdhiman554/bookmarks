import styled, { css } from "styled-components";

export const MainDiv = styled.div``;

export const UsersDiv = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  justify-content: space-around;
`;

export const ContentDiv = styled.div`
  width: 28%;
  margin-top: 4%;

  padding: 2%;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    transform: scale(0.9);
  }
`;

export const AvatarDiv = styled.img`
  position: relative;
  width: 60%;
  left: 20%;
  top: -15%;
  z-index: 2;
  border-radius: 50%;
  border: 1.5px solid grey;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

export const HeadingDiv = styled.div`
  display: inline-block;
  overflow-wrap: break-word;
  ${(props) =>
    props.id === "name" &&
    css`
      font-size: 1.8em;
      padding: 2%;
      box-sizing: border-box;

      transition:.5s ease-in-out;
      text-shadow:0 0 0 transparent,0 0 0 transparent;
      color:rgba(0,0,0,.1);
      overflow:visible;
      &:hover {
        color:white;
         text-shadow:0 0 10px black,0 0 50px black;
      



    `}

  ${(props) =>
    props.id === "username" &&
    css`
      font-size: 1.3em;
      font-style: normal;
      font-weight: 300;
      color: #57606a;
      padding: 2%;
      margin-top: -3%;
      box-sizing: border-box;
    `}
`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -10%;
  height: 30%;
`;

export const UserDetail = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Info = styled.p`
  position: relative;
  top: 5%;
  left: -10%;
  font-size: 1.25em;
  font-style: Inter, sans-serif;
  cursor: pointer;
`;
