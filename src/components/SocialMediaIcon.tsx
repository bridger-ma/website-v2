"use client";

import type React from "react";
import Icon from "@/components/Icon";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialMediaIconProps {
	name: string;
	icon: string;
	url: string;
	index: number;
}

export default function SocialMediaIcon({
  name,
  icon,
  url,
}: SocialMediaIconProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 p-0.5 cursor-pointer transition-transform hover:scale-110"
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <Icon name={icon} className="text-white text-lg" />
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="center"
          className="bg-gray-900 text-white border-gray-800 px-3 py-1.5"
          sideOffset={5}
        >
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
