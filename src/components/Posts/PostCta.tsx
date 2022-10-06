import Link from 'next/link';

const PostCta = ({
  commentsCount,
  postId,
  communityName
}: {
  commentsCount: number;
  postId: number;
  communityName: string;
}) => {
  return (
    <div className='flex gap-6'>
      <div className='flex items-center gap-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
          />
        </svg>

        <Link
          href={
            communityName
              ? `/community/${communityName}/comments/${postId}`
              : `comments/${postId}`
          }
          passHref={true}
        >
          <a className='hover:text-accent-content'>
            {commentsCount === 0 ? 'Comment' : `${commentsCount} Comments`}
          </a>
        </Link>
      </div>
      <div className='flex items-center gap-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
          />
        </svg>

        <Link href=''>
          <a className='hover:text-accent-content'>Share</a>
        </Link>
      </div>
    </div>
  );
};

export default PostCta;
