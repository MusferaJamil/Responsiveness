"use client"; // This tells Next.js that this component is a Client Component

import Image from "next/image";

function ProductCard() {
  const handleClick = (product: string) => {
    console.log(`${product} button clicked!`); // Debugging line
    alert(`${product} added to cart!`);
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Dove Shampoo */}
      <div>
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/dove.png"
            alt="Dove Shampoo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <p className="text-center pt-4 font-semibold">Dove Shampoo</p>
        <p className="text-center pt-2">Price: Rs. 1,000</p>
        <div className="flex justify-center my-4">
          <button
            className="px-10 py-4 bg-blue-600 text-white rounded-md"
            onClick={() => handleClick("Dove Shampoo")}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Palmolive Shampoo */}
      <div>
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/palmolive.png"
            alt="Palmolive Shampoo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <p className="text-center pt-4 font-semibold">Palmolive Shampoo</p>
        <p className="text-center pt-2">Price: Rs. 1,000</p>
        <div className="flex justify-center my-4">
          <button
            className="px-10 py-4 bg-blue-600 text-white rounded-md"
            onClick={() => handleClick("Palmolive Shampoo")}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Garnier Shampoo */}
      <div>
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/garnier.png"
            alt="Garnier Shampoo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <p className="text-center pt-4 font-semibold">Garnier Shampoo</p>
        <p className="text-center pt-2">Price: Rs. 1,000</p>
        <div className="flex justify-center my-4">
          <button
            className="px-10 py-4 bg-blue-600 text-white rounded-md"
            onClick={() => handleClick("Garnier Shampoo")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
