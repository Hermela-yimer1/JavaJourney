import React, { useState } from 'react';

function Calculator() {
  const [coffee, setCoffee] = useState('');
  const [water, setWater] = useState('');
  const [ratio, setRatio] = useState(16);

  const handleCoffeeChange = (e) => setCoffee(e.target.value);
  const handleWaterChange = (e) => setWater(e.target.value);
  const handleRatioChange = (e) => setRatio(e.target.value);

  const calculateWater = () => (coffee * ratio).toFixed(2);
  const calculateCoffee = () => (water / ratio).toFixed(2);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Coffee-to-Water Ratio Calculator</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <label className="block mb-2">Coffee (grams):</label>
          <input
            type="number"
            value={coffee}
            onChange={handleCoffeeChange}
            className="w-full p-2 border rounded"
          />
          <button onClick={() => setWater(calculateWater())} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Calculate Water
          </button>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <label className="block mb-2">Water (ml):</label>
          <input
            type="number"
            value={water}
            onChange={handleWaterChange}
            className="w-full p-2 border rounded"
          />
          <button onClick={() => setCoffee(calculateCoffee())} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Calculate Coffee
          </button>
        </div>
      </div>
      <div className="mt-4">
        <label className="block mb-2">Ratio:</label>
        <input
          type="number"
          value={ratio}
          onChange={handleRatioChange}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
}

export default Calculator;
