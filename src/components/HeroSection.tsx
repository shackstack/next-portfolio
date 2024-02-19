"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.addEventListener("mousemove", (e: MouseEvent) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const rotateY = (-1 / 10) * x + 20;
      const rotateX = (1 / 10) * y - 20;

      childRef.current?.setAttribute(
        "style",
        `
        background-position : ${x / 5 + y + 5}%
      `,
      );

      ref.current?.setAttribute(
        "style",
        `transform : perspective(1500px)
      rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      );
    });

    ref.current?.addEventListener("mouseout", () => {
      ref.current?.setAttribute(
        "style",
        `transform : perspective(1500px)
      rotateX(0deg) rotateY(0deg)`,
      );
    });
  }, [ref]);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl font-extrabold dark:text-white sm:text-5xl lg:text-8xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Jeremy", 1000, "FE Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base dark:text-[#ADB7BE] sm:text-lg lg:text-xl">
            문제를 다양한 시각에서 분석하고 해결하는 것을 좋아하는 개발자
            김민석입니다.
          </p>
          <div>
            <Link
              href="https://github.com/shackstack"
              className="mr-3 mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-800 sm:w-fit"
            >
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                My Github
              </span>
            </Link>
            <div className="mr-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit">
              +82 10-5258-1305
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div
            ref={ref}
            className="relative h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]"
          >
            <Image
              src="/images/memoji.png"
              alt="hero image"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              width={250}
              height={250}
            />
            <div
              ref={childRef}
              className="brightness-120 absolute h-full w-full rounded-full bg-gradient-linear bg-[size:150%_150%] bg-[position:100%] opacity-70"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
