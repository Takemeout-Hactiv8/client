import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Welcome() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    gender: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.gender) {
      toast.error("Please fill out all the fields");
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      nav("/home");
    }
  };
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-3xl">Welcome</h1>
            <h1 className="text-2xl">to Take me out Hactiv8</h1>
          </div>
          <div className="w-[500px]">
            <Card>
              <CardBody>
                <div className="flex flex-col items-center justify-center gap-5 p-5">
                  <p className="text-slate-400">Please fill out this form</p>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    label="Email"
                    className="w-full"
                  />
                  <Select
                    name="gender"
                    selectedKeys={[formData.gender]}
                    onChange={handleChange}
                    label="Select an animal"
                    className="w-full"
                  >
                    <SelectItem key="male">Male</SelectItem>
                    <SelectItem key="female">Female</SelectItem>
                  </Select>
                  <Button
                    onClick={(e) => handleSubmit(e)}
                    className="w-full"
                    color="primary"
                  >
                    Let's find your partner
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
