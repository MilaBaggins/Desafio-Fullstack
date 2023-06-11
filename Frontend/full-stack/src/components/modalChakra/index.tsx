import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { theme } from "./style";

import { Button as btn, IconButton } from "@chakra-ui/react";
import { MdSell } from "react-icons/md";

export const ModalOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        size={"md"}
        aria-label="minhas ordens"
        onClick={onOpen}
        icon={<MdSell />}
      />
      <Modal isOpen={isOpen} onClose={onClose} variant={"no-border"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Minhas ordens de Compra</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>90821 - maria@hotmail.com - 2 un. - Tênis Nike</p>
            <p>90824 - joão2@hotmail.com - 1 un. - Tênis Puma</p>
            <p>90826 - josé4@hotmail.com - 1 un. - Tênis Adidas</p>
          </ModalBody>
          <ModalFooter>
            <Button bg="#00a999" color={"white"} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
