import { Campaign as CampaignModel } from "@/models/common.models";
import Image from 'next/image';
import Link from "next/link";
import poster from '../../public/assets/poster-1.webp';


export default function About(): JSX.Element {

  return <div className="w-full h-auto my-auto flex flex-col md:flex-row gap-5">
    
    <div className="w-full md:w-1/2 flex">
      <Image src={poster}
            width={300}
            height={700}
            className="mx-auto"
            alt="When we see the plane poster" />
    </div>
    <div className="w-full hidden md:flex md:w-1/2">
      <div className="m-auto mt-5">
        <h1 className="text-base font-bold ">WHEN WE SEE THE PLANES</h1>
        <p className="text-sm">
          It normally is an exciting experience,for young or old. To witness these man-made contraptions flying in the sky is wondrous, and to appreciate human creativity.
          <br />
          <br />
          But for the people of Myanmar, every time they see the planes They see those parts of the country now facing airstrikes by the military regime against civilian targets, every time they hear the planes, they hear the cries of the many forced to flee their homes and hide from the bombs -
          <br />
          <br />
          It is the images of local communities, people, children, brutalized and destroyed, that are the civilians forced
        </p>
      </div>
    </div>

    
  </div>
}