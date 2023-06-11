import { Link } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledFormLogin } from "./style";
import { loginSchema } from "./loginSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import * as i from "../../../interfaces/UserInterfaces";

export const FormLogin = () => {
  const { loginSubmit, showPass, setShowPass } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<i.DataLogin>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledFormLogin onSubmit={handleSubmit(loginSubmit)} noValidate>
      <h3 className="font-heading-3">Login</h3>
      <Input
        type="text"
        name="Username"
        register={register("username")}
        error={errors.username?.message}
      />

      <Input
        type={showPass ? "text" : "password"}
        name="Senha"
        register={register("password")}
        error={errors.password?.message}
        children={
          showPass ? (
            <BsEyeSlash size={20} onClick={() => setShowPass(!showPass)} />
          ) : (
            <BsFillEyeFill size={20} onClick={() => setShowPass(!showPass)} />
          )
        }
      />
      <Button content="Logar" size="default" color="primary" />

      <p className="font-body">Se não possui uma conta, cadastre-se aqui!</p>
      <Link to={"/register"}>
        <Button content="Cadastrar" size="default" color="gray" />
      </Link>
    </StyledFormLogin>
  );
};

//-------------------------------------------------------------------------------
