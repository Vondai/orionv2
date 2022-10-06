import CommunityListingItem from './CommunityListingItem';

const TopCommunities = () => {
  return (
    <aside className='flex h-fit flex-col items-center gap-3 rounded-lg bg-base-200 p-6'>
      <section>
        <p className='text-center text-2xl font-semibold'>
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
