import CommunityListingItem from './CommunityListingItem';

const TopCommunities = () => {
  return (
    <aside className='flex flex-col items-center'>
      <section>
        <p className='text-center text-lg font-semibold'>
          Most subscribed communities
        </p>
      </section>
      <section>
        <ol>
          <CommunityListingItem />
          <CommunityListingItem />
          <CommunityListingItem />
          <CommunityListingItem />
          <CommunityListingItem />
        </ol>
      </section>
    </aside>
  );
};

export default TopCommunities;
