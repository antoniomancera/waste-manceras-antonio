"use client";

import { useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: "4-yard-skip",
      image: "/images/skip_placeholder.png",
      title: "4 Yard Skip",
      subtitle: "14 day hire period",
      price: 211,
      notAllowedOnRoad: false,
    },
    {
      id: "5-yard-skip",
      image: "/images/skip_placeholder.png",
      title: "5 Yard Skip",
      subtitle: "14 day hire period",
      price: 241,
      notAllowedOnRoad: false,
    },
    {
      id: "6-yard-skip",
      image: "/images/skip_placeholder.png",
      title: "6 Yard Skip",
      subtitle: "14 day hire period",
      price: 264,
      notAllowedOnRoad: false,
    },
    {
      id: "8-yard-skip",
      image: "/images/skip_placeholder.png",
      title: "8 Yard Skip",
      subtitle: "14 day hire period",
      price: 295,
      notAllowedOnRoad: false,
    },
    {
      id: "10-yard-skip",
      image: "/images/skip_placeholder.png",
      title: "10 Yard Skip",
      subtitle: "14 day hire period",
      price: 356,
      notAllowedOnRoad: true,
    },
    {
      id: "12-yard-skip",
      image: "/images/skip_placeholder.png",
      title: "12 Yard Skip",
      subtitle: "14 day hire period",
      price: 390,
      notAllowedOnRoad: true,
    },
  ];

  const handleCardSelect = (cardId) => {
    setSelectedCard((prevSelectedCard) =>
      prevSelectedCard === cardId ? null : cardId
    );
  };

  const onClickUnSelectCard = () => {
    setSelectedCard(null);
  };

  const currentSelectedCardData = cards.find(
    (card) => card.id === selectedCard
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <main className="p-8 flex-grow flex justify-center items-start pt-16">
        <div className="w-full max-w-screen-xl">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-100">
            Choose Your Skip Size
          </h1>
          <h2 className="text-2xl mb-10 text-center text-gray-100">
            Select the skip size that best suits your needs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                onSelect={handleCardSelect}
                isSelected={selectedCard === card.id}
              />
            ))}
          </div>
        </div>
      </main>

      {selectedCard && (
        <footer className="bg-gray-800 p-6 shadow-lg fixed bottom-0 left-0 w-full z-10">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-200">
              {currentSelectedCardData.title} &nbsp; £
              {currentSelectedCardData.price} &nbsp;{" "}
              {currentSelectedCardData.subtitle}
            </div>
            <div className="flex space-x-4">
              <button
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition duration-200"
                onClick={onClickUnSelectCard}
              >
                Back
              </button>
              <button
                className={`px-8 py-3 rounded-lg font-semibold transition duration-200
                            ${
                              selectedCard
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-800 text-blue-300 cursor-not-allowed"
                            }`}
                disabled={!selectedCard}
              >
                Continue &rarr;
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
