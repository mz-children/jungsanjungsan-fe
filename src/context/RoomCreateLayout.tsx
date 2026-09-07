import { Outlet } from "react-router";
import RoomHeader from "../components/ui/RoomHeader";
import { useEffect } from "react";
import useRoomCreateStore from "../store/roomCreateStore";

export default function RoomCreateLayout() {
  const { initState } = useRoomCreateStore();

  useEffect(() => {
    console.log("RoomCreate 마운트");

    return () => {
      console.log("RoomCreate 언마운트");
      alert("언마운트");
      initState();
    };
  }, []);

  return (
    <>
      <RoomHeader title="test" />
      <Outlet />
    </>
  );
}
