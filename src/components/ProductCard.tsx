import React from "react";

import type { Product } from "../types"

import { Card, CardContent } from "./ui/card"

interface ProductProps {
    product: Product
}

const ProductCard: React.FC<ProductProps> = ({product}) => {
    const {images,price,title, category} = product;

    //   const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <Card className="rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">

    <div className="relative w-full h-80 bg-gray-100">
        {images && images.length > 0 ? (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            No Image
          </div>
        )}
        </div>


        <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 capitalize">{category}</p>
        <p className="mt-2 text-xl font-bold text-pink-600">
          ${price.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  )
}

export default ProductCard
