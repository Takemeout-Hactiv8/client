import { Avatar } from "@nextui-org/react";

export default function ChatSender() {
  return (
    <>
      <div className="flex items-start justify-end gap-2.5">
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-[#e5e5ff] rounded-s-xl rounded-se-xl dark:bg-blue-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              You
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:47
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            I hope so! We're working hard on making it happen.
          </p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
        <Avatar
          radius="md"
          size="lg"
          src="https://avatars.githubusercontent.com/u/30373425?v=4"
        />
      </div>
    </>
  );
}

export function ChatReceiver() {
  return (
    <>
      <div className="flex items-start gap-2.5">
        <Avatar
          radius="md"
          size="lg"
          src="https://avatars.githubusercontent.com/u/30373425?v=4"
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            That's awesome. I think our users will really appreciate the
            improvements.
          </p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
    </>
  );
}
