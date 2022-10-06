import Link from 'next/link';

const Navbar = () => {
  return (
    <section className='flex items-center justify-between bg-red-400 p-2'>
      <Link href='/'>
        <a className='text-2xl font-bold text-base-200'>Orion</a>
      </Link>
      <div className='form-control'>
        <div className='input-group'>
          <input
            disabled={true}
            type='text'
            placeholder='Search…'
            className='input input-bordered'
          />
          <button className='btn btn-disabled btn-accent btn-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <button className='btn'>Signin/SignUp</button>
      </div>
    </section>
  );
};

export default Navbar;
