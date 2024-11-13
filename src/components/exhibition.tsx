import Image from 'next/image';
import exhibition from '../../public/assets/exhibition.webp';
import exhibitionConcept from '../../public/assets/exhibition-concept.png';
import Link from 'next/link';

export default function Exhibition(): JSX.Element {

  return <div className="w-full h-auto my-auto flex flex-col p-10 md:p-5">
  <h1 className="text-3xl font-600 mb-10">Exhibition</h1>

  <div className="flex flex-row px-0 md:px-20 items-center gap-5">
    <div className="w-full md:w-1/2">
      <Image src={exhibition}
            width={300}
            className='mx-auto'
            alt='when we see the plane exhibition' />
    </div>

    <div className="w-full md:w-1/2 f-full flex flex-grow flex-col items-end">
      <Image src={exhibitionConcept}
            className='mx-auto'
            width={300}
            height={300}
            alt='when we see the plane exhibition concept' />
      <Link className="main-btn"
            href={'/exhibitions'}>
        See More
      </Link>
    </div>
  </div>
</div>
}