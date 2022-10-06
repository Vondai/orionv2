const AboutCommunity = () => {
  const joinBtn = (
    <div>
      <button
        type='button'
        className='btn-community-cta'
        //onClick={handleJoinBtnClick}
      >
        Join now!
      </button>
    </div>
  );
  const creatorBtns = (
    <>
      <div>
        <button
          type='button'
          className='btn-community-cta'
        >
          Edit
        </button>
      </div>
      <div>
        <button
          type='button'
          className='btn-community-cta'
        >
          Delete
        </button>
      </div>
    </>
  );
  const createPostBtn = (
    <div>
      <button
        type='button'
        className='btn-community-cta'
        //onClick={handleCreatePostBtnClick}
      >
        Publish
      </button>
    </div>
  );
  return (
    <aside className='flex h-fit flex-col items-center gap-3 rounded-lg bg-base-200 p-8'>
      <section className='w-full text-center text-2xl'>
        <p>
          About <span className='italic'>{'lorem'}</span>
        </p>
      </section>
      <section className='w-full text-2xl'>
        <p>{'this is about lorem'}</p>
      </section>
      <section className='w-full text-lg'>
        <div>{2} member/s</div>
        <div>Created {'12.02.2022'}</div>
      </section>
      <section className='flex w-full flex-col gap-2'>
        {true ? createPostBtn : joinBtn}
        {true && creatorBtns}
      </section>
    </aside>
  );
};

export default AboutCommunity;
