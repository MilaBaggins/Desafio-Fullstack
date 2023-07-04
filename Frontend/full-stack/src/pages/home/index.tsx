import { useContext, useState } from "react";
import { AnimSlideDown } from "../../animation";
import { HeaderLogado } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../providers/UserContext";
import { StyledHome } from "./style";
import addImg from "../../images/profiles.jpg";
import { Card } from "../../components/Cards";

export const HomePage = () => {
  const [loadUser, setLoadUser] = useState(false);

  return !loadUser ? (
    <>
      <HeaderLogado />
      <AnimSlideDown>
        <StyledHome>
          <div className="content">
            <div className="cards">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="addContac">
              <button
                className="registerContatc" /* onClick={() => logout()} */
              >
                Cadastrar Contato
              </button>
              <div className="img">
                <img src={addImg} alt="" />
              </div>
            </div>
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
