import VideoSection from "../_components/home/sections/video-section/VideoSection";
import Header from "../_components/home/Header";
import PilaresSection from "../_components/home/sections/pilares-section/PilaresSection";
import NucleoSection from "../_components/home/sections/nucleo-de-inovacao/NucleoSection";
import Mercados from "../_components/home/sections/mercados/Mercados";
import Solucoes from "../_components/home/sections/solucoes/Solucoes";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main>
      <Header />
      <VideoSection />
      <PilaresSection />
      <NucleoSection />
      <Mercados />
      <Solucoes />
    </main>
  )
}
