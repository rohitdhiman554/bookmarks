import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30%;
  height: 100vh;

  background: #5352ed;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const RightDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 30%;
  width: 70%;
  height: 100vh;
  background: #5352ed;
  z-index: -1;
  background: #ffffff;

  @media (max-width: 700px) {
    position: absolute;
    left: 0px;
    width: 100%;
  }
`;

export const HeadingDiv = styled.div`
  position: relative;
  top: 10%;
  left: 15%;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  line-height: 1.5em;
  letter-spacing: 0.03em;
  color: #ffffff;
`;

export const Header = styled.div`
  text-align: center;
  font-family: Inter, sans-serif;
  padding: 10px;

  font-size: 25px;
  @media (width>700px) {
    display: none;
  }
`;
