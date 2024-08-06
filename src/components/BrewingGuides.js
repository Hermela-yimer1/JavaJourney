import React, { useState, useEffect } from 'react';

const guides = [
  {
    id: 1,
    title: "French Press",
    description: "Step-by-step guide to making coffee with a French Press.",
    steps: [
      "Heat water to 200°F.",
      "Grind coffee to a coarse consistency.",
      "Add coffee grounds to the French press.",
      "Pour hot water over the grounds.",
      "Stir the mixture gently.",
      "Place the lid on the French press and let it steep for 4 minutes.",
      "Press the plunger down slowly.",
      "Pour the coffee into your cup and enjoy."
    ]
  },
  {
    id: 2,
    title: "Espresso",
    description: "Detailed instructions for brewing a perfect espresso shot.",
    steps: [
      "Preheat your espresso machine and portafilter.",
      "Grind coffee to a fine consistency.",
      "Dose the portafilter with the correct amount of coffee.",
      "Tamp the coffee grounds evenly.",
      "Lock the portafilter into the espresso machine.",
      "Start the extraction process.",
      "Stop the extraction after 25-30 seconds.",
      "Serve the espresso in a preheated cup."
    ]
  },
  {
    id: 3,
    title: "Pour Over",
    description: "Learn how to brew coffee with the pour-over method.",
    steps: [
      "Heat water to 200°F.",
      "Place a filter in the dripper and rinse it with hot water.",
      "Grind coffee to a medium-fine consistency.",
      "Add coffee grounds to the filter.",
      "Pour a small amount of hot water over the grounds to bloom.",
      "Slowly pour the remaining water in a circular motion.",
      "Wait for the coffee to drip through the filter.",
      "Remove the dripper and enjoy your coffee."
    ]
  },
  {
    id: 4,
    title: "Aeropress",
    description: "Quick and easy guide to brewing coffee with an Aeropress.",
    steps: [
      "Heat water to 175°F.",
      "Grind coffee to a fine consistency.",
      "Place a filter in the cap and rinse it with hot water.",
      "Assemble the Aeropress and add coffee grounds.",
      "Pour hot water over the grounds and stir.",
      "Insert the plunger and press down slowly.",
      "Serve the coffee and enjoy."
    ]
  },
  {
    id: 5,
    title: "Cold Brew",
    description: "Make smooth and refreshing cold brew coffee at home.",
    steps: [
      "Grind coffee to a coarse consistency.",
      "Combine coffee grounds and cold water in a jar.",
      "Stir the mixture and cover it.",
      "Refrigerate for 12-24 hours.",
      "Strain the coffee through a fine-mesh sieve or coffee filter.",
      "Dilute with water or milk to taste.",
      "Serve over ice and enjoy."
    ]
  },
  {
    id: 6,
    title: "Moka Pot",
    description: "Traditional Italian method of brewing coffee with a Moka Pot.",
    steps: [
      "Fill the bottom chamber of the Moka Pot with water.",
      "Grind coffee to a medium-fine consistency.",
      "Fill the filter basket with coffee grounds and level it off.",
      "Assemble the Moka Pot and place it on the stove.",
      "Heat on medium until coffee starts to fill the top chamber.",
      "Remove from heat once the top chamber is full.",
      "Pour the coffee into a cup and enjoy."
    ]
  },
  // Add more guides if needed
];

function BrewingGuides() {
  const [guideList, setGuideList] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState(null);

  useEffect(() => {
    // Replace with actual data fetching logic
    setGuideList(guides);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Brewing Guides</h2>
      {selectedGuide ? (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{selectedGuide.title}</h3>
          <ol className="list-decimal list-inside">
            {selectedGuide.steps.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
          <button onClick={() => setSelectedGuide(null)} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Back to Guides
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {guideList.map((guide) => (
            <div key={guide.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p>{guide.description}</p>
              <button onClick={() => setSelectedGuide(guide)} className="mt-4 p-2 bg-blue-500 text-white rounded">
                View Guide
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrewingGuides;
