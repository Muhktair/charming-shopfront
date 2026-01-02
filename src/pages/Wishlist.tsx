import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/product/ProductCard";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistItems } = useWishlist();

  return (
    <MainLayout>
      <div className="container py-10">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">
          My Wishlist ({wishlistItems.length} items)
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-secondary flex items-center justify-center">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="font-display text-xl font-semibold mb-3">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Save items you love by clicking the heart icon on any product.
            </p>
            <Button onClick={() => navigate("/")} className="rounded-full px-8">
              Explore Products
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlistItems.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Wishlist;
