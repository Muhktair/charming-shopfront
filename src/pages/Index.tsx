import React, { useMemo } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/layout/Sidebar";
import HeroBanner from "@/components/home/HeroBanner";
import PromoCards from "@/components/home/PromoCards";
import PopularCategories from "@/components/home/PopularCategories";
import ProductGrid from "@/components/product/ProductGrid";
import { products, getProductsByCategory, searchProducts } from "@/data/products";
import { useSearch } from "@/context/SearchContext";

const Index = () => {
  const { searchQuery, selectedCategory } = useSearch();

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category first
    if (selectedCategory && selectedCategory !== "all") {
      result = getProductsByCategory(selectedCategory);
    }

    // Then filter by search query
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.category.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          (p.subcategory && p.subcategory.toLowerCase().includes(searchLower))
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  const showHero = !searchQuery && selectedCategory === "all";

  return (
    <MainLayout>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          <div className="max-w-6xl mx-auto">
            {showHero && (
              <>
                {/* Hero Section */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="md:col-span-2">
                    <HeroBanner />
                  </div>
                  <div className="hidden md:block">
                    <PromoCards />
                  </div>
                </div>

                {/* Popular Categories */}
                <PopularCategories />
              </>
            )}

            {/* Products */}
            <ProductGrid
              products={filteredProducts}
              title={
                searchQuery
                  ? `Search results for "${searchQuery}"`
                  : selectedCategory !== "all"
                  ? `Products in ${selectedCategory.replace("-", " ")}`
                  : "Featured Products"
              }
            />
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Index;
