// Image imports for the e-commerce store
import headphonesHero from "@/assets/headphones-hero.png";
import instaxCamera from "@/assets/instax-camera.png";
import kettle from "@/assets/kettle.png";
import gameController from "@/assets/game-controller.png";
import toteBag from "@/assets/tote-bag.png";
import chair from "@/assets/chair.png";
import earbuds from "@/assets/earbuds.png";
import laptop from "@/assets/laptop.png";
import smartwatch from "@/assets/smartwatch.png";
import deskLamp from "@/assets/desk-lamp.png";
import serum from "@/assets/serum.png";
import teddyBear from "@/assets/teddy-bear.png";

export const productImages: Record<string, string> = {
  "headphones-hero": headphonesHero,
  "instax-camera": instaxCamera,
  kettle: kettle,
  "game-controller": gameController,
  "tote-bag": toteBag,
  chair: chair,
  earbuds: earbuds,
  laptop: laptop,
  smartwatch: smartwatch,
  "desk-lamp": deskLamp,
  serum: serum,
  "teddy-bear": teddyBear,
};

export const getProductImage = (imageName: string): string => {
  return productImages[imageName] || "";
};
