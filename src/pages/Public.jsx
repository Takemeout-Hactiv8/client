import { Button, Input } from "@nextui-org/react";
import UserList from "../components/UserList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import ChatSender, { ChatReceiver } from "../components/Chat";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import socket from "../socket";

export default function Public() {
  const { theme, currentTheme, changeTheme } = useContext(ThemeContext)

  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const [chatShow, setChatShow] = useState([]);
  const [user, setUser] = useState([]);

  const { roomName } = useParams();

  const sendChat = (event) => {
    event.preventDefault();

    socket.emit('sendChat', message, roomName);

    setMessage("");
  }

  const back = () => {
    socket.emit('global-room-out', roomName)
    navigate('/home')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    socket.emit('sendChat', message, roomName, localStorage.username);
    // console.log(message);
    setMessage("");
  };

  useEffect(() => {
    console.log(user, '====>user')
    // joinRoom();
    socket.emit('join-global', roomName, socket.id);

    socket.on('chat-update', (chat) => {
      // chatTemp.push(chat);
      setChatShow((lastValue) => {
        // console.log(chat)
        return lastValue.concat(chat)
      });
    })

    socket.on('room-user', (userOnline) => {
      setUser(userOnline.user);
    })

    return () => {
      socket.off('chat-update');
      socket.off('update-room');
      socket.off('join-room');
      socket.off('room-user');
    }
  }, []);
  return (
    <>
      <section>
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-col gap-3 col-span-1 max-h-screen overflow-y-auto">
            <Input
              type="text"
              placeholder="Search"
              classNames={{
                inputWrapper: ["bg-[#e5e5ff]"],
              }}
              startContent={
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              }
            />
            {user.map((e, i) => {
              return <UserList
                key={i}
                name={e.name}
              />
            })}
          </div>
          <div className="col-span-4 w-full">
            <div className="flex items-center justify-between bg-[#e5e5ff] p-5 rounded-xl">
              <div>
                <h1 className={`text-3xl ${theme[currentTheme].textColorChat}`}>{roomName}</h1>
                <span className={`text-sm ${theme[currentTheme].textColorChat}`}>{user.length} online</span>
              </div>
              <Button
                as={Link}
                to="/home"
                isIconOnly
                color="danger"
                variant="flat"
                onClick={back}
              >
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
              </Button>
            </div>
            <div className="flex flex-col gap-5 mb-5">
              <div className="w-full my-5 max-h-screen overflow-y-auto flex flex-col gap-5">
                {chatShow.map((e, i) => {
                  return e.sender === socket.id ?
                    <ChatSender key={i} message={e.chat} />
                    :
                    <ChatReceiver key={i} message={e.chat} name={e.name} />
                })}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Enter your message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit(e);
                    }
                  }}
                />
                <Button
                  onClick={(e) => handleSubmit(e)}
                  isIconOnly
                  className="bg-[#e5e5ff]"
                  variant="flat"
                >
                  <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
