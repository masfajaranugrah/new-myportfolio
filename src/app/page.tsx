import Header from '@/components/header/header';
import Profile from '@/components/profile/Profile';
import Services from '@/components/services/Service';
import {Showcase} from '@/components/showcase/showcase';
import { NextPage } from 'next';

const Page: NextPage = ({}) => {
  return (
    <>
      <Header />
      <Showcase />
      <Services/>
      <Profile />
   
     </>
  );
};

export default Page;
