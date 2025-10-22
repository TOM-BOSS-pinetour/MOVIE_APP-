"use client";
import React from "react";
import { HeroSection } from "./_features/home/HeroSection";
import { PopularMovieList } from "./_features/home/PopularMovieList";
import { TopRatedMovieList } from "./_features/home/TopRatedMovieList";
import { UpcomingMovieList } from "./_features/home/UpcomingMovieList";
import { Footer } from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center box-border">
      <Header />
      <HeroSection
        title={"Wicked"}
        rating={"6.9"}
        description={
          "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz, After an encounter with the Wonderful Wizard of Oz, their friend ship reacher a crossroads"
        }
      />
      <UpcomingMovieList />
      <PopularMovieList />
      <TopRatedMovieList />
      <Footer />
    </div>
  );
}
