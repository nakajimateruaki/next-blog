const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {":"}
      <span>{post.title}</span>
    </div>
  );
};
export default Post;
