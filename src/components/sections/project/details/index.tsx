"use client";

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS } from "@/utils/constants";
import { AppWindow, ChevronLeft, ChevronRight, Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { PROJECT_ICONS } from "..";
import { useState } from "react";

export default function ProjectDetails() {
  const router = useRouter();

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="justify-between mt-20 mb-20 ml-10 mr-20 p-6 rounded-lg">
      <div className="flex">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center text-[#1F2A36] cursor-pointer hover:text-[#CBB6A2] hover:opacity-90 transition-opacity"
        >
          <ChevronLeft size={16} />
          <span className="uppercase tracking-[0.15em] text-sm font-medium scale-x-90 inline-block hover:text-[#CBB6A2] hover:opacity-90 transition-opacity">
            Back
          </span>
        </button>
      </div>

      <div className="mt-6">
        <h1
          className="text-subpixel-antialiased text-[clamp(50px,4vw,110px)] leading-[0.9] tracking-[-0.005em] text-[#1F2A36]"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          All Projects
        </h1>
        <p
          className="mt-3 text-subpixel-antialiased text-[clamp(6px,4vw,12px)] leading-[0.9] tracking-[-0.005em] text-[#75756D]"
          style={{ fontFamily: "Geist Mono" }}
        >
          A closer look at the full-stack platforms and mobile apps I've
          designed and shipped.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-col gap-3 justify-center align-middle">
          <p
            className="flex align-middle flex-row gap-3 text-subpixel-antialiased text-[clamp(20px,2vw,30px)] leading-[0.9] tracking-[-0.025em] text-[#1F2A36]"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            <AppWindow color="#4386D7" /> <span>Full-Stack Projects</span>
          </p>
          <p
            className="mt-3 text-subpixel-antialiased text-[clamp(6px,4vw,12px)] leading-[0.9] tracking-[-0.005em] text-[#75756D]"
            style={{ fontFamily: "Geist Mono" }}
          >
            Web platforms spanning enterprise tooling, real-time services, and
            AI-assisted products.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-x-3 gap-y-4 border-none">
          {PROJECTS.map((pro) => {
            const Icon = PROJECT_ICONS[pro.icon];
            return (
              <Card className="h-55 w-full p-4 border border-[#4386D7] rounded-lg bg-transparent transition-all duration-200 hover:scale-[1.02]">
                <CardHeader className="h-full">
                  <CardTitle className="flex flex-row items-center gap-2 mb-3">
                    <div
                      className="flex h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#4386D7" }}
                    ></div>
                    <span style={{ color: pro.text }}>{pro.title}</span>
                  </CardTitle>
                  <CardDescription className="flex flex-col">
                    <div className="flex justify-center items-center">
                      <Icon
                        style={{ color: "#4386D7" }}
                        className="mb-3 h-8 w-8"
                      />
                    </div>
                    <span className="line-clamp-3 text-justify">
                      {pro.description}
                    </span>
                  </CardDescription>
                  <CardAction>
                    <ChevronRight style={{ color: pro.text }} />
                  </CardAction>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
