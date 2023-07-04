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
              <p className="font-heading-3">Fulano</p>
              <button>x</button>
            </div>

            <h4 className="caption">Empresa</h4>
            <h3>Descrição</h3>
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
