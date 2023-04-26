const Post = ({ post }) => {
  return (
    <li>
      <span>{post.id}</span>
      <span className="mr-5 ml-5">{":"}</span>
      <span>{post.title}</span>
    </li>
  );
};
export default Post;
