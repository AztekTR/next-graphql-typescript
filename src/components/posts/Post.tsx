import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";

interface IAuthor {
  username: string;
}

interface IPost {
  id: string;
  title: string;
  body: string;
  author: IAuthor;
}

interface IProps {
  post: IPost;
  isLink?: boolean;
}

const Post: React.FC<IProps> = ({ post, isLink }: IProps) => {
  return (
    <Card>
      <CardContent>
        <p>
          {isLink ? <Link href={`/posts/${post.id}`}>{post.title}</Link> : post.title}
        </p>
        <p>{post.body}</p>
        <p>{post.author.username}</p>
      </CardContent>
    </Card>
  );
};

export default Post;
