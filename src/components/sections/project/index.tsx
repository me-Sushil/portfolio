"use client";

import { PROJECTS } from "@/utils/constants";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Bell, Bot, Building2, ChevronRight, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const PROJECT_ICONS: Record<string, LucideIcon> = {
  Building2,
  Bell,
  Globe,
  Bot,
};

export default function ProjectCard() {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push("/project/details");
  };
  return (
    <div className="w-full bg-[#E7DCCF] p-8 rounded-xl mb-10">
      <div className="flex justify-between">
        <h1
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: "28px",
            letterSpacing: "0.12em",
            color: "#1F2A36",
            fontWeight: "bold",
          }}
          className="mb-10"
        >
          Selected Work
        </h1>

        <p onClick={handleDetailsClick} className="cursor-pointer">
          <ChevronRight />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-3 gap-y-4 border-none">
        {PROJECTS.map((pro) => {
          const Icon = PROJECT_ICONS[pro.icon];

          return (
            <div key={pro.id} className="justify-center">
              <Card
                style={{ backgroundColor: pro.color }}
                className="h-55 w-full p-4 border-none rounded-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <CardHeader className="h-full">
                  <CardTitle className="flex flex-row items-center gap-2 mb-3">
                    <div
                      className="flex h-2 w-2 rounded-full"
                      style={{ backgroundColor: pro.text }}
                    ></div>
                    <span style={{ color: pro.text }}>{pro.title}</span>
                  </CardTitle>
                  <CardDescription className="flex flex-col">
                    <div className="flex justify-center items-center">
                      <Icon
                        style={{ color: pro.text }}
                        className="mb-3 h-8 w-8"
                      />
                    </div>
                    <span className="line-clamp-5 text-justify">
                      {pro.description}
                    </span>
                  </CardDescription>
                  <CardAction>
                    <ChevronRight style={{ color: pro.text }} />
                  </CardAction>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
