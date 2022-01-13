import { ButtonStyled } from "./Button.styles";

function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
export default Button;
