import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Navbar = (props) => {
  const isLogin = localStorage.getItem("username");
  const { theme, currentTheme, changeTheme } = useContext(ThemeContext)
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    toast.success("See you!!");
    nav("/");
  };

  return (
    <>
      <div className="flex flex-col">
        <nav className="flex justify-between items-center mb-10 py-4 border-b-2 border-slate-200">
          <div className="flex-grow">
            <div className="flex items-center justify-between" >
              <h1 className="text-3xl text-center">
                <Link to="/home">
                  Take Me<span className="font-bold text-red-500"> Out</span>
                </Link>
              </h1>
              <div className="flex items-center justify-between">
                <Button style={{ height: "40px", marginRight: "10px" }}
                  onClick={changeTheme}
                  className={`bg-${theme[currentTheme].buttonColor} ${theme[currentTheme].buttonTextColor}`}
                >
                  Change Theme
                </Button>
                {isLogin && (
                  <Button
                    onPress={() => handleLogout()}
                    variant="flat"
                    color="danger"
                    isIconOnly
                  >
                    <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
