import { DragHandleHorizontalIcon, HomeIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './button';
import { Container } from './container';

export default function Header() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(true);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener('orientationchange', closeHamburgerNavigation);
    window.addEventListener('resize', closeHamburgerNavigation);

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation);
      window.removeEventListener('resize', closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full border-b   
    backdrop-blur-[12px] 
 border-white-a08 

 
 "
    >
      <Container className=" flex  h-navigation-height items-center">
        <Link href="#" className=" ">
          <HomeIcon className="h-[35px] w-[45px]" />
        </Link>
        <div
          className={classNames(
            'transition-[visibility] md:visible',
            hamburgerMenuIsOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={classNames(
              'top-navigation-height fixed h-[calc(100vh_-_var(--navigation-height))] left-0 min-w-full ml-6 transition-opacity duration-500  md:top-0 md:block  md:relative md:h-auto md:w-auto md:overflow-hidden      md:bg-transparent md:translate-x-0 md:transition-none md:visible md:opacity-100',
              hamburgerMenuIsOpen
                ? ' translate-x-0 opacity-100'
                : ' translate-x-[-110vw] opacity-0'
            )}
          >
            <ul
              className={classNames(
                hamburgerMenuIsOpen && '[&_a]:translate-y-0',

                'ease-in flex h-full bg-background flex-col',
                '[&_a]:text-md  [&_a:hover]:text-gray [&_a]:w-full [&_a]:translate-y-8 [&_a]:flex [&_a]:items-center [&_a]:text-white [&_a]:transition-[color,transform] [&_a]:duration-300 [&_a]:md:transition-colors  [&_a]:h-navigation-height ',

                '[&_li]:ml-6 min-w-full [&_li]:border-b [&_li]:border-gray ',
                ' md:flex-row  md:[&_li]:border-none  md:items-center md:[&_a]:translate-y-0 md:[&_a]:text-md [&_a]:md:transition-colors '
              )}
            >
              {/* <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors [&_a:hover]:text-grey",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            > */}
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#" className="">
                  Method
                </Link>
              </li>{' '}
              <li>
                <Link href="#" className=" ">
                  Customer
                </Link>
              </li>{' '}
              <li>
                <Link href="#">Changing</Link>
              </li>{' '}
              <li>
                <Link href="#">Intergartion</Link>
              </li>{' '}
              <li>
                <Link href="#">Company</Link>
              </li>{' '}
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex ml-auto  items-center  space-x-2 ">
          <button className="text-md"> Login</button>
          <Button href=""> Sign up</Button>
        </div>
        <button
          className="ml-6 md:invisible "
          onClick={() => setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)}
        >
          <span className="sr-only">Toggle Menu</span>
          <DragHandleHorizontalIcon className="h-[35px] w-[48px]" />
        </button>
      </Container>
    </header>
  );
}
