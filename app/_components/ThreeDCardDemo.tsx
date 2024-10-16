"use client";

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

interface CardProps {
  items: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }[];
}
export function ThreeDCardDemo({ items }: CardProps) {
  return (
    <>
      {items.map((item, idx) => (
        <CardContainer className="inter-var w-full" key={idx}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
              translateZ="50"
              className="font-mono text-center flex items-center justify-center mx-auto"
            >
                {item.icon}
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-mono font-bold text-neutral-600 dark:text-white"
            >
                {item.title}{" "}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="font-mono text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {item.description}
            </CardItem>
            {/* <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/warsaw.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem> */}
          </CardBody>
        </CardContainer>
      ))}
    </>
  );
}
