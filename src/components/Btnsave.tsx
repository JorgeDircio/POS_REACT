import styled from "styled-components";

import { BtnSaveProps, Icon } from "../";

const Container = styled.button<{ $bgcolor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  gap: 10px;
  background-color: initial;
  z-index: 2;
  .btn {
    background: ${({ theme, $bgcolor }) => $bgcolor || theme.$bgcolor};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;
    a {
      text-decoration: none;
      color: #000;
    }
    cursor: pointer;
    &:hover {
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }
    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
  }
`;

export const BtnSave = ({ onClick, title, bgcolor, icon, url }: BtnSaveProps) => {
  return (
    <Container type="submit" $bgcolor={bgcolor}>
      <Icon>{icon}</Icon>
      <span className="btn" onClick={onClick}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </span>
    </Container>
  );
}
