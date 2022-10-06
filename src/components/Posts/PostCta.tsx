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
        <i className='fas fa-comments text-accent'></i>
        <Link
          href={
            communityName
              ? `/community/${communityName}/comments/${postId}`
              : `comments/${postId}`
          }
          className='hover:text-accent-content'
        >
          {commentsCount === 0 ? 'Comment' : `${commentsCount} Comments`}
        </Link>
      </div>
      <div className='flex items-center gap-1'>
        <i className='fas fa-share text-accent'></i>
        <Link
          href=''
          className='hover:text-accent-content'
        >
          Share
        </Link>
      </div>
    </div>
  );
};

export default PostCta;
