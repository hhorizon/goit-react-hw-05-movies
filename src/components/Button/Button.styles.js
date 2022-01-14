import styled from "styled-components";

const ButtonStyled = styled.button`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
  background-color: #78a5a373;
  text-decoration: none;
  cursor: default;

  &:hover,
  &:focus {
    background-color: #78a5a3;
  }
`;
export { ButtonStyled };
