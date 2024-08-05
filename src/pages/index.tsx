import Image from "next/image";
import { Inter } from "next/font/google";
import MapView2 from "@/components/MapView2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <MapView2 />

      {/* ---- Manual check map bounds based on rotated robot map */}
      {/* <MapView />
      <Image
        src='/images/campus_sim.png'
        alt='campus_sim'
        width={1629}
        height={1245}
        className='fixed top-0 left-0 rotate-[-7deg] opacity-20'
      /> */}
    </main>
  );
}
