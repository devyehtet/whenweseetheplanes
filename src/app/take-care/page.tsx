import Image from "next/image";

export default function TakeCarePage(): JSX.Element {

  const takeCareTextOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const takeCareImageOne = [
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
  ];

  const takeCareTextTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const takeCareImageTwo = [
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
  ];

  const takeCareTextThree = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const takeCareImageThree = [
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
  ];

  return <div className="custom-max-w !mt-20 ">
    <h1 className="text-center page-title mb-10">
      WHEN WE SEE THE PLANE
    </h1>

    <h1 className="text-4xl font-600 mb-10">Taking Care of Yourself and Others</h1>

    <div className="px-10">
      <section className="w-full flex flex-col mb-20">
        <p className="text-lg mb-5">{ takeCareTextOne }</p>
        <div className="w-full flex flex-row justify-between mb-10">
          {
            takeCareImageOne.map((image, index) => {
              return <Image src={image}
              width={220}
              height={100}
              key={`takeCare-image-${index}`}
              alt={image} />
            })
          }
        </div>

        <div className="text-right">
          <button className="main-btn">
            Download
          </button>
        </div>
      </section>

      <section className="w-full flex flex-col mb-20">
        <p className="text-lg mb-5">{ takeCareTextTwo }</p>
        <div className="w-full flex flex-row justify-between mb-10">
          {
            takeCareImageTwo.map((image, index) => {
              return <Image src={image}
              width={220}
              height={100}
              key={`takeCare-image-${index}`}
              alt={image} />
            })
          }
        </div>

        <div className="text-right">
          <button className="main-btn">
            Download
          </button>
        </div>
      </section>

      <section className="w-full flex flex-col mb-20">
        <p className="text-lg mb-5">{ takeCareTextThree }</p>
        <div className="w-full flex flex-row justify-between mb-10">
          {
            takeCareImageThree.map((image, index) => {
              return <Image src={image}
              width={220}
              height={100}
              key={`takeCare-image-${index}`}
              alt={image} />
            })
          }
        </div>

        <div className="text-right">
          <button className="main-btn">
            Download
          </button>
        </div>
      </section>
    </div>
  
  </div>
}