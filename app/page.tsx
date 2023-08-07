import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import fetch from "node-fetch";
import https from "https";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";
//const fetch = require("node-fetch");
//const https = require("https");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export interface ItemData {
  readonly img: string;
  readonly location: string;
  readonly distance: string;
}

export interface CardData {
  readonly img: string;
  readonly title: string;
}

export default async function Home() {
  // const exploreData: ItemData[] = await fetch(
  //   "https://links.papareact.com/pyp"
  // ).then((res) => res.json());
  const exploreData: ItemData[] = [
    {
      img: "https://links.papareact.com/5j2",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];

  const cardsData: CardData[] | undefined = getData();

  return (
    <div>
      <Head>
        <title> Airbnb </title>
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> Explore nearby</h2>
          {/* pull some data from the server*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((data) => {
              return (
                <SmallCard
                  key={data.img}
                  image={data.img}
                  location={data.location}
                  distance={data.distance}
                />
              );
            })}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 mb-4">
            {cardsData?.map((cardData) => {
              return (
                <MediumCard
                  key={cardData.img}
                  image={cardData.img}
                  title={cardData.title}
                />
              );
            })}
          </div>
        </section>

        <section className="pt-6">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Explore the wilderness!"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

const getData = (): CardData[] | undefined => {
  let r = undefined;
  async () => {
    try {
      const res = await fetch("https://links.papareact.com/zp1", {
        method: "GET",
        agent: httpsAgent,
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      r = (await res.json()) as CardData[];
    } catch (err) {
      console.log(err);
    }
  };
  return r;
};
