"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ClothingItem {
  id: string;
  name: string;
  type: string;
  image_url: string;
  price: number;
}

interface PackingListProps {
  items: ClothingItem[];
  travelers: number;
  destination: string;
  startDate: string;
  endDate: string;
  minTemp: number;
  maxTemp: number;
}

export default function PackingList({
  items,
  travelers,
  destination,
  startDate,
  endDate,
  minTemp,
  maxTemp,
}: PackingListProps) {
  const [cart, setCart] = useState<ClothingItem[]>([]);

  const addToCart = (item: ClothingItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, ClothingItem[]>);

  return (
    <div className="space-y-6">
      <div className="bg-blue-100 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">Trip Details</h2>
        <p>Destination: {destination}</p>
        <p>
          Dates: {new Date(startDate).toLocaleDateString()} -{" "}
          {new Date(endDate).toLocaleDateString()}
        </p>
        <p>
          Temperature Range: {minTemp.toFixed(1)}°C - {maxTemp.toFixed(1)}°C
        </p>
        <p>Number of Travelers: {travelers}</p>
      </div>

      {Object.entries(groupedItems).map(([type, items]) => (
        <div key={type} className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2 capitalize">{type}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="border p-2 rounded-md flex flex-col items-center"
              >
                <Image
                  src={item.image_url || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="mb-2"
                />
                <p>{item.name}</p>
                <p className="font-semibold">${item.price.toFixed(2)}</p>
                <p>Recommended: {Math.ceil(travelers / 2)}</p>
                <Button onClick={() => addToCart(item)} className="mt-2">
                  Add to Cart
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-8 border-t pt-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>
                  {item.name} - ${item.price.toFixed(2)}
                </span>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="destructive"
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 font-semibold">
          Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </p>
        <Button className="mt-4" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
