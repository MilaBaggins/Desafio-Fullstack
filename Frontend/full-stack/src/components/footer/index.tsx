import logoBranca from "../../images/logo-circle.png";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <img className="logoBranca" src={logoBranca} alt="logo branca" />
    </StyledFooter>
  );
};
