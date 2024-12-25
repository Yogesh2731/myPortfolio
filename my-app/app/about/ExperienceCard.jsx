'use client';

const ExperienceCard = ({year, title}) => {

  return (
    <div className="relative w-full h-auto p-[50px] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-lg rounded-xl overflow-hidden border border-[hsl(var(--border))] cursor-pointer">
      <div className="text-[24px] md:text-[44px] font-semibold text-left">{year}</div>
      <div className="text-[26px] md:text-[50px] font-semibold text-left">
        {title}
      </div>
      {/* <div>
        Read full experience
      </div> */}
      <div className="absolute w-full h-full bg-primary rounded-xl left-[70%] top-[96px] rotate-45 opacity-20"></div>
      <div className="absolute w-full h-full bg-primary rounded-xl right-[57%] top-[20px] rotate-45 opacity-20"></div>
      {/* <div className="absolute w-full h-full bg-[hsl(var(--card-foreground))] rounded-xl left-[70%] top-[96px] rotate-45 opacity-20"></div>
      <div className="absolute w-full h-full bg-[hsl(var(--card-foreground))] rounded-xl right-[57%] top-[20px] rotate-45 opacity-20"></div> */}
    </div>
  );
};

export default ExperienceCard;
