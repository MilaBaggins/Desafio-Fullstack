import logo from "../../images/logo-circle.png";
import userImg from "../../images/leia.jpeg";
import { useContext } from "react";

import { StyledHeader, StyledHeaderLogado } from "./style";
import { TbLogout } from "react-icons/tb";
import { UserContext } from "../../providers/UserContext";
import { Button } from "../Button";
import { ModalOrders } from "../modalChakra";

export const Header = () => {
  const { logout } = useContext(UserContext);

  const { user, setShowProfileModal } = useContext(UserContext);
  const userId = localStorage.getItem("@USER_ID");

  return (
    <StyledHeader>
      <div className="container">
        <img className="newLogo" src={logo} alt="logomarca Kenzie Shoes" />
        <div>
          {userId && (
            <Button
              /*  onClick={() => userSell()} */
              size="medium"
              color="gray"
              content={"Cadastrar"}
            />
          )}

          {userId && (
            <button onClick={() => setShowProfileModal(true)}></button>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export const HeaderLogado = () => {
  const { logout } = useContext(UserContext);

  const { user, setShowProfileModal } = useContext(UserContext);
  const userId = localStorage.getItem("@USER_ID");

  return (
    <StyledHeaderLogado>
      <div className="container">
        <img className="newLogo" src={logo} alt="logomarca Kenzie Shoes" />
        <div>
          <div>
            {userId && (
              <button onClick={() => setShowProfileModal(true)}></button>
            )}
            <div className="profile">
              <div className="userImg">
                <img src={userImg} alt="" />{" "}
              </div>
              <p>Leia Organa</p>
            </div>
            <button className="logout" onClick={() => logout()}>
              <TbLogout size={30} color={"var(--color-gray-100)"} />
            </button>
          </div>
        </div>
      </div>
    </StyledHeaderLogado>
  );
};
