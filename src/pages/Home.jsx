import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { RoomCard } from "../components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddModal from "../components/Modal";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useEffect, useState, useContext } from "react";
import socket from "../socket";
import { RoomContext } from "../contexts/RoomContext";
import { toast } from "react-toastify";

export default function Home() {
  const [genderCurrentUserLogin, setGenderCurrentUserLogin] = useState(null);
  useEffect(() => {
    const gender = localStorage.getItem("gender");
    setGenderCurrentUserLogin(gender);
  }, []);

  const { rooms, globalRooms } = useContext(RoomContext);
  const { theme, currentTheme } = useContext(ThemeContext);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const nav = useNavigate();

  const navigate = useNavigate();

  useEffect(() => {
    socket.disconnect();
    socket.connect();
  }, []);

  return (
    <>
      <section>
        <div className="flex flex-col gap-12">
          {globalRooms.map((e, i) => {
            return (
              <Card
                key={i}
                shadow="sm"
                isPressable
                onPress={() => {
                  nav("/public/" + e.name);
                }}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    isZoomed
                    shadow="sm"
                    width="100%"
                    alt="apa aja"
                    className="w-full object-cover h-[350px]"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                  />
                </CardBody>
                <CardFooter className="text-small flex flex-col gap-3 items-start">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xl">{e.name}</span>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <span>{e.user.length} Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-default-500">
                      The friendlist community on Discord 🧡 Join now to meet
                      amazing people from all around the world 🌍
                    </p>
                    <Button
                      as={Link}
                      to="/public"
                      onPress={() => {
                        nav("/public/" + e.name);
                      }}
                      className={`bg-${theme[currentTheme].buttonColor} ${theme[currentTheme].buttonTextColor}`}
                    >
                      Join
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
          <div className="flex flex-col gap-12 pt-10 border-t">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl">Rooms</h1>
              <Button
                onPress={onOpen}
                className={`bg-${theme[currentTheme].buttonColor} ${theme[currentTheme].buttonTextColor}`}
              >
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                Add Room
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-7">
              {rooms.map((e, i) => {
                return (
                  <RoomCard
                    key={i}
                    name={e.name}
                    user={e.user.length}
                    onPress={() => {
                      if (
                        e.user.length < 2 &&
                        e.user[0]?.gender === genderCurrentUserLogin
                      ) {
                        // Jika gender sama, tampilkan toast error
                        toast.error(
                          `Room is only for ${
                            genderCurrentUserLogin === "male"
                              ? "female"
                              : "male"
                          }`
                        );
                        console.log(e.user[0]?.gender, "dari server");
                        console.log(
                          genderCurrentUserLogin,
                          "dari localstorage"
                        );
                      } else {
                        // Jika gender berbeda, arahkan ke halaman lain
                        navigate("/private/" + e.name);
                        console.log(e.user[0]?.gender, "dari server");
                        console.log(
                          genderCurrentUserLogin,
                          "dari localstorage"
                        );
                      }
                    }}
                    data={e}
                  />
                );
              })}
            </div>
            {/* kalo belom ada room */}
            {rooms.length < 1 && (
              <div className="flex items-center justify-center">
                <h1> you dont have any rooms</h1>
              </div>
            )}
          </div>
        </div>
        <AddModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onOpenChange}
        />
      </section>
    </>
  );
}
