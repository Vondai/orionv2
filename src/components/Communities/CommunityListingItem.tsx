import Link from 'next/link';

const CommunityListingItem = () => {
  return (
    <li className='hover:text-accent hover:underline'>
      <i className='fas fa-arrow-up mr-3 text-accent'></i>
      comunity/
      <Link href={`/community/lorem`}>
        <span className='font-bold'>lorem</span>
      </Link>
    </li>
  );
};

export default CommunityListingItem;
