import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { categories } from "@/data/products";
import { useSearch } from "@/context/SearchContext";
import {
  Smartphone,
  Laptop,
  Shirt,
  Palette,
  Gamepad2,
  Gem,
  Sparkles,
  Baby,
  Lamp,
  Dumbbell,
  Cat,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Laptop,
  Shirt,
  Palette,
  Gamepad2,
  Gem,
  Sparkles,
  Baby,
  Lamp,
  Dumbbell,
  Cat,
};

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory } = useSearch();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <aside className="hidden lg:flex flex-col w-52 shrink-0 py-6 pl-2">
      <h2 className="font-display font-semibold text-lg mb-4 px-4">Categories</h2>
      <nav className="flex flex-col gap-0.5">
        {categories.map((category) => {
          const Icon = iconMap[category.icon];
          const isActive = isHomePage && selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all duration-200 text-left",
                isActive
                  ? "bg-primary text-primary-foreground font-medium shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              )}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0" />}
              <span className="truncate">{category.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
