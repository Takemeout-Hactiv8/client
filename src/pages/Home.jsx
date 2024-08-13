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
export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const nav = useNavigate();
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
                  className="bg-primary text-white"
                >
                  Join
                </Button>
              </div>
            </CardFooter>
          </Card>
          <div className="flex flex-col gap-12 pt-10 border-t">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl">Rooms</h1>
              <Button onPress={onOpen} className="bg-primary text-white">
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                Add Room
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-7">
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
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
