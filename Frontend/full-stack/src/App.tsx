import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { RoutesMain } from "./routes/RoutesMain";
import { ToastConfig } from "./components/ToastConfig";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/modalChakra/style";
import { Providers } from "./providers/UserProvider";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ToastConfig />
        <Providers>
          <RoutesMain />
        </Providers>
      </ChakraProvider>
    </BrowserRouter>
  );
};
