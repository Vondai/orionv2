import Link from 'next/link';

const PostListingFilterBtns = () => {
  return (
    <article className='mb-3 flex justify-evenly font-bold'>
      <div className='btn-post-filter'>
        <i className='fab fa-hotjar'></i>
        <Link
          className=''
          href='/posts/hot'
        >
          Hot
        </Link>
      </div>
      <div className='btn-post-filter'>
        <i className='fas fa-certificate'></i>
        <Link
          className=''
          href='/posts/new'
        >
          New
        </Link>
      </div>
    </article>
  );
};

export default PostListingFilterBtns;
