import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/context/SearchContext";
import { getProductImage } from "@/lib/images";

const HeroBanner = () => {
  const navigate = useNavigate();
  const { setSelectedCategory, setSearchQuery } = useSearch();

  const handleHeadphonesClick = () => {
    setSearchQuery("headphones");
    setSelectedCategory("electronics");
    navigate("/");
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-hero to-promo-pink p-6 md:p-8 shadow-soft">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            BIG SALE!
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-xs">
            Wireless headphones with noise canceling
          </p>
          <Button
            onClick={handleHeadphonesClick}
            size="lg"
            className="rounded-full px-8 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Headphones
          </Button>
        </div>

        {/* Image */}
        <div className="relative flex-shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-72">
            <img
              src={getProductImage("headphones-hero")}
              alt="Premium Wireless Headphones"
              className="w-full h-full object-contain animate-float"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-promo-pink rounded-full blur-2xl" />
    </div>
  );
};

export default HeroBanner;
