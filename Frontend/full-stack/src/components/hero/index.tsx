import { Link } from "react-router-dom";
import imgHero from "../../images/ilustra.png";
import { StyledHero } from "./style";
import { StyledLink } from "../../styles/link";
import logo from "../../images/logo-circle.png";

export const Hero = () => {
  return (
    <StyledHero>
      <div className="heroCabecalho">
        <StyledLink to={"./login"} typetext="yes">
          Login
        </StyledLink>
        <StyledLink to={"./register"} typetext="button">
          Cadastre-se
        </StyledLink>
      </div>
      <div>
        <img className="logo" src={logo} alt="" />
        <div className="heroBanner">
          <div className="slogan-div">
            <div className="slogan">
              <h2 className="slogan-text">
                Simplifique seu
                <span className="slogan_color"> networking </span>
              </h2>
            </div>
            <div className="slogan2">
              <h2 className="slogan-text">
                <span className="slogan_color"> Conecte-se </span> de forma
                inteligente
              </h2>
            </div>
            <div className="buttons-slogan">
              <span className="description">
                Transforme seus contatos em oportunidades
              </span>
            </div>
          </div>

          <img className="imgHero" src={imgHero} alt="Imagem hero" />
        </div>
      </div>
    </StyledHero>
  );
};
