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
  @media (max-width: 900px) {
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
`;

export const HeadingDiv = styled.div`
  position: relative;
  top: 10%;
  left: 15%;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 42.1818px;
  line-height: 51px;
  letter-spacing: 0.03em;
  color: #ffffff;
`;
