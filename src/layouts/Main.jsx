import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="h-screen flex flex-row items-center justify-center gap-12">
        <Outlet />
      </div>
    </>
  );
}
