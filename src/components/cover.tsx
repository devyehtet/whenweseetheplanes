
import Image from 'next/image';
import cover from '../../public/assets/cover.webp';

export default function Cover(): JSX.Element {

  return <div className="w-full h-full flex items-center justify-center p-4 md:p-0">
    <Image src={cover}
           width={500}
           height={500}
           className='max-w-screen max-h-screen px-10 md:max-w-[500px] md:max-h-[500px]'
           alt='When we see the plane'  />
  </div>
}