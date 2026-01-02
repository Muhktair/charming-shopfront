import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/layout/Sidebar";
import ProductGrid from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/button";
import { getProductsByCategory, categories } from "@/data/products";

const Category = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === name);
  const products = name ? getProductsByCategory(name) : [];

  return (
    <MainLayout>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-4 -ml-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <h1 className="font-display text-2xl md:text-3xl font-bold mb-6">
              {category?.name || "Category"}
            </h1>

            <ProductGrid
              products={products}
              title={`${products.length} products`}
            />
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Category;
