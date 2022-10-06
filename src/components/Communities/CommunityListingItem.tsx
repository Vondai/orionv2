import Link from 'next/link';

const CommunityListingItem = () => {
  return (
    <li className='hover:text-accent hover:underline'>
      <Link
        href={`/community/lorem`}
        passHref={true}
      >
        <a className='flex items-center text-lg'>
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
              d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'
            />
          </svg>
          <span className='ml-2'>comunity/</span>
          <span className='font-bold'>lorem</span>
        </a>
      </Link>
    </li>
  );
};

export default CommunityListingItem;
