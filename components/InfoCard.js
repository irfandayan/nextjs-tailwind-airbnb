import Image from "next/image";

import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex cursor-pointer border-b py-7 px-2 pr-4 transition duration-200 ease-out first:border-t hover:opacity-80  hover:shadow-lg">
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image
          src={img}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-grow flex-col pl-5">
        <div className="flex items-end justify-between pt-5">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 border-b pt-2" />
        <p className="pt-2 text-sm text-gray-500">{description}</p>
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
