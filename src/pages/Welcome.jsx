import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Welcome() {
  const { theme, currentTheme, changeTheme } = useContext(ThemeContext)

  const nav = useNavigate();
  const [formData, setFormData] = useState({
    gender: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.gender) {
      toast.error("Please fill out all the fields");
    } else {
      localStorage.setItem("username", formData.username);
      localStorage.setItem("gender", formData.gender);
      toast.success("Welcome " + formData.username);
      nav("/home");
    }
  };
  return (
    <>
      <div className={`container-fluid ${theme[currentTheme].backgroundColor} ${theme[currentTheme].textColor}`}>
        <div className="p-4 flex flex-col items-center justify-center ">
          <Button style={{ height: "40px" }}
            onClick={changeTheme}
            className={`bg-${theme[currentTheme].buttonColor} ${theme[currentTheme].buttonTextColor}`}
          >
            Change Theme
          </Button>
        </div>
        <section className="p-4 h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-3xl">Welcome</h1>
              <h1 className="text-2xl">Take Me<span className="font-bold text-red-500"> Out</span></h1>
            </div>
            <div className="w-[500px]">
              <Card>
                <CardBody>
                  <div className="flex flex-col items-center justify-center gap-5 p-5">
                    <p className="text-slate-400">Please fill out this form</p>
                    <Input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      type="text"
                      label="User name"
                      className="w-full"
                    />
                    <Select
                      name="gender"
                      selectedKeys={[formData.gender]}
                      onChange={handleChange}
                      label="Select your gender"
                      className="w-full"
                    >
                      <SelectItem key="male">Male</SelectItem>
                      <SelectItem key="female">Female</SelectItem>
                    </Select>
                    <Button
                      onClick={(e) => handleSubmit(e)}
                      className={`w-full bg-${theme[currentTheme].buttonColor} ${theme[currentTheme].buttonTextColor}`}
                    >
                      Let's find your partner
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
