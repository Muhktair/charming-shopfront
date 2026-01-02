import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/context/SearchContext";
import { getProductImage } from "@/lib/images";

const PromoCards = () => {
  const navigate = useNavigate();
  const { setSearchQuery, setSelectedCategory } = useSearch();

  const handleHeadphonesClick = () => {
    setSearchQuery("headphones");
    setSelectedCategory("electronics");
    navigate("/");
  };

  const handleCameraClick = () => {
    setSearchQuery("instax");
    setSelectedCategory("electronics");
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Headphones Promo */}
      <div
        onClick={handleHeadphonesClick}
        className="relative overflow-hidden rounded-2xl gradient-promo p-5 cursor-pointer shadow-card hover:shadow-hover transition-all duration-300 group"
      >
        <div className="relative z-10">
          <p className="text-sm text-muted-foreground mb-1">Get up to</p>
          <p className="font-display text-2xl font-bold text-foreground">
            20<span className="text-primary">%</span>
          </p>
          <p className="font-display text-xl font-bold text-foreground mb-1">
            OFF Headphones
          </p>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-20 h-20 opacity-60 group-hover:opacity-80 transition-opacity">
          <img
            src={getProductImage("headphones-hero")}
            alt="Headphones"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Camera Promo */}
      <div
        onClick={handleCameraClick}
        className="relative overflow-hidden rounded-2xl gradient-mint p-5 cursor-pointer shadow-card hover:shadow-hover transition-all duration-300 group"
      >
        <div className="relative z-10">
          <p className="font-display text-lg font-semibold text-foreground mb-2">
            Fujifilm Instax 11
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full text-xs px-4 bg-badge text-card hover:bg-badge/90"
          >
            Shop now
          </Button>
        </div>
        <div className="absolute right-0 bottom-0 w-24 h-24 opacity-80 group-hover:opacity-100 transition-opacity">
          <img
            src={getProductImage("instax-camera")}
            alt="Fujifilm Instax"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
