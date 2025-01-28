import Image from "next/image";

export default function ServiceCard({ cards }) {
  return (
    <div className="flex flex-wrap justify-center my-10 gap-14">
      {cards.map((card) => (
        <div className="w-[271px] h-[289px] rounded-[10px] " key={card.id}
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
          }}
        >

          <Image
            src={card.imageSrc}
            alt="card Img"
            width={100}
            height={100}
            className="w-full h-36 mx-auto"
          />

          <h2 className="text-2xl font-semibold text-[#292E3D] text-center mt-5">
            {card.title}
          </h2>
          <p className="text-center text-[#292E3D] mt-1">
            {card.description}
          </p>
          <a href="#" className="text-sm italic text-[#8A1538] underline flex items-center justify-end pr-5 mt-1">Learn More</a>
        </div>
      ))}
    </div>

  );
}
