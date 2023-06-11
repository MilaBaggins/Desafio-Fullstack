import logo from "../../images/logo-circle.png";
import userImg from "../../images/perfil.png";
import { useContext } from "react";

import { StyledHeader } from "./style";
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

          <div>
            {userId && (
              <>
                <ModalOrders />
              </>
            )}

            <button onClick={() => logout()}>
              <TbLogout size={30} color={"var(--color-gray-100)"} />
            </button>
            {userId && (
              <button onClick={() => setShowProfileModal(true)}>
                <img
                  className="userImg"
                  /* src={user!.img ? user!.img : userImg} */
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
