import React, { JSX } from "react";

export const GroupByAnima = (): JSX.Element => {
  // Define statistics data for easy mapping
  const stats = [
    {
      value: "100",
      suffix: "+",
      description: "Expert Coaches",
      width: "w-[143px]",
    },
    {
      value: "30K",
      suffix: "+",
      description: "Lives Changed",
      width: "w-fit",
    },
    {
      value: "50",
      suffix: "+",
      description: "Workshops Conducted",
      width: "w-[210px]",
    },
  ];

  return (
    <section className="flex justify-center w-full py-8">
      <div className="flex items-center gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-[13px] ${stat.width}`}
          >
            <h3 className="relative self-stretch font-bold text-4xl text-center whitespace-nowrap font-['Poppins',Helvetica] tracking-[0] leading-normal">
              <span className="text-white">{stat.value}</span>
              <span className="text-[#2387c0]">{stat.suffix}</span>
            </h3>
            <p className="relative self-stretch font-['Poppins',Helvetica] font-semibold text-[#c4c4c4] text-lg text-center tracking-[0] leading-normal">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
