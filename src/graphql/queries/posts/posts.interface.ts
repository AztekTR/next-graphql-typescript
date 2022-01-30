export interface IAuthor {
  username: string;
}

export interface IPost {
  id: string;
  title: string;
  body: string;
  author: IAuthor;
}
