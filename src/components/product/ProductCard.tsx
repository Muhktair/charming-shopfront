import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/data/products";
import { getProductImage } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group relative bg-card rounded-2xl p-4 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {product.discount && (
            <Badge
              variant="destructive"
              className="text-[10px] px-2 py-0.5"
            >
              -{product.discount}%
            </Badge>
          )}
          {product.isNew && (
            <Badge className="text-[10px] px-2 py-0.5">New</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleWishlistClick}
          className={cn(
            "absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm shadow-sm",
            inWishlist && "text-destructive"
          )}
        >
          <Heart
            className={cn("h-4 w-4", inWishlist && "fill-current")}
          />
        </Button>

        {/* Image */}
        <div className="relative h-36 flex items-center justify-center mb-3 overflow-hidden rounded-xl bg-secondary/30">
          <img
            src={getProductImage(product.image)}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-lg">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <Button
              variant="secondary"
              size="icon"
              onClick={handleAddToCart}
              className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
