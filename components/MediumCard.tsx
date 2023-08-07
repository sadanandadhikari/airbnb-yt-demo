import React from "react";
import Image from "next/image";
export interface MediumCardProps {
  readonly image: string;
  readonly title: string;
}

function MediumCard({ image, title }: MediumCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={image} layout="fill" alt={title} className="rounded-xl" />
      </div>
      <h3 className="text-2xl m-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
