import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='fixed bottom-6 right-8 flex max-w-lg gap-4 rounded-lg bg-base-200 p-5 text-lg font-bold'>
      <section>
        <ul>
          <li className='hover:underline'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:underline'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li className='flex items-center gap-2'>
            <i className='fab fa-github'></i>
            <a
              className='hover:underline '
              href='https://github.com/Vondai'
            >
              Github
            </a>
          </li>
          <li>
            <p className='rights'>Orion &copy; 2022. All rights reserved</p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
