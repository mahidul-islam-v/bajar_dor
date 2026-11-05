import Image from "next/image";
import Navbar from "./Components/Navbar";
import { Separator } from "@heroui/react";
import Categories from "./Components/Categories";
import Marquee from "./Components/Marquee";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Separator className="opacity-35" />
      <Categories></Categories>
      <Separator className="opacity-35" />
      <Marquee></Marquee>

    </div>
  );
}
