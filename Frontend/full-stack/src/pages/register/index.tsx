/* import { Preface } from "../../components/Preface"; */
import { FormRegister } from "../../components/Form/FormRegister";
import { StyledRegister } from "./style";
import { AnimSlideLeft, AnimSlideRight } from "../../animation";
import { Header } from "../../components/Header";
import { Preface } from "../../components/Preface";

export const RegisterPage = () => {
  return (
    <StyledRegister>
      <Header />
      <Preface />
      <FormRegister />
    </StyledRegister>
  );
};
