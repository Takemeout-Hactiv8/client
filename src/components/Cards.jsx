import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
export const RoomCard = () => {
  return (
    <>
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
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
            <span className="text-lg">Lofi girl</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs">500.000 Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-xs">940.000 Members</span>
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
