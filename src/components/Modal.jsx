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

export default function AddModal({ onClose, isOpen, onOpenChange }) {
  const [roomName, setRoomName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomName) {
      toast.error("Please fill out all the fields");
    } else {
      console.log(roomName);
      onClose();
      toast.success(`Room ${roomName} Added`);
      setRoomName("");
    }
  };
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
