import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { popularCategories } from "@/data/products";
import { getProductImage } from "@/lib/images";
import { Badge } from "@/components/ui/badge";
import { useSearch } from "@/context/SearchContext";
import { useNavigate } from "react-router-dom";

const PopularCategories = () => {
  const navigate = useNavigate();
  const { setSelectedCategory, setSearchQuery } = useSearch();

  const handleCategoryClick = (categoryId: string) => {
    // Map popular category IDs to product categories/searches
    const categoryMap: Record<string, { category: string; search: string }> = {
      household: { category: "home-design", search: "" },
      controllers: { category: "toys-games", search: "controller" },
      accessories: { category: "clothes", search: "bag" },
      furniture: { category: "home-design", search: "chair" },
    };

    const mapping = categoryMap[categoryId];
    if (mapping) {
      setSelectedCategory(mapping.category);
      setSearchQuery(mapping.search);
    }
    navigate("/");
  };

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-xl font-semibold">
          Explore popular categories
        </h2>
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          See all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {popularCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="group relative overflow-hidden rounded-2xl bg-category p-4 cursor-pointer shadow-card hover:shadow-hover transition-all duration-300"
          >
            {/* Badge */}
            {"discount" in category && (
              <Badge
                variant="secondary"
                className="absolute top-3 left-3 text-[10px] px-2 py-0.5 bg-secondary/80 backdrop-blur-sm"
              >
                - {category.discount}%
              </Badge>
            )}
            {"isNew" in category && (
              <Badge className="absolute top-3 left-3 text-[10px] px-2 py-0.5">
                New
              </Badge>
            )}

            {/* Image */}
            <div className="relative h-28 md:h-32 flex items-center justify-center mb-3">
              <img
                src={getProductImage(category.image)}
                alt={category.name}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Label */}
            <p className="text-center text-sm font-medium text-foreground">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
