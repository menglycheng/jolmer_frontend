
import Head from "next/head";
const donation = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>Donation | Jolmer</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      <div className=" text-center mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Donation
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          dignissimos aspernatur iure nihil. Architecto sit, ipsum tempore
          accusantium, consectetur pariatur dolor tempora commodi quae voluptate
          necessitatibus perferendis dolores velit molestias. Culpa eos iste
          nobis cupiditate sit a minima quia. Quas quae corrupti ad excepturi
          molestiae libero illo debitis modi hic ut quidem cumque, fugit
          sapiente, tempora mollitia eveniet sunt aliquid.
        </p>
      </div>
      <img className="w-1/2" src="/image/ABA.jpg" alt="ABA Logo" />
    </div>
  );
};

export default donation;
