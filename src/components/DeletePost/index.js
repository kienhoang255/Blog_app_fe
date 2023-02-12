import { DragHandleIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions";

export default function DeletePost({ post }) {
  const dispatch = useDispatch();

  const delPost = useCallback(() => {
    dispatch(deletePost.deletePostRequest(post));
    console.log(post);
  }, [dispatch, post]);
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton aria-label="Search database" icon={<DragHandleIcon />} />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Header</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button colorScheme="red" onClick={delPost}>
              Delete
            </Button>
          </PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
