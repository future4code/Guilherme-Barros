import styled from "styled-components";

export const RequirementsButton = styled.button`
  position: fixed;
  left: 16px;
  bottom: 16px;
`;

export const RequirementsOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const RequirementsContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  padding: 16px;
  border-radius: 4px;
`;
