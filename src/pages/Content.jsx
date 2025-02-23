import React from "react";

const Content = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 pt-10 sm:p-20 lg:p-20">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Crop Recommendation System</h1>
        
        {/* Soil pH Level */}
        <div className="mb-6">
          <label className="block text-lg text-gray-700 font-semibold">Soil pH Level</label>
          <input
            type="number"
            className="mt-2 p-3 border border-gray-300 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter soil pH"
          />
        </div>
        
        {/* Nitrogen (N) Level */}
        <div className="mb-6">
          <label className="block text-lg text-gray-700 font-semibold">Nitrogen (N) Level</label>
          <input
            type="number"
            className="mt-2 p-3 border border-gray-300 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter Nitrogen level"
          />
        </div>
        
        {/* Phosphorus (P) Level */}
        <div className="mb-6">
          <label className="block text-lg text-gray-700 font-semibold">Phosphorus (P) Level</label>
          <input
            type="number"
            className="mt-2 p-3 border border-gray-300 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter Phosphorus level"
          />
        </div>
        
        {/* Potassium (K) Level */}
        <div className="mb-6">
          <label className="block text-lg text-gray-700 font-semibold">Potassium (K) Level</label>
          <input
            type="number"
            className="mt-2 p-3 border border-gray-300 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter Potassium level"
          />
        </div>
        
        {/* Temperature */}
        <div className="mb-6">
          <label className="block text-lg text-gray-700 font-semibold">Temperature (°C)</label>
          <input
            type="number"
            className="mt-2 p-3 border border-gray-300 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter temperature"
          />
        </div>
        
        {/* Button */}
        <button
          className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition-all"
        >
          Get Recommendations
        </button>

        {/* Recommendations Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Crops:</h2>
          <ul className="space-y-6">
            <li className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-green-600">Tomato</h3>
              <p className="text-gray-700">Soil pH: 6.0–6.8</p>
              <p className="text-gray-700">NPK: 40-30-50</p>
              <p className="text-gray-700">Temperature: 20°C</p>
            </li>
            <li className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-green-600">Lettuce</h3>
              <p className="text-gray-700">Soil pH: 6.0–7.0</p>
              <p className="text-gray-700">NPK: 20-40-20</p>
              <p className="text-gray-700">Temperature: 18°C–24°C</p>
            </li>
            <li className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-green-600">Spinach</h3>
              <p className="text-gray-700">Soil pH: 6.0–7.5</p>
              <p className="text-gray-700">NPK: 30-20-30</p>
              <p className="text-gray-700">Temperature: 16°C–20°C</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
