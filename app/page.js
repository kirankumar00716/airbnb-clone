import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";


export default async function Home() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(res => res.json());

  const cardsData= await fetch("https://www.jsonkeeper.com/b/VHHT").then(res=>res.json());

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* Small cards */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-6'>Explore Nearby</h2>
          {/* Display data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {exploreData?.map(({img,location,distance})=>
          <SmallCard
          key={img}
          img={img}
          distance={distance}
          location={location}
          />)}
          </div>
        </section>
        {/* Medium cards or scrollable carousel */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(({img,title})=>
          <MediumCard
          key={img}
          img={img}
          title={title}
          />)}
          </div>
        </section>
        {/* Large cards */}
        <section>
          <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer/>
    </div>
  );
}

