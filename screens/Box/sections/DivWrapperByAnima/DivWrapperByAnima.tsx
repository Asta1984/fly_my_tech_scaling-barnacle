import React, { JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  // Coach data for mapping
  const coaches = [
    {
      id: 1,
      name: "Dianne Russell",
      image: "/unsplash-if9tk5uy-ki.png",
      description:
        "More than 20 years of experience in the field architecture and has worked on project up to 100+",
    },
    {
      id: 2,
      name: "Dianne Russell",
      image: "/unsplash-if9tk5uy-ki-1.png",
      description:
        "More than 20 years of experience in the field architecture and has worked on project up to 100+",
    },
    {
      id: 3,
      name: "Dianne Russell",
      image: "/unsplash-if9tk5uy-ki-2.png",
      description:
        "More than 20 years of experience in the field architecture and has worked on project up to 100+",
    },
    {
      id: 4,
      name: "Dianne Russell",
      image: "/unsplash-if9tk5uy-ki-3.png",
      description:
        "More than 20 years of experience in the field architecture and has worked on project up to 100+",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1266px] items-center gap-10 mx-auto py-10">
      <header className="w-full max-w-[651px]">
        <h2 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#001f3f] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-center [font-style:var(--heading-h1-font-style)]">
          Meet Our Awesome Coach
        </h2>
      </header>

      <div className="flex flex-wrap justify-center gap-[30px] w-full">
        {coaches.map((coach) => (
          <Card
            key={coach.id}
            className="w-[294px] h-[312px] rounded-lg shadow-[0px_10px_15px_#9696961f] rotate-180 [background:linear-gradient(224deg,rgba(71,71,71,1)_0%,rgba(34,34,34,1)_42%)]"
          >
            <CardContent className="p-0 rotate-180 h-full relative">
              <img
                className="w-[100px] h-[100px] absolute top-[33px] left-1/2 -translate-x-1/2 object-cover"
                alt={`Coach ${coach.name}`}
                src={coach.image}
              />

              <div className="absolute top-[161px] left-1/2 -translate-x-1/2 [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] text-center w-full">
                {coach.name}
              </div>

              <div className="absolute top-[207px] left-[30px] right-[30px] [font-family:'Poppins',Helvetica] font-normal text-neutral-200 text-sm tracking-[0] leading-[normal] text-center">
                {coach.description.split(" ").slice(0, 7).join(" ")}
                <br />
                {coach.description.split(" ").slice(7, 14).join(" ")}
                <br />
                {coach.description.split(" ").slice(14).join(" ")}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
