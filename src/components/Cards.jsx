import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
export const RoomCard = ({ onPress, user, name, data }) => {
  const nav = useNavigate();
  const genderCurrentUserLogin = localStorage.getItem("gender")

  return (
    <>
      <Card
        shadow="sm"
        isPressable={user <= 2 && data.user[0].gender != genderCurrentUserLogin}
        onPress={onPress}
        className={user >= 2 ? "bg-slate-200" : ""}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            isZoomed
            shadow="sm"
            width="100%"
            alt="apa aja"
            className="w-full object-cover h-[150px]"
            src="https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="text-small flex flex-col gap-4 items-start">
          <div className="flex flex-col items-start gap-3">
            <span className="text-lg">{name}</span>
            {user >= 2 && <span className="text-lg text-red-500">Full</span>}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs">{user} Online</span>
              </div>
            </div>
          </div>
          <p className="text-start text-default-500">
            The friendlist community on Discord 🧡 Join now to meet amazing
            people from all around the world 🌍
          </p>
        </CardFooter>
      </Card>
    </>
  );
};
