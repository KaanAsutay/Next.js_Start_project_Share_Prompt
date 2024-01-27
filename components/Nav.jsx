"use strict"

import Link from "next/link";
import Image from "next/image";


const Nav = () => {
  const isUserLoggedIn = true;
  return 
  <nav className="flex-between w-full mb-16 pt-3">
    <Link href='/' className='flex gap-2 pt-3'>
      <Image width={30} height={30} alt="logo" src="/assets/images/logo.svg" className="object-contain" />
    </Link>

  </nav>;
};

export default Nav;
