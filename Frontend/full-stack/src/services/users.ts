import { AxiosError } from "axios";
import { toast } from "react-toastify";
import * as i from "../interfaces/UserInterfaces";
import { api } from "./api";

export const createUser = async (body: i.DataRegister) => {
  try {
    const { data, status } = await api.post("register/", body);

    status === 201 && toast.success("Usuário cadastrado com Sucesso!");

    return data;
  } catch (error) {
    const message = error as AxiosError<any>;
    console.log(message);
    if (message.response?.data.username[0]) {
      message.response?.data.username[0] ===
        "user with this username already exists." &&
        toast.error("Username já cadastrado!");
    }
    if (message.response?.data.email[0]) {
      message.response?.data.email[0] === "This field must be unique." &&
        toast.error("Email já cadastrado!");
    }
    return false;
  }
};

export const loginUser = async (body: i.DataLogin) => {
  try {
    const { status, data } = await api.post("login/", body);

    status === 200 &&
      ((api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`),
      toast.success("Usuário logado com Sucesso!"));

    return data;
  } catch (error) {
    const message = error as AxiosError<any>;
    message.response?.data.detail ===
      "No active account found with the given credentials" &&
      toast.error("Usuário / Senha inválidos!");
    return false;
  }
};

/* export const getUserById = async (user_id: number) => {
  try {
    const { data, status } = await api.get(`users/${user_id}/`);

    status === 200 && toast.success("Verificando dados usuário!");

    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
}; */

export const updateDataUser = async (
  userData: i.UpdateDataUser,
  user_id: number
) => {
  try {
    console.log(userData);
    console.log(user_id);
    const { data, status } = await api.patch(`users/${user_id}/`, userData);
    status === 200 && toast.success("Usuário atualizado com sucesso!");
    return data;
  } catch (error) {
    const message = error as AxiosError<string>;
    console.log(message);
    return false;
  }
};
