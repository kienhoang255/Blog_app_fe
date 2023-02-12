import React, { useCallback } from "react";
import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../redux/actions";
import DeletePost from "../../DeletePost";

export default function Post({ post }) {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);

  return (
    <GridItem w="100%" h="100%">
      <Box bg="white" p="5" borderRadius="10">
        {/* Header post */}
        <Box display="flex" p="10px 0">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box display="flex" flexDirection="column" p="0 20px">
            <Text as="b">{post.author}</Text>
            <Text as="i">
              {moment(post.createdAt).format(`HH:MM MMM DD,YYYY`)}
            </Text>
          </Box>
          <DeletePost post={post} />
        </Box>
        {/* Content post  */}
        <Box p="10px 0">
          <Text as="b">{post.title}</Text>
          <br />
          <Center>
            <Image src={post.attachment} boxSize={"100%"} alt="Dan Abramov" />
          </Center>
          <Text as="i">{post.content}</Text>
        </Box>
        {/* Footer post */}
        <Box p="10px 0" display={"flex"} alignItems="center">
          <Button
            leftIcon={<StarIcon />}
            colorScheme="blue"
            variant="outline"
            onClick={onClick}
          >
            {post.likeCount} like
          </Button>
        </Box>
      </Box>
    </GridItem>
  );
}
