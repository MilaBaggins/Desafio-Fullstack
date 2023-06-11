import { ToastContainer } from "react-toastify";

export const ToastConfig = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      draggable={false}
      theme="colored"
    />
  );
};
