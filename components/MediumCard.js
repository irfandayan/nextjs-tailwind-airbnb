import Image from "next/image";

const MediumCard = ({ image, title }) => {
  return (
    <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={image} fill className="rounded-xl" alt="medium cards" />
      </div>
      <h3 className="mt-3 text-2xl ">{title}</h3>
    </div>
  );
};

export default MediumCard;
