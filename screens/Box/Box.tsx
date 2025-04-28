import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";

export const Box = () => {
  // Navigation menu items
  const navItems = [
    { label: "Home", active: true },
    { label: "Coaching", active: false },
    { label: "Events & Retreat", active: false },
    { label: "About Us", active: false },
    { label: "Courses", active: false },
    { label: "Blogs", active: false },
    { label: "Media & Press", active: false },
    { label: "Contact Us", active: false },
  ];

  // Partner logos
  const partnerLogos = [
    {
      src: "/logo-admf-background-putih-1.png",
      alt: "Logo ADMF background",
      width: "163px",
      height: "45px",
    },
    {
      src: "/logo--1626691788-1.png",
      alt: "Logo",
      width: "143px",
      height: "79px",
    },
    {
      src: "/1280px-holcim-logo-1.png",
      alt: "Element holcim logo",
      width: "126px",
      height: "54px",
    },
    { src: "/logo-mnc-1.png", alt: "Logo mnc", width: "146px", height: "67px" },
    {
      src: "/logo-telkomsel-terbaru-1.png",
      alt: "Logo telkomsel",
      width: "219px",
      height: "120px",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="w-full">
        <header className="w-full relative">
          <div className="w-full h-[976px] [background:linear-gradient(224deg,rgba(71,71,71,1)_0%,rgba(34,34,34,1)_42%)]">
            {/* Logo and Navigation */}
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between pt-[105px]">
                <img
                  className="w-[200px] h-[61px] object-cover"
                  alt="Color logo ezgif com"
                  src="/color-logo-ezgif-com-webp-to-png-converter-2.png"
                />

                <NavigationMenu className="max-w-none">
                  <NavigationMenuList className="flex gap-8">
                    {navItems.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          className={`[font-family:'Poppins',Helvetica] text-lg text-center tracking-[0] leading-[normal] ${
                            item.active
                              ? "font-bold text-white"
                              : "font-medium text-[#c4c4c4]"
                          }`}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Hero Content */}
              <div className="flex mt-16">
                <div className="w-1/2">
                  <h1 className="[font-family:'Poppins',Helvetica] font-medium text-white text-[64px] tracking-[0] leading-[normal]">
                    Discover Your Inner
                    <br />
                    Strength and Create
                    <br />A Life You Love
                  </h1>

                  <p className="mt-8 [font-family:'Poppins',Helvetica] font-medium text-[#c4c4c4] text-lg tracking-[0] leading-[normal]">
                    Life coaches will guide you through a transformational
                    journey of
                    <br />
                    self-discovery, helping you identify your unique gifts and
                    talents
                  </p>

                  <Button className="mt-16 px-10 py-5 rounded-lg shadow-w [background:linear-gradient(127deg,rgba(96,187,238,1)_0%,rgba(10,114,173,1)_100%)] [font-family:'Poppins',Helvetica] font-semibold text-white text-base">
                    Get Started
                  </Button>
                </div>

                <div className="w-1/2 flex justify-end">
                  <img
                    className="w-[620px] h-[620px] object-cover"
                    alt="Element"
                    src="/1579099747235-removebg-preview-1.png"
                  />
                </div>
              </div>
            </div>

            {/* Section components */}
            <GroupByAnima />
            <FrameByAnima />
          </div>
        </header>

        {/* Partners Section */}
        <section className="w-full flex justify-center mt-10 mb-16">
          <div className="flex items-center gap-8">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className="object-cover"
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        <div className="relative w-full">
          <GroupWrapperByAnima />
          <FrameWrapperByAnima />
          <DivWrapperByAnima />
        </div>
      </div>
    </div>
  );
};
