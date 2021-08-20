import React from "react";
import styled from "styled-components";

interface Props {
  message: string;
}

const AlertMessage: React.FC<Props> = ({ message }) => {
  return (
    <Alert>
      <p>{message}</p>
    </Alert>
  );
};

export default AlertMessage;

const Alert = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  padding: 20px;
  border-radius: 5px;
`;
