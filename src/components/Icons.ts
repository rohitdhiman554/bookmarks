import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

export const GitLogo = styled(FaGithub)`
  width: 3%;
  height: 3%;
  margin-left: 2%;
  background: transparent;
`;

export const UserIcon = styled(FaUsers)`
  position: relative;
  top: 5%;
  left: -6%;
  width: 27%;
  height: 27%;
`;

export const Spinner = styled(FaSpinner)`
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
