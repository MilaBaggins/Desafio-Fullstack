import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegister } from "./style";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import * as i from "../../../interfaces/UserInterfaces";
import { AnimSlideLeft, AnimSlideRight } from "../../../animation";
import { StyledButton } from "../../Button/style";

export const FormRegister = () => {
  const { registerSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<i.DataRegister>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledFormRegister onSubmit={handleSubmit(registerSubmit)} noValidate>
      <AnimSlideLeft>
        <div>
          <div>
            <h3 className="font-heading-3">Dados pessoais</h3>
            {/*  <Link to={"/"}>
          <span className="font-body">Retornar para o login</span>
        </Link> */}
          </div>
          <Input
            type="text"
            placeholder="Seu nome"
            register={register("username")}
            error={errors.username?.message}
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
            register={register("email")}
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="Crie uma senha"
            register={register("password")}
            error={errors.password?.message}
          />
          <Input
            type="password"
            placeholder="Confirme sua senha"
            register={register("rePassword")}
            error={errors.rePassword?.message}
          />
        </div>
      </AnimSlideLeft>
      <AnimSlideRight>
        <div>
          <div>
            <h3 className="font-heading-3">Endereço</h3>
            <Link to={"/login"}>
              <span className="font-body">Retornar para o login</span>
            </Link>
          </div>
          <Input
            type="text"
            placeholder="Sua imagem de perfil"
            register={register("img")}
            error={errors.img?.message}
          />
          <Input
            type="text"
            placeholder="Seu telefone"
            register={register("phone")}
            error={errors.phone?.message}
          />
          <StyledButton
            content="Cadastrar"
            size="default"
            color="gray"
          ></StyledButton>
        </div>
      </AnimSlideRight>
    </StyledFormRegister>
  );
};

export default FormRegister;
