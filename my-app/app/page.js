"use client";
import Link from "next/link";

import Image from "next/image";
import heroCenterImg from "../public/images/heroCenterImageOne.jpg";
import heroLeftImgOne from "../public/images/heroLeftImageOne.jpg";
import heroLeftImgTwo from "../public/images/heroLeftImageTwo.jpg";
import heroRightImgOne from "../public/images/heroRightImageOne.jpg";
import heroRightImgTwo from "../public/images/heroRightImageTwo.jpg";
import aboutImage from "../public/images/aboutImage.jpg";

import business from "../public/images/business.jpg";
import astro from "../public/images/astronomy.jpg";
import sci from "../public/images/sci-and-tech.jpg";
import health from "../public/images/health.jpg";
import travel from "../public/images/travel.jpg";
import politics from "../public/images/politics.jpg";
import starimg from "../public/images/Star.png";

import {
  ArrowTopRightIcon,
  ArrowRightIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

import { Progress } from "../components/ui/progress"
import { Button } from "../components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";


export default function Home() {
  return (
    <main className="w-full">
      <section>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-5 md:flex-row md:justify-between px-4 md:px-40 py-10 md:py-20 ">
            <div className="w-fit flex flex-col gap-2">
              <div className="text-lg font-medium">FULL-STACK DEVELOPER</div>
              <div className="text-3xl md:text-6xl font-semibold">
                YOGESH SURWADE
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-5">
                <div className="text-3xl md:text-5xl font-semibold">LET&apos;S </div>
                <Button size="capsule">
                  <ArrowTopRightIcon className="" />
                </Button>
              </div>
              <div className="text-3xl md:text-5xl font-semibold">
                WORK TOGETHER
              </div>
            </div>
          </div>

          <div className="bg-primary">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="flex justify-evenly">
                <CarouselItem className="text-secondary text-center sm:basis-1/2 md:basis-1/4 p-5">
                  FRONTEND DEVELOPER
                </CarouselItem>
                <CarouselItem className="text-secondary text-center sm:basis-1/2 md:basis-1/4 p-5">
                  BACKEND DEVELOPER
                </CarouselItem>
                <CarouselItem className="text-secondary text-center sm:basis-1/2 md:basis-1/4 p-5">
                  MERN FULLSTACK
                </CarouselItem>
                <CarouselItem className="text-secondary text-center sm:basis-1/2 md:basis-1/4 p-5">
                  DJANGO FULLSTACK
                </CarouselItem>
                <CarouselItem className="text-secondary text-center sm:basis-1/2 md:basis-1/4 p-5">
                  DATABASE MANAGEMENT
                </CarouselItem>
                <CarouselItem className="text-secondary text-center sm:basis-1/2 md:basis-1/4 p-5">
                  KUBERNETES
                </CarouselItem>
                <CarouselItem className="text-secondary text-center sm:basis-1/2 md:basis-1/4 p-5">
                  AWS
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>



          <div className="w-full px-4 mt-3 md:px-40">
            <div className="columns-3 gap-2 relative">
              <div className="w-[35%] h-[80%] absolute bottom-0 left-[16.4%] border-8 border-background z-20 rounded-xl">
                <div className="w-[100%] h-[100%] relative rounded-xl">
                  <Image
                    className="rounded-xl"
                    src={heroRightImgTwo}
                    alt="Header Center Image"
                    objectFit="fill"
                    fill
                    placeholder="blur"
                    loading="lazy"
                  />
                  <div className="bg-transparent-300 w-1/2 h-1/2 absolute right-0 bottom-0 border-t-8 border-l-8 border-background"></div>
                </div>
              </div>

              <div className="w-full h-40 md:h-80 flex flex-col gap-2">
                <div className="w-full relative h-40 rounded-xl flex flex-col flex-1">
                  <Image
                    className="rounded-xl"
                    src={heroLeftImgOne}
                    alt="Header Center Image"
                    objectFit="cover"
                    fill
                    placeholder="blur"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative h-28 rounded-xl">
                  <Image
                    className="rounded-xl"
                    src={heroLeftImgTwo}
                    alt="Header Center Image"
                    objectFit="fill"
                    fill
                    placeholder="blur"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="relative w-full h-40 md:h-80 rounded-xl my-3 md:my-0">
                <Image
                  className="rounded-xl"
                  src={heroCenterImg}
                  alt="Header Center Image"
                  objectFit="fill"
                  fill
                  placeholder="blur"
                  loading="lazy"
                />
              </div>

              <div className="w-full h-40 md:h-80 flex flex-col gap-2">
                <div className="w-full relative h-40 rounded-xl">
                  <Image
                    className="rounded-xl"
                    src={heroRightImgOne}
                    alt="Header Center Image"
                    objectFit="fill"
                    fill
                    placeholder="blur"
                    loading="lazy"
                  />
                </div>
                <div className="w-full relative h-40 rounded-xl">
                  <Image
                    className="rounded-xl"
                    src={heroRightImgTwo}
                    alt="Header Center Image"
                    objectFit="fill"
                    fill
                    placeholder="blur"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-40 mt-12 md:mt-48">
        <div className="pb-[50px] w-full flex flex-col gap-5 md:flex-row justify-start md:justify-between items-start md:items-center border-b">
          <div className="w-fit flex flex-col">
            <div className="text-xl font-medium">ABOUT</div>
            <div className="text-2xl md:text-4xl font-semibold">
              I AM YOGESH
            </div>
          </div>
          <div className=" mb-2 md:mb-0">
            <Button size="icon" className="w-40">
              Know More
              <ArrowRightIcon className="sm mx-2" />
            </Button>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 md:gap-7 md:flex-row">
          <div className="w-full md:w-1/2 h-80 md:h-auto relative ">
            <Image
              className="rounded-xl"
              src={aboutImage}
              alt="About Image"
              objectFit="cover"
              fill
              placeholder="blur"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 py-10">
            <div className="p-6 md:p-10 rounded-t-xl border items-center">
              <div className="flex gap-2">
                <Image src={starimg} alt="star" width={25} height={25} />
                <div className="text-xl font-medium">Introduction</div>
              </div>
              <div className="text-base font-light mt-5">
                I am a passionate Backend Developer with a focus on creating
                robust and scalable solutions. Currently working at{" "}
                <span className="font-bold">Radiant-techverse</span>, I
                specialize in building REST APIs, architecting data flows, and
                designing efficient server-side applications using Node.js and
                Express.js. With over a year of hands-on experience in
                developing APIs, I have a deep understanding of asynchronous
                programming, database management, and optimization techniques
                for high-performance web applications.
              </div>
            </div>

            <div className="p-6 md:p-10 rounded-b-xl border flex flex-col gap-10">
              <div className="flex gap-2">
                <Image src={starimg} alt="star" width={25} height={25} />
                <div className="text-xl">Contact Information</div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-start gap-5 md:gap-20">
                <div className="flex flex-col gap-2">
                  <span>Email</span>
                  <span>yogeshsurwade49@gmail.com</span>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <span>Phone Number</span>
                    <span>+91 9545 006 102</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 md:gap-[50px] items-start md:items-center">
                <div className="rounded-3xl border p-3 gap-2 flex w-1/2 md:w-auto flex-start">
                  <Button size="circle">
                    <InstagramLogoIcon />
                  </Button>
                  <Button size="circle">
                    <LinkedInLogoIcon />
                  </Button>
                  <Button size="circle">
                    <GitHubLogoIcon />
                  </Button>
                </div>
                <div className="w-full flex flex-col flex-start md:flex-row gap-5">
                  <div>
                    <Button size="lg" className="w-full">
                      Lets's Work
                    </Button>
                  </div>
                  <div>
                    <Button size="lg" className="w-full" variant="outline">
                      Download CV
                    </Button>
                  </div>
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
              MY SKILLS
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

      <section className="relative w-full px-4 md:px-40 mt-12 md:mt-48">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <div>
            <div className=" w-full flex flex-col gap-5 md:flex-row justify-start md:justify-between items-start md:items-center border-b pb-[50px]">
              <div className="w-fit flex flex-col">
                <div className="text-xl font-medium">BLOGS</div>
                <div className="text-2xl md:text-4xl font-semibold">
                  My Blogs
                </div>
              </div>
              <div className=" mb-2 md:mb-0">
                <Button size="icon" className="w-40">
                  Explore <ArrowRightIcon className="mx-2 sm" />
                </Button>
              </div>
            </div>

            <div className="my-20">
              <CarouselContent>
                <CarouselItem className="md:basis-1/3">
                  <Card className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-secondary transition-shadow">
                    <div className="relative w-[358px] h-[335px] md:w-[519px] md:h-[400px]">
                      <Image
                      alt="blog img"
                        className="rounded-xl group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                        src={business}
                        objectFit="cover"
                        fill
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <CardContent className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[80%] group-hover:translate-y-0 transition-all duration-500">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        Business
                      </h1>
                      <Link href={"blogs"}>
                      <Button size="lg">See More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="md:basis-1/3">
                  <Card className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-secondary transition-shadow">
                    <div className="relative w-[358px] h-[335px] md:w-[519px] md:h-[400px]">
                      <Image
                      alt="blog img"
                        className="rounded-xl group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                        src={astro}
                        objectFit="cover"
                        fill
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <CardContent className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[80%] group-hover:translate-y-0 transition-all duration-500">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        Astronomy
                      </h1>
                      <Link href={"blogs"}>
                      <Button size="lg">See More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="md:basis-1/3">
                  <Card className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-secondary transition-shadow">
                    <div className="relative w-[358px] h-[335px] md:w-[519px] md:h-[400px]">
                      <Image
                      alt="blog img"
                        className="rounded-xl group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                        src={sci}
                        objectFit="cover"
                        fill
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <CardContent className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[80%] group-hover:translate-y-0 transition-all duration-500">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        Science & Technology
                      </h1>
                      <Link href={"blogs"}>
                      <Button size="lg">See More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="md:basis-1/3">
                  <Card className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-secondary transition-shadow">
                    <div className="relative w-[358px] h-[335px] md:w-[519px] md:h-[400px]">
                      <Image
                      alt="blog img"
                        className="rounded-xl group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                        src={health}
                        objectFit="cover"
                        fill
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <CardContent className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[80%] group-hover:translate-y-0 transition-all duration-500">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        Health
                      </h1>
                      <Link href={"blogs"}>
                      <Button size="lg">See More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="md:basis-1/3">
                  <Card className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-secondary transition-shadow">
                    <div className="relative w-[358px] h-[335px] md:w-[519px] md:h-[400px]">
                      <Image
                      alt="blog img"
                        className="rounded-xl group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                        src={travel}
                        objectFit="cover"
                        fill
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <CardContent className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[80%] group-hover:translate-y-0 transition-all duration-500">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        Travel
                      </h1>
                      <Link href={"blogs"}>
                      <Button size="lg">See More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="md:basis-1/3">
                  <Card className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-secondary transition-shadow">
                    <div className="relative w-[358px] h-[335px] md:w-[519px] md:h-[400px]">
                      <Image
                      alt="blog img"
                        className="rounded-xl group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                        src={politics}
                        objectFit="cover"
                        fill
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <CardContent className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[80%] group-hover:translate-y-0 transition-all duration-500">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        Politics
                      </h1>
                      <Link href={"blogs"}>
                      <Button size="lg">See More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              {/* <div className="absolute top-6 right-56 p-2 rounded-full hidden md:flex justify-between gap-1">
              <CarouselPrevious />
              <CarouselNext  />
              </div> */}
            </div>
          </div>
        </Carousel>
      </section>
    </main>
  );
}
