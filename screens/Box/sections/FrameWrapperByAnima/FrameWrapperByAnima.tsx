import React, { JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  // Define services data for mapping
  const coachingServices = [
    {
      id: 1,
      title: "Life Coaching",
      icon: "/mdi-heart.svg",
      alt: "Mdi heart",
    },
    {
      id: 2,
      title: "Business Coaching",
      icon: "/mdi-business-outline.svg",
      alt: "Mdi business outline",
    },
    {
      id: 3,
      title: "Business Consultancy",
      icon: "/mdi-business-woman.svg",
      alt: "Mdi business woman",
    },
    {
      id: 4,
      title: "Mental Health",
      icon: "/ri-mental-health-fill.svg",
      alt: "Ri mental health",
    },
    {
      id: 5,
      title: "Spiritual Awareness",
      icon: "/token-soul.svg",
      alt: "Token soul",
    },
  ];

  return (
    <Card className="flex flex-col items-center gap-10 px-5 py-10 rounded-[40px] [background:linear-gradient(90deg,rgba(96,187,238,1)_0%,rgba(35,135,192,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <CardContent className="p-0 w-full">
        <h2 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
          Our Core Coaching&nbsp;&nbsp;Services
        </h2>

        <div className="flex items-center justify-between gap-[60px] mt-10 w-full">
          {coachingServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center gap-[5px]"
            >
              <div className="relative w-[94px] h-[94px] bg-[#2387c04c] rounded-[47px] shadow-[0px_4px_4px_#00000040]">
                <div className="relative w-[74px] h-[74px] top-2.5 left-2.5 bg-[#2387c0] rounded-[37px]">
                  <img
                    className="absolute w-14 h-14 top-[9px] left-[9px]"
                    alt={service.alt}
                    src={service.icon}
                  />
                </div>
              </div>

              <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[normal]">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
