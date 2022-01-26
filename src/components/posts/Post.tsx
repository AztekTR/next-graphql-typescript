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

interface IProps {
  post: IPost | undefined;
}

const Post: React.FC<IProps> = ({ post }: IProps) => {
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
