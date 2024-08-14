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

export default function Home() {
  const { theme, currentTheme, changeTheme } = useContext(ThemeContext)

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const nav = useNavigate();

  const navigate = useNavigate()
  // const [message, setMessage] = useState("");
  // const [chatShow, setChatShow] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [room, setRoom] = useState([]);

  const addRoom = (event) => {
    event.preventDefault();

    socket.emit('add-room', roomName);

    navigate('/room/'+roomName)
  }

  const joinRoom = (room) => {
    // socket.emit('join-room', room)
    navigate('/room/'+room)
  }
  
  useEffect(() => {
    socket.disconnect()
    socket.connect()

    socket.on('newCome', (room) => {
      console.log(room)
      setRoom(room)
    });

    socket.on('update-room', (room) => {
      setRoom(room)
    })

    return () => {
      socket.off('newCome');
      socket.off('chat-update');
      socket.off('update-room');
    }
  }, [])
  return (
    <>
      <section>
        <div className="flex flex-col gap-12">
          <Card
            shadow="sm"
            isPressable
            onPress={() => {
              nav("/public");
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
                <span className="text-xl">Lofi girl</span>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>500.000 Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <span>940.000 Members</span>
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
                  className={`bg-${theme[currentTheme].buttonColor} ${theme[currentTheme].buttonTextColor}`}
                >
                  Join
                </Button>
              </div>
            </CardFooter>
          </Card>
          <div className="flex flex-col gap-12 pt-10 border-t">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl">Rooms</h1>
              <Button onPress={onOpen} className={`bg-${theme[currentTheme].buttonColor} ${theme[currentTheme].buttonTextColor}`}>
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                Add Room
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-7">
              {room.map((e, i) => {
                return <RoomCard 
                  key={i} 
                  name={e.name}
                  user={e.user.length}
                  onPress={() => navigate('/private/' + e.name)}
                />
              })}
              
            </div>
            {/* kalo belom ada room */}
            {/* <div className="flex items-center justify-center">
              <h1> you dont have any rooms</h1>
            </div> */}
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
