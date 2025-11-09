"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Some of my <span className="text-purple">selected projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10 max-w-7xl mx-auto">
        {projects.map((item) => {
          const cover = `/projects-screenshots/${item.id}/featured.png`;

          return (
            <div className="h-full mt-[70px] mb-[150px]" key={item.id}>
              {/* Whole card clickable */}
              <Link href={item.link} className="block">
                <PinContainer title="" href={item.link}>
                  {/* Cover */}
                  <div className="relative flex items-center justify-center w-full overflow-hidden rounded-2xl mb-6 aspect-video bg-[#13162D]">
                    <Image
                      src="/bg.png"
                      alt="Background"
                      fill
                      className="object-cover"
                    />
                    <Image
                      src={cover}
                      alt={item.title}
                      fill
                      className="z-10 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  {/* Description */}
                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2 mb-4 text-[#BEC1DD]"
                  >
                    {item.des}
                  </p>

                  {/* Tech icons + CTA */}
                  <div className="flex flex-col gap-4 mt-7 mb-3">
  {/* Icons */}
  <div className="flex items-center flex-wrap gap-2">
    {item.iconLists?.map((icon: string, index: number) => (
      <div
        key={index}
        className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
      >
        <Image
          src={icon || "/placeholder.svg"}
          alt="Tech icon"
          width={47}
          height={47}
          className="p-2 object-contain"
        />
      </div>
    ))}
  </div>

  {/* CTA right-aligned */}
  <div className="flex items-center justify-end">
    <div className="flex justify-center items-center group">
      <p className="flex lg:text-xl md:text-xs text-sm text-purple group-hover:text-purple/80 transition-colors">
        See Full Case &amp; Demo
      </p>
      <FaLocationArrow
        className="ms-3 group-hover:translate-x-1 transition-transform"
        color="#CBACF9"
      />
    </div>
  </div>
</div>

                </PinContainer>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
