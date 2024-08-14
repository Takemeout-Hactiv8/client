import { Avatar, AvatarGroup, AvatarIcon, Badge } from "@nextui-org/react";
export default function UserList({ name }) {
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
            <p className="text-xs overflow-hidden whitespace-nowrap text-ellipsis w-[170px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro dicta tenetur quia. Obcaecati ipsam maiores harum, atque id a fugiat sequi omnis provident rerum, eveniet, fugit quod commodi itaque? Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
