import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { RoomProvider } from "./contexts/RoomContext";
// import { ChatProvider } from "./contexts/ChatContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <RoomProvider>
          {/* <ChatProvider> */}
          <RouterProvider router={router} />
          <ToastContainer
            autoClose={1000}
            theme="light"
            transition={Slide}
            pauseOnHover={false}
            hideProgressBar
          />
          {/* </ChatProvider> */}
        </RoomProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
