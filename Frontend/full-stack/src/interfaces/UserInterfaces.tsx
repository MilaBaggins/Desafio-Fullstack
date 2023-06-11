export interface UserProvider {
  children: React.ReactNode;
}

/* interface User {
    id: string;
    name: string;
    email: string;
  } */

export interface UserContext {
  user: userResponse | null;
  setUser: React.Dispatch<React.SetStateAction<userResponse | null>>;
  userId: number | null;
  reloadRender: boolean;
  setReloadRender: React.Dispatch<React.SetStateAction<boolean>>;
  loadUser: boolean;
  setLoadUser: React.Dispatch<React.SetStateAction<boolean>>;
  loginSubmit: (data: DataLogin) => void;
  registerSubmit: (data: DataRegister) => void;
  teste: () => void;
  UserUpdateSubmit: (data: UpdateDataUser) => void;
  logout: () => void;
  showPass: boolean;
  setShowPass: React.Dispatch<React.SetStateAction<boolean>>;
  showProfileModal: boolean;
  setShowProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DataLogin {
  username: string;
  password: string;
}

export interface DataRegister {
  username: string;
  email: string;
  password: string;
  rePassword?: string;
  img: string;
  phone: string;
}

export interface userResponse {
  id: number;
  username: string;
  email: string;
  password: string;
  rePassword?: string;
  img: string;
  phone: string;
}

export interface UpdateDataUser {
  password: string;
  rePassword?: string;
  img: string;
}
