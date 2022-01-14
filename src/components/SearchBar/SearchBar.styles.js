import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  padding: 25px;

  border-bottom: 1px solid #78a5a3;
`;

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  padding-left: 35px;
  height: 30px;
  width: 300px;
  color: rgba(255, 255, 255, 0.8);
  background-color: #888d98;
  border: 2px solid #78a5a3;
  border-radius: 5px;
`;

const Button = styled.button`
  position: absolute;
  top: 3px;
  left: 3px;
  height: 28px;
  width: 28px;
  padding: 0;
  color: rgba(255, 255, 255, 0.8);
  background-color: #888d98;
  border: none;
  cursor: pointer;

  & > svg {
    height: 20px;
    width: 20px;
  }
`;

export { Form, Label, Input, Button };
