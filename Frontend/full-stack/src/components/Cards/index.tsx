import { StyledCard } from "./style";
import imagem from "../../images/perfil.png";

export const Card = () => {
  return (
    <StyledCard>
      <div className="card">
        <div className="imgProfile">
          <img src={imagem} alt="" />
        </div>
        <div className="infos">
          <div>
            <div className="closeButton">
              <h3 className="font-heading-3">Fulano</h3>
              <button>x</button>
            </div>

            <span className="caption">Empresa</span>
            <p>Descrição</p>
          </div>
          <div>
            <div>
              <h4 className="font-body-600">Telefone</h4>
              <span>Redes Sociais</span>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};
