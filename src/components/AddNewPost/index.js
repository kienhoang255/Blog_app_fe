import React, { useCallback, useState } from "react";
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
  IconButton,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";

export default function AddNewPost() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    content: "",
    attachment: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnClick = () => {
    onClose();
  };

  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    onClose();
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [data, dispatch, onClose]);

  return (
    <>
      <IconButton
        aria-label="Search database"
        textAlign={"center"}
        icon={<AddIcon />}
        onClick={onOpen}
        position={"fixed"}
        bottom={5}
        right={5}
        colorScheme="blue"
        borderRadius={"50%"}
        size="lg"
      />

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={2}>
            <Input
              value={data.title}
              placeholder="Title"
              size="md"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <Textarea
              value={data.content}
              placeholder="Content"
              m={"12px 0"}
              onChange={(e) => setData({ ...data, content: e.target.value })}
            />
            <FileBase64
              accept="image/*"
              multiple={false}
              type="file"
              value={data.attachment}
              onDone={({ base64 }) => {
                setData({ ...data, attachment: base64 });
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleOnClick}>
              Close
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onSubmit}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
