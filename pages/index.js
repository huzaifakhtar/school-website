import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "@/components/Caraousal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
 <Carousel  />
   </>
  );
}
