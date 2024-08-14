import { Avatar, AvatarGroup, AvatarIcon, Badge } from "@nextui-org/react";
export default function UserList({ name, gender }) {
  return (
    <>
      <aside>
        <div className="flex items-center gap-3 mt-3">
          <Badge content="" color="success" shape="circle" placement="bottom-right">
            <Avatar
              radius="md"
              size="lg"
              src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
            />
          </Badge>
          <div className="flex flex-col w-[300px]">
            <span>{name}</span>
            <p className="text-xs overflow-hidden whitespace-nowrap text-ellipsis w-[170px]">{gender}</p>
          </div>
        </div>
      </aside>
    </>
  );
}
