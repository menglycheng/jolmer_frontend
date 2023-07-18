import HomePage from "@/components/Homepage/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Home | Jolmer</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      <div className="mt-10">
        <HomePage />
      </div>
    </main>
  );
}
