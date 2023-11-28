import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Hpost() {
  return (
    <div className="w-[80%] md:w-[70%] lg:w-[65%] border rounded-xl m-10 mx-auto relative  shadow-black/30  dark:shadow-white/30 shadow-lg">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/mbs.jpg"
          alt="Image"
          className="rounded-xl absolute z-10"
          fill
        />
        <div className="absolute z-20 bottom-[-40px] bg-white dark:bg-gray-800 shadow-black/30  dark:shadow-white/30 shadow-sm rounded-2xl w-[50%] h-[40%] left-10 p-4">
          <div className="flex w-full h-full justify-center flex-col items-start">
          <span className="px-2 text-sm lg:text-xl rounded-md ">Politics</span>
          <h1 className="mt-2 text-sm md:text-xl lg:text-xl xl:text-2xl font-bold">
            Nepal is a federal democratic republic located in South Asia.
          </h1>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}
