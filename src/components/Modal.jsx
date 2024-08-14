import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { toast } from "react-toastify";
import socket from "../socket";
import { useNavigate } from "react-router-dom";

export default function AddModal({ onClose, isOpen, onOpenChange }) {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomName) {
      toast.error("Please fill out all the fields");
    } else {
      console.log(roomName);

      socket.emit('add-room', roomName);

      navigate('/private/' + roomName);
      onClose();


      toast.success(`Room ${roomName} Added`);
      setRoomName("");
    }
  };

  const addRoom = (event) => {
    event.preventDefault();

    socket.emit('add-room', roomName);

    navigate('/room/' + roomName)
  }
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Room
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="Room Name"
                  name="roomName"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={(e) => handleSubmit(e)}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
