import Image from "next/image";

export default function CampaignsPage(): JSX.Element {

  const campaignTextOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const campaignImageOne = [
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
  ];

  const campaignTextTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const campaignImageTwo = [
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
  ];

  const campaignTextThree = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const campaignImageThree = [
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
    "https://placehold.jp/c2c3c4/ffffff/240x120.png?text=-",
  ];

  return <div className="custom-max-w !mt-20 ">
    <h1 className="text-center page-title mb-10">
      WHEN WE SEE THE PLANE
    </h1>

    <h1 className="text-4xl font-600 mb-10">Campaigns</h1>
    <div className="px-10">
      <section className="w-full flex flex-col mb-20">
        <p className="text-lg mb-5">{ campaignTextOne }</p>
        <div className="w-full flex flex-row justify-between">
          {
            campaignImageOne.map((image, index) => {
              return <Image src={image}
              width={220}
              height={100}
              key={`exhibition-image-${index}`}
              alt={image} />
            })
          }
        </div>
      </section>

      <section className="w-full flex flex-col mb-20">
        <p className="text-lg mb-5">{ campaignTextTwo }</p>
        <div className="w-full flex flex-row justify-between">
          {
            campaignImageTwo.map((image, index) => {
              return <Image src={image}
              width={220}
              height={100}
              key={`exhibition-image-${index}`}
              alt={image} />
            })
          }
        </div>
      </section>

      <section className="w-full flex flex-col mb-20">
        <p className="text-lg mb-5">{ campaignTextThree }</p>
        <div className="w-full flex flex-row justify-between">
          {
            campaignImageThree.map((image, index) => {
              return <Image src={image}
              width={220}
              height={100}
              key={`exhibition-image-${index}`}
              alt={image} />
            })
          }
        </div>
      </section>
    </div>
  
  </div>
}