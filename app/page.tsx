import HeroBanner from "./Components/HeroBanner";
import ItemSection from "./Components/ItemSection";

export default function Home() {
  return (
    <div>
      <div className="bg-[#f0f5f0]">
        <HeroBanner></HeroBanner>
        <ItemSection></ItemSection>
      </div>

    </div>
  );
}
