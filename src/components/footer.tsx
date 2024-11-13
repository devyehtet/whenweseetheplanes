import Link from "next/link";
import Image from "next/image";
import footer from '../../public/assets/Footer.webp';


export default function Footer(): JSX.Element {

  return <footer className="w-full absolute bottom-0 left-0 z-20">
    <div className="relative max-w-[1000px] mx-auto">
      <Image src={footer}
            style={{
              objectFit: 'contain',
              objectPosition: 'center center',
              width: '100%',
              height: '100%',
            }}
            alt="when we see the plane campaign organizers" />
      <div className="scale-75 md:scale-100	w-auto absolute right-5 md:right-8 lg:right-10 bottom-3 md:bottom-8 lg:bottom-10">
        <Link className="main-btn"
          href={'/support'}>
          Support
        </Link>
      </div>
    </div>

  </footer>
}