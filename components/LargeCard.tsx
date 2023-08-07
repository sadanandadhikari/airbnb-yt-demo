import React from "react";
import Image from "next/image";
export interface LargeCardProps {
  readonly title: string;
  readonly img: string;
  readonly description: string;
  readonly buttonText: string;
}

function LargeCard({ title, img, description, buttonText }: LargeCardProps) {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-black w-64 mb-3 text-4xl">{title}</h3>
        <p className="text-black">{description}</p>
        <button className="text-sm text-white bg-black px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
