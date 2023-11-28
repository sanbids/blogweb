import LatestPost from "@/components/FirstPage/LatestPost";
import Footer from "@/components/Footer/Footer";
import Hpost from "@/components/HeadingPost/Hpost";

export default function Home() {
  return (
    <div className="w-full">
      <Hpost />
      
      <LatestPost/>
    </div>
  );
}
