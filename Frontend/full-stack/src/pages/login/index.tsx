import { FormLogin } from "../../components/Form/FormLogin";
import { StyledLogin } from "./style"; /* 
import { Preface } from "../../components/Preface"; */
import { useState } from "react";
import { Loader } from "../../components/Loader";
import { AnimSlideLeft, AnimSlideRight } from "../../animation";
import { Header } from "../../components/Header";

export const LoginPage = () => {
  const [loadUser, setLoadUser] = useState(true);

  return loadUser ? (
    <StyledLogin>
      <div className="login">
        <Header />
        <AnimSlideRight>
          <FormLogin />
        </AnimSlideRight>
        <AnimSlideLeft>{/* <Preface /> */}</AnimSlideLeft>
      </div>
    </StyledLogin>
  ) : (
    <>
      <Loader />
    </>
  );
};
