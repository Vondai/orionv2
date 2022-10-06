import Link from 'next/link';
import PostCta from './PostCta';

const PostListing = () => {
  return (
    <>
      <article className='flex w-full cursor-pointer items-center rounded-lg bg-base-200 p-6 hover:bg-primary-focus'>
        <section className='w-1/6 text-4xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
            />
          </svg>
        </section>
        <section className='w-3/4'>
          <div className='text-2xl font-bold hover:text-primary-content'>
            <p>Some test title</p>
          </div>
          <div className='flex justify-between'>
            <div>
              <Link
                href={`community/lorem`}
                className='font-bold hover:text-primary-content'
              >
                community/lorem
              </Link>
            </div>
            <div>
              <p>
                user/
                <Link href={`/user/lorem`}>
                  <span className='font-bold hover:text-primary-content'>
                    lorem
                  </span>
                </Link>
              </p>
            </div>
            <div>
              <p>Posted 21.10.2022.</p>
            </div>
          </div>
          <PostCta
            commentsCount={2}
            postId={3}
            communityName={'lorem'}
          />
        </section>
      </article>
      <div className='divider'></div>
    </>
  );
};

export default PostListing;
