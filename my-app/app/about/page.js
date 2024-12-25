import React from "react";

import ExperienceCard from "./ExperienceCard";

import Image from "next/image";
import aboutHero from "../../public/images/aboutHeroImage.jpg";
import circle from "../../public/images/circleStar.svg";

import { Progress } from "../../components/ui/progress";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "../../components/ui/alert-dialog";

const page = () => {

  return (
    <main className="w-full">
      <section>
        <div className="w-full px-4 md:px-40 md:pt-24 md:relative flex flex-col">
          <Image
            className=" rounded-2xl md:h-[784px] h-[236px]"
            src={aboutHero}
            alt="About Hero Image"
            // objectFit="co
            placeholder="blur"
            loading="lazy"
          />
          <div className="w-full md:px-40 md:pt-24 pt-12 md:absolute md:top-0 md:left-0 flex flex-row justify-between">
            <div className="bg-background md:flex-1 md:flex md:flex-col rounded-br-2xl">
              <div className="text-[14px] md:text-[20px] font-semibold">
                ABOUT
              </div>
              <div className="text-[28px] md:text-[58px] font-semibold">
                YOGESH SURWADE
              </div>
            </div>
            <div className="flex-1 rounded-r-2xl"></div>
          </div>

          <div className="w-full px-40 absolute bottom-0 left-0 hidden md:flex flex-row justify-between">
            <div className="bg-background py-[18px] px-5 rounded-tr-2xl ">
              <Image src={circle} alt="..." loading="lazy" />
            </div>
            <div className="bg-background rounded-tl-2xl">
              <div className="text-wrap px-[50px] py-[61.5px] text-[18px]">
                Scroll Down To See <br /> My Journey
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-40 mt-12 md:mt-48">
        <div className="border-t border-b py-20 flex flex-col gap-10">
          <div className="text-[24px] md:text-[44px] font-semibold">
            My Biography
          </div>
          <div className="text-[14px] md:text-[20px] font-semibold">
            I am a passionate Backend Developer with a focus on creating robust
            and scalable solutions. Currently working at{" "}
            <span className="font-bold">Radiant-techverse</span>, I specialize
            in building REST APIs, architecting data flows, and designing
            efficient server-side applications using Node.js and Express.js.
            With over a year of hands-on experience in developing APIs, I have a
            deep understanding of asynchronous programming, database management,
            and optimization techniques for high-performance web applications.
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-40 mt-12 md:mt-48">
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="flex flex-col border-b pb-[20px] md:pb-[50px]">
            <div className="text-[14px] md:text-[20px] font-semibold ">
              {" "}
              SKILLS
            </div>
            <div className="text-[28px] md:text-[58px] font-semibold">
              YOGESH'S TECH SKILLS
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="text-[24px] md:text-[44px] font-semibold w-1/5">
              Frontend
            </div>
            <div className=" w-4/5 grid grid-col-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <div>React</div>
                <div>
                  <Progress value={85} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Next JS</div>
                <div>
                  <Progress value={80} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>HTML</div>
                <div>
                  <Progress value={90} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>CSS</div>
                <div>
                  <Progress value={90} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>JS</div>
                <div>
                  <Progress value={90} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="text-[24px] md:text-[44px] font-semibold w-1/5">
              Backend
            </div>
            <div className=" w-4/5 grid grid-col-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <div>Node Js</div>
                <div>
                  <Progress value={80} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Python</div>
                <div>
                  <Progress value={70} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Express Js</div>
                <div>
                  <Progress value={80} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Java</div>
                <div>
                  <Progress value={70} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="text-[24px] md:text-[44px] font-semibold w-1/5">
              Cloud
            </div>
            <div className=" w-4/5 grid grid-col-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <div>AWS</div>
                <div>
                  <Progress value={70} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Git</div>
                <div>
                  <Progress value={80} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Kubernetes</div>
                <div>
                  <Progress value={60} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Docker</div>
                <div>
                  <Progress value={70} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-40 mt-12 md:mt-48">
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="flex flex-col border-b pb-[20px] md:pb-[50px]">
            <div className="text-[14px] md:text-[20px] font-semibold ">
              {" "}
              EXPERIENCE
            </div>
            <div className="text-[28px] md:text-[58px] font-semibold">
              YOGESH'S EXPERIENCE
            </div>
          </div>
          <div className="w-full grid grid-row md:grid-cols-2 gap-8">          
            <ExperienceCard year="2024" title="Radiant Techverse"/>
            <ExperienceCard year="2023" title="Threed Verse" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
