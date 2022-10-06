import PostListing from './PostListing';
import PostListingFilterBtns from './PostListingFilterBtns';

const Posts = () => {
  return (
    <section>
      <PostListingFilterBtns />
      <PostListing />
      <PostListing />
      <PostListing />
      <PostListing />
    </section>
  );
};

export default Posts;
