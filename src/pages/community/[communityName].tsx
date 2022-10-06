import Head from 'next/head';
import { useRouter } from 'next/router';
import AboutCommunity from '../../components/Communities/AboutCommunity';
import Posts from '../../components/Posts/Posts';

const Community = () => {
  const router = useRouter();
  const communityName = router.query.communityName;

  return (
    <>
      <Head>
        <title>{communityName}</title>
        <meta
          name='description'
          content='Community driven platform'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Posts />
      <AboutCommunity />
    </>
  );
};

export default Community;
