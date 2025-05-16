import Header from '@/components/header/header';
import Profile from '@/components/profile/Profile';
import Showcase from '@/components/showcase/showcase';
import { NextPage } from 'next';

const Page: NextPage = ({}) => {
  return (
    <>
      <Header />
      <Showcase />
      <Profile />
   
     </>
  );
};

export default Page;
