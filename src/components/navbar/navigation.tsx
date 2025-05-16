"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import LeadingNavigation from "./leading-navigation";
import MenuNavigation from "./menu-navigation";
import ActionNavigation from "./action-navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRightFromSquare,
  LucideSidebarClose,
  LucideSidebarOpen,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { MenuConstants } from "@/constants/menu-constants";
import ThemeChanger from "./theme-changer";

const Navigation: NextPage = ({}) => {
  const [hideAd, setHideAd] = useState(false);
  const [closeAd, setCloseAd] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 50) {
        setHideAd(true);
      } else {
        setHideAd(false);
      }

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="duration-300 transition-transform">
      <div
        className={`w-full flex flex-col items-center justify-center z-50 duration-300 backdrop-blur-md border-b border-primary-500/10 border-opacity-20 ${
          hideNavbar ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ position: "fixed" }}
      >
        <div
          className={`bg-gradient-to-r from-primary-500/20 z-20 via-primary-500 to-primary-500/20 w-full flex items-center justify-center transition-transform duration-300 ${
            hideAd || closeAd ? "-translate-y-5" : "translate-y-0"
          }`}
          style={{ height: hideAd || closeAd ? 0 : 28 }}
        >
             <p className="text-xs font-medium text-white cursor-pointer hover:underline duration-500">
            My Portfolio
            </p>
         
          <X
            className="absolute left-0 ml-4 cursor-pointer dark:invert"
            width={14}
            onClick={() => setCloseAd(true)}
          />
        </div>
        <nav
          className={`px-3 flex w-full duration-300 transition-transform justify-between top-0 z-50 py-4 container mx-3`}
        >
          <div className="flex gap-5 px-0">
            <LeadingNavigation />
            <div className="hidden md:block">
              <MenuNavigation />
            </div>
          </div>
          <div className="hidden md:block">
            <ActionNavigation />
          </div>
          <div className="flex items-center justify-center md:hidden">
            <Button
              variant={"ghost"}
              className="hover:text-primary-500 duration-500 z-30 flex items-center justify-center px-0"
            >
              <ThemeChanger />
            </Button>
            <Button
              variant={"ghost"}
              onClick={handleShowMobileMenu}
              className="hover:text-primary-500 duration-500 block md:hidden z-30"
            >
              {showMobileMenu ? (
                <LucideSidebarClose className="dark:text-white" />
              ) : (
                <LucideSidebarOpen className="dark:text-white" />
              )}
            </Button>
          </div>
        </nav>
      </div>
      <div>
        <div
          className="p-5 w-[300px] fixed left-0 z-[99] bg-white dark:bg-black top-0 h-screen duration-500 py-6"
          style={{ left: showMobileMenu ? 0 : -300 }}
        >
          <div className="mb-5">
            <LeadingNavigation />
          </div>
          {MenuConstants.map((menu, index) => {
            return (
              <Link
                href={menu.href}
                passHref
                key={index}
                onClick={handleShowMobileMenu}
              >
                <p className="hover:underline text-sm my-2 hover:text-primary-500 text-muted-foreground">
                  {menu.title}
                </p>
              </Link>
            );
          })}
          <div className="bottom-5 z-50 absolute w-[260px] mt-5 hover:shadow-xl hover:shadow-primary-500/75 rounded-xl duration-500">
            <Button className="rounded-xl w-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400">
              <Link
                href={"/"}
                target="_blank"
              >
                <p className="font-bold text-opacity-90 text-white">
                  Connect Linkedin
                </p>
              </Link>
              <ArrowUpRightFromSquare className="dark:text-white" />
            </Button>
          </div>
        </div>
        <div
          style={{ display: showMobileMenu ? "block" : "none" }}
          className="w-full overflow-hidden fixed backdrop-blur-sm z-[98] h-screen top-0"
          onClick={handleShowMobileMenu}
        />
      </div>
    </div>
  );
};

export default Navigation;
