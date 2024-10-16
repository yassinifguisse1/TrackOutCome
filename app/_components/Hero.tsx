import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  const firstLine = t("firstLine");
  const secondLine = t("secondLine");
  const btncontent = t("button");
 
  return (
    <div className="relative flex items-center justify-center  h-screen ">
      <div className="relative z-10 text-center dark:text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <TextGenerateEffect duration={2} filter={false} words={firstLine} />
          <TextGenerateEffect
            duration={2}
            filter={false}
            words={secondLine}
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
          />
         
        </h1>
         <Button className="mt-8 md:p-6 md:text-xl">{btncontent}</Button>
      </div>
   </div>
  )
};

export default Hero;
