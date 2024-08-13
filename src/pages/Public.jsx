import { Button, Input } from "@nextui-org/react";
import UserList from "../components/UserList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ChatSender, { ChatReceiver } from "../components/Chat";

export default function Public() {
  return (
    <>
      <section>
        <div className="grid grid-cols-5 my-3 gap-5">
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
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
          </div>
          <div className="col-span-4 w-full">
            <div className="flex items-center justify-between bg-[#e5e5ff] p-5 rounded-xl">
              <div>
                <h1 className="text-3xl">Design chat</h1>
                <span className="text-sm">23 members, 10 online</span>
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
                <Input type="text" placeholder="Enter your message"/>
                <Button
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
