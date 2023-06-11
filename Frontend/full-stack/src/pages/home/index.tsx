import { useContext, useState } from "react";
import { AnimSlideDown } from "../../animation";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../providers/UserContext";
import { StyledHome } from "./style";
import imagem from "../../images/black.jpeg";
import { Card } from "../../components/Cards";

export const HomePage = () => {
  const [loadUser, setLoadUser] = useState(false);

  return !loadUser ? (
    <>
      <Header />
      <AnimSlideDown>
        <StyledHome>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </StyledHome>
      </AnimSlideDown>
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};
