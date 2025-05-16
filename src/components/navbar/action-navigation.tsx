import { NextPage } from 'next';
import { NavigationMenu } from '../ui/navigation-menu';
import TooltipButton from '../common/tooltip-button';
import { Button } from '../ui/button';
import { ArrowUpRightFromSquare } from 'lucide-react';
import githubIcon from '@/assets/images/svg/icons/github.svg';
import instagramIcon from '@/assets/images/svg/icons/instagram.svg';
import twitterIcon from '@/assets/images/svg/icons/twitter.svg';
import htbIcon from '@/assets/images/svg/icons/htb.svg';
import Link from 'next/link';
import ThemeChanger from './theme-changer';

const socialData = [
  {
    icon: githubIcon,
    alt: 'Github',
    title: '@masfajaranugrah',
    url: 'https://github.com/masfajaranugrah'
  },
  {
    icon: instagramIcon,
    alt: 'Instagram',
    title: '@fajaranugrahdev',
    url: 'https://www.instagram.com/fajaranugrahdev'
  },
];

const ActionNavigation: NextPage = ({}) => {
  return (
    <div className='col-span-1 flex items-center justify-end'>
      <NavigationMenu className='flex justify-end items-end w-full'>
        <div className='hidden xl:block'>
          {socialData.map((social, index) => (
            <Link href={social.url} key={index} target='_blank'>
              <TooltipButton data={social} />
            </Link>
          ))}
          <ThemeChanger />
        </div>
        <div className='ml-1 hover:shadow-xl hover:shadow-primary-500/75 rounded-xl duration-500'>
          <Button className='rounded-xl bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400'>
            <Link href={'https://www.linkedin.com/in/fajaranugrah22/'} target='_blank'>
              <p className='font-bold text-opacity-90 text-white'>Connect Linkedin</p>
            </Link>
            <ArrowUpRightFromSquare className='dark:text-white' />
          </Button>
        </div>
      </NavigationMenu>
    </div>
  );
};

export default ActionNavigation;
