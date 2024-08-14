import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function MainLayout() {
  const { theme, currentTheme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`min-h-screen ${theme[currentTheme].backgroundColor} ${theme[currentTheme].textColor}`}
      >
        <div className="p-4 md:px-12 md:py-7 md:mx-9">
          <Navbar />
          <div className="flex flex-col gap-y-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
