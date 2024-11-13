
import Image from 'next/image';
import Link from 'next/link';

export default function TakeCare(): JSX.Element {

  const exhibitionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const exhibitionImages = [
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
  ]

  return <div className="w-full h-auto my-auto flex flex-col">
  <h1 className="text-4xl font-600 mb-10">Taking Care of Yourself & Others</h1>

  <div className="w-full flex flex-col mb-10 px-10">
    <p className="text-lg mb-5">{exhibitionText}</p>
    <div className="w-full flex flex-row justify-between">
      {
        exhibitionImages.map((image, index) => {
          return <Image src={image}
          width={220}
          height={100}
          key={`exhibition-image-${index}`}
          alt={image} />
        })
      }
    </div>
  </div>

  <div className="text-right">
    <Link className="main-btn"
          href={'/take-care'}>
      See More
    </Link>
  </div>
</div>
}