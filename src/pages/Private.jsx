import { Button, Input } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ChatSender, { ChatReceiver } from "../components/Chat";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Private() {
  const { theme, currentTheme, changeTheme } = useContext(ThemeContext)
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    console.log(message);
    setMessage("");
  };
  return (
    <>
      <section>
        <div className="col-span-4 w-full">
          <div className="flex items-center justify-between bg-[#e5e5ff] p-5 rounded-xl">
            <div>
              <h1 className={`text-3xl ${theme[currentTheme].textColorChat}`}>Design chat private</h1>
              <span className={`text-sm ${theme[currentTheme].textColorChat}`}>23 members, 10 online</span>
            </div>
            <Button
              as={Link}
              to="/home"
              isIconOnly
              color="danger"
              variant="flat"
            >
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            </Button>
          </div>
          <div className="flex flex-col gap-5 mb-5">
            <div className="w-full my-5 max-h-screen overflow-y-auto flex flex-col gap-5">
              <ChatSender />
              <ChatReceiver />
              <ChatSender />
              <ChatReceiver />
            </div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                  }
                }}
                placeholder="Enter your message"
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
      </section>
    </>
  );
}
