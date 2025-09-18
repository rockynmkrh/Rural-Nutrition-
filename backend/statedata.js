module.exports = {
  "Bihar": {
    population: 124799926, // 2023 estimate
    stapleFoods: ["Rice", "Wheat (roti)", "Lentils (dal)", "Potato"],
    avgMonthlyFoodCostINR: 1600,
    lackingNutrients: ["Protein", "Iron", "Vitamin A", "Vitamin B12"],
    nutrientFulfillment: {
      Protein: { before: 40, after: 75 },
      Iron: { before: 35, after: 70 },
      "Vitamin A": { before: 20, after: 60 },
      "Vitamin B12": { before: 10, after: 55 }
    },
    costToFulfillNutrientsINR: 450,
    suggestedNewFoods: [
      { name: "Egg (3/week)", reason: "Affordable protein & B12", incrementalCostINR: 120 },
      { name: "Leafy greens (saag)", reason: "Iron & Vitamin A", incrementalCostINR: 80 },
      { name: "Fortified atta", reason: "Iron & folate boost", incrementalCostINR: 150 },
      { name: "Groundnuts (chikki)", reason: "Protein & healthy fats", incrementalCostINR: 100 }
    ]
  },
  "Uttar Pradesh": {
    population: 241066874,
    stapleFoods: ["Wheat (roti)", "Rice", "Dal", "Seasonal vegetables"],
    avgMonthlyFoodCostINR: 1750,
    lackingNutrients: ["Protein", "Calcium", "Iron"],
    nutrientFulfillment: {
      Protein: { before: 45, after: 80 },
      Calcium: { before: 25, after: 65 },
      Iron: { before: 30, after: 70 }
    },
    costToFulfillNutrientsINR: 500,
    suggestedNewFoods: [
      { name: "Milk (200 ml/day)", reason: "Calcium & protein", incrementalCostINR: 240 },
      { name: "Soy chunks (soya bari)", reason: "Low-cost protein", incrementalCostINR: 110 },
      { name: "Jaggery + sesame", reason: "Iron & calcium", incrementalCostINR: 90 },
      { name: "Sprouted pulses", reason: "Improved iron absorption", incrementalCostINR: 60 }
    ]
  },
  "Jharkhand": {
    population: 39469498,
    stapleFoods: ["Rice", "Ragi", "Dal", "Leafy greens"],
    avgMonthlyFoodCostINR: 1650,
    lackingNutrients: ["Protein", "Iron", "Vitamin A"],
    nutrientFulfillment: {
      Protein: { before: 40, after: 78 },
      Iron: { before: 35, after: 72 },
      "Vitamin A": { before: 20, after: 62 }
    },
    costToFulfillNutrientsINR: 460,
    suggestedNewFoods: [
      { name: "Egg (3/week)", reason: "Protein & B12", incrementalCostINR: 120 },
      { name: "Leafy greens", reason: "Iron & Vitamin A", incrementalCostINR: 80 },
      { name: "Groundnuts", reason: "Protein & healthy fats", incrementalCostINR: 90 },
      { name: "Fortified oil", reason: "Vitamin A & D", incrementalCostINR: 170 }
    ]
  },
  "Odisha": {
    population: 46356334,
    stapleFoods: ["Rice", "Dal", "Fish", "Green vegetables"],
    avgMonthlyFoodCostINR: 1700,
    lackingNutrients: ["Vitamin D", "Protein", "Calcium"],
    nutrientFulfillment: {
      "Vitamin D": { before: 15, after: 55 },
      Protein: { before: 42, after: 77 },
      Calcium: { before: 28, after: 68 }
    },
    costToFulfillNutrientsINR: 520,
    suggestedNewFoods: [
      { name: "Milk", reason: "Calcium & protein", incrementalCostINR: 250 },
      { name: "Fortified salt", reason: "Iodine & iron", incrementalCostINR: 40 },
      { name: "Egg (3/week)", reason: "Protein", incrementalCostINR: 120 },
      { name: "Soy chunks", reason: "Low-cost protein", incrementalCostINR: 110 }
    ]
  },
  "Madhya Pradesh": {
    population: 89381033,
    stapleFoods: ["Wheat", "Rice", "Pulses", "Millets"],
    avgMonthlyFoodCostINR: 1800,
    lackingNutrients: ["Iron", "Protein", "Vitamin A"],
    nutrientFulfillment: {
      Iron: { before: 33, after: 68 },
      Protein: { before: 45, after: 79 },
      "Vitamin A": { before: 22, after: 64 }
    },
    costToFulfillNutrientsINR: 530,
    suggestedNewFoods: [
      { name: "Leafy greens", reason: "Iron & Vitamin A", incrementalCostINR: 90 },
      { name: "Egg", reason: "Protein", incrementalCostINR: 120 },
      { name: "Groundnuts", reason: "Healthy fats & protein", incrementalCostINR: 100 },
      { name: "Carrots", reason: "Vitamin A", incrementalCostINR: 80 }
    ]
  },
  "Chhattisgarh": {
    population: 32004006,
    stapleFoods: ["Rice", "Pulses", "Minor millets", "Vegetables"],
    avgMonthlyFoodCostINR: 1550,
    lackingNutrients: ["Protein", "Iron", "Vitamin C"],
    nutrientFulfillment: {
      Protein: { before: 38, after: 76 },
      Iron: { before: 32, after: 67 },
      "Vitamin C": { before: 18, after: 58 }
    },
    costToFulfillNutrientsINR: 400,
    suggestedNewFoods: [
      { name: "Guava", reason: "Vitamin C", incrementalCostINR: 100 },
      { name: "Sprouted legumes", reason: "Protein & iron", incrementalCostINR: 90 },
      { name: "Fortified oil", reason: "Vitamin A & D", incrementalCostINR: 170 },
      { name: "Leafy greens", reason: "Iron & Vitamin A", incrementalCostINR: 80 }
    ]
  }
};
