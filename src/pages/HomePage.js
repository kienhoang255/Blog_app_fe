import { Box } from "@chakra-ui/react";
import React from "react";
import AddNewPost from "../components/AddNewPost";
import Header from "../components/Header";
import PostList from "../components/PostList";

export default function HomePage() {
  return (
    <Box>
      <Header />
      <PostList />
      <AddNewPost />
    </Box>
  );
}
