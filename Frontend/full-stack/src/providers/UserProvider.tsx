import { UserProvider } from "./UserContext";

interface iProviders {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return <UserProvider>{children}</UserProvider>;
};
