import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent bg="pGray.800">
        <ModalBody>
          <Image
            src={imgUrl}
            // TODO: add styles
          />
        </ModalBody>

        <ModalFooter justifyContent="flex-start" h="8" px="2.5">
          <Link
            href={imgUrl}
            color="pGray.50"
            fontSize="sm"
            fontWeight="normal"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
