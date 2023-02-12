import React, { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

import Post from "./Post";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  console.log("🚀 ~ file: index.js ~ line 12 ~ PostList ~ posts", posts);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </Grid>
  );
}
