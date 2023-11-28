import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Bot, Eye, Heart, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import AiBtn from "./AI/AiBtn";

type props = {
  img: string;
};

export default function Card({ img }: props) {
  return (
    <div className="border dark:shadow-white/20 shadow-black/20 shadow-sm rounded-xl p-3 flex flex-col">
      <div className="basis-[60%]">
        <AspectRatio ratio={16 / 9}>
          <Image src={img} alt="Image" fill />
        </AspectRatio>
      </div>
      <div className="basis-[40%] space-y-3 p-2 pt-3">
        <div className="flex gap-x-2">
          <span className="bg-blue-600 px-3 rounded dark:text-black text-white">Politics</span>
          <p className="text-sm md:text-base dark:text-gray-300">Aug 13,2023 </p>
        </div>
        <h1 className="text-base md:text-xl font-semibold">
          Politics of Nepal The politics of Nepal functions within the framework
          of a parliamentary republic with a multi-party system
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-5">
            <div className="flex gap-x-1 hover:text-red-300 duration-200">
              <Heart />
              10k
            </div>
            <div className="flex gap-x-1">
              <MessageCircle />
              1k
            </div>

            <div className="flex gap-x-1">
              <Eye />
              2k
            </div>
          </div>
          <AiBtn />
        </div>
      </div>
    </div>
  );
}
