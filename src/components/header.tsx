'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header(): JSX.Element {

  const [open, setOpen] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  function toggleNav(): void {
    if (!open) {
      setOpen(true);
      setTimeout(() => {
        setShowLabels(true);  
      }, 400);
      return;
    }
    setShowLabels(false);
    setTimeout( () => {
      setOpen(false);
    }, 100);
    
  }

  return <nav className="absolute top-0 right-0">
    <div className={`text-right py-10 px-10 md:px-20 z-30 cursor-pointer w-full font-extrabold text-2xl relative transition-colors  duration-200 text-white `}
        onClick={ () => toggleNav() }>
        <div className={`burger-icon ${ open ? 'burger-close' : 'burger-open'}`}>
          <div className="first">|</div>
          <div className="middle">|</div>
          <div className="last">|</div>
        </div>
      </div>

      <div className={`absolute transition-all duration-500 z-20
                      ${ open 
                        ? 'top-0 right-0 bg-black opacity-80 w-screen h-screen !rounded-none'
                        : 'top-5 -right-full w-0 h-0 rounded-full'}`}>
        <div className={`flex flex-row items-center justify-center h-full text-white transition-opacity ${ showLabels ? 'opacity-1' : 'opacity-0'}`}>
          <Link href="/"
              onClick={ () => toggleNav() }
             className="py-5 px-10">
            Home
          </Link>
          <Link href="/exhibitions"
              onClick={ () => toggleNav() }
             className="py-5 px-10">
            Exhibitions
          </Link>
          <Link href="/support"
              onClick={ () => toggleNav() }
             className="py-5 px-10">
            Support
          </Link>
        </div>
      </div>
  </nav>
}