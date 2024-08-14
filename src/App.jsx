import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ToastContainer
          autoClose={1000}
          theme="light"
          transition={Slide}
          pauseOnHover={false}
          hideProgressBar
        />
      </ThemeProvider>
    </>
  );
}

export default App;
