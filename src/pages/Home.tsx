import { FaArrowRightLong } from 'react-icons/fa6';
import { NavigationHome } from '../component/Navigations';
import { CardJenisSampah, CardLayanan } from '../component/Cards';
import Footer from '../component/Footer';
import { Button } from '../component/Buttons';

export default Home;

function HeroSection() {
  return (
    <header className="hero-img h-[455px] w-full bg-center bg-cover relative">
      <div className="w-full h-full bg-opacity-25 blur-background backdrop-blur-sm bg-slate-900">
        <article className="flex flex-col items-center justify-center h-full pt-16">
          <div className="w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-transparent absolute top-0" />
          <h1 className="z-20 mb-4 text-3xl font-breeSerif text-gray-50">
            EcoTreasures
          </h1>
          <p className="text-wrap text-xl text-gray-50 text-center max-w-[754px] mb-6 z-20">
            Tempat di mana sampah Anda dapat menjadi nilai baru.
            <br />
            Temukan kreativitas dalam sampah Anda dan
            berkontribusi untuk lingkungan yang lebih hijau!
          </p>
          <Button
            title="Masuk ke Marketplace"
            href="/"
            className="z-20"
            type="green"
          >
            Marketplace
            <FaArrowRightLong />
          </Button>
        </article>
      </div>
    </header>
  );
}

function LayananSection() {
  return (
    <section className="flex flex-col items-center justify-center p-10 space-y-6">
      <div className="flex flex-col items-center justify-center space-y-3">
        <h1 className="text-3xl font-bold font-redHatDisplay">Layanan</h1>
        <p>Revolusi daur ulang dari EcoTreasures untuk semua orang.</p>
      </div>
      <div id="layanan" className="flex space-x-4 cursor-pointer">
        <CardLayanan
          href="/"
          img="https://svgshare.com/i/12gg.svg"
          nama="Pick Up"
          desk="Foto sampah daur ulangmu, upload ke website Ecotreasures, petugas terdekat akan menjemput, menimbang dan membayar sampahmu."
        />
        <CardLayanan
          href="/"
          img="https://svgshare.com/i/12f8.svg"
          nama="Drop off"
          desk="Antar langsung sampahmu ke Recycling Centre terdekat, kamu bisa mendaur ulang dengan ukuran kecil seperti satu botol plastik."
        />
      </div>
    </section>
  );
}

function JenisSampahSection() {
  const jenisSampahData = [
    {
      href: '/',
      src: 'https://svgshare.com/i/12fJ.svg',
      nama: 'Kertas',
    },
    {
      href: '/',
      src: 'https://svgshare.com/i/12gh.svg',
      nama: 'Plastik',
    },
    {
      href: '/',
      src: 'https://svgshare.com/i/12fK.svg',
      nama: 'Aluminium',
    },
    {
      href: '/',
      src: 'https://svgshare.com/i/12h1.svg',
      nama: 'Besi & Logam',
    },
    {
      href: '/',
      src: 'https://svgshare.com/i/12ez.svg',
      nama: 'Elektronik',
    },
    {
      href: '/',
      src: 'https://svgshare.com/i/12gJ.svg',
      nama: 'Botol',
    },
    {
      href: '/',
      src: 'https://svgshare.com/i/12fc.svg',
      nama: 'Merek',
    },
    {
      href: '/',
      src: 'https://svgshare.com/i/12fo.svg',
      nama: 'Khusus',
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center p-10 space-y-6">
      <div className="flex flex-col items-center justify-center space-y-3">
        <h1 className="text-3xl font-bold font-redHatDisplay">Jenis Sampah</h1>
        <p>Lihat semua jenis sampah yang kami daur ulang.</p>
      </div>
      <div className="flex cursor-pointer max-w-[750px] flex-wrap justify-center items-center">
        {jenisSampahData.map((sampah) => (
          <CardJenisSampah
            key={sampah.nama}
            href={sampah.href}
            src={sampah.src}
            nama={sampah.nama}
          />
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <NavigationHome />
      <HeroSection />
      <div className="min-h-dvh">
        <LayananSection />
        <JenisSampahSection />
      </div>
      <section className="mt-8">
        <Footer />
      </section>
    </main>
  );
}
