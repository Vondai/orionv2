import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Orion</title>
        <meta
          name='description'
          content='Community driven platform'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Layout></Layout>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation
}: TechnologyCardProps) => {
  return (
    <section className='flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105'>
      <h2 className='text-lg text-gray-700'>{name}</h2>
      <p className='text-sm text-gray-600'>{description}</p>
      <a
        className='m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2'
        href={documentation}
        target='_blank'
        rel='noreferrer'
      >
        Documentation
      </a>
    </section>
  );
};
