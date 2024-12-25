import React from "react";
import { Button } from "../ui/button";

import { 
    ArrowTopRightIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    GitHubLogoIcon,
 } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full px-4 md:px-40 mt-48 border border-l border-r md:border-t md:border-b flex flex-col md:flex-row">
        <div className="flex flex-col px-20 py-24 gap-5 md:gap-14 border border-l border-r">
          <div>A more meaningful home for photography</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <div className="text-3xl md:text-5xl font-semibold">LET'S </div>
              <Button size="capsule">
                <ArrowTopRightIcon className="sm" />
              </Button>
            </div>
            <div className="text-3xl md:text-5xl font-semibold">
              WORK TOGETHER
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-10 px-20 py-24 border border-l border-r">
          <div className="">
            <h1 className="text-md">HOME</h1>
            <ul>
              <li className="my-2 text-sm">About Me</li>
              <li className="my-2 text-sm">My Blogs</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-md">ABOUT</h1>
            <ul>
              <li className="my-2 text-sm">About Me</li>
              <li className="my-2 text-sm">My Skills</li>
              <li className="my-2 text-sm">My Experience</li>
              <li className="my-2 text-sm">My Projects</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-md">BLOGS</h1>
            <ul>
              <li className="my-2 text-sm">Business</li>
              <li className="my-2 text-sm">Astronomy</li>
              <li className="my-2 text-sm">Science & Technology</li>
              <li className="my-2 text-sm">Health</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-40 py-5 border border-l border-r md:border-t md:border-b flex flex-col md:flex-row items-center">
        <div className="basis-1 grow">Terms & Conditions | Privacy Policy</div>
        <div className="basis-1 grow">
          <div className="rounded-full border p-3 gap-3 flex w-fit flex-start">
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
        </div>
        <div className="basis-1 grow">&#169; 2024 Yogesh Surwade. All rights reserved.</div>
      </div>
    </>
  );
};

export default Footer;
