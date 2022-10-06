import PostListing from './PostListing';
import PostListingFilterBtns from './PostListingFilterBtns';

const Posts = () => {
  return (
    <section className='flex w-3/5 flex-col gap-4'>
      <div>
        <PostListingFilterBtns />
      </div>
      <div>
        <PostListing />
        <PostListing />
        <PostListing />
        <PostListing />
      </div>
    </section>
  );
};

export default Posts;
