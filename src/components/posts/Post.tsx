import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface IAuthor {
  username: string;
}

interface IPost {
  title: string;
  body: string;
  author: IAuthor;
}

const Post: React.FC<any> = ({ post }: any) => {
  return (
    <Card>
      <CardContent>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.author.username}</p>
      </CardContent>
    </Card>
  );
};

export default Post;
