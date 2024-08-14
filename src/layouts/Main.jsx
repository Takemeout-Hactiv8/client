import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function MainLayout() {
  const { theme, currentTheme, changeTheme } = useContext(ThemeContext)

  return (
    <>
      <div className={`container-fluid ${theme[currentTheme].backgroundColor} ${theme[currentTheme].textColor}`} style={{ height: "200vh" }}>
        <div className="p-4 md:px-12 md:py-7 md:mx-9 h-screen">
          <Navbar />
          <div className="flex flex-col gap-y-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
