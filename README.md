Rural India Nutrition Explorer 🍽️📊
The Rural India Nutrition Explorer is a single-page web application designed to visualize and analyze nutritional data for various states in rural India. It provides insights into staple food consumption, nutrient deficiencies, and the potential impact of introducing new, nutrient-rich foods. Users can interact with the data to see how different government subsidies could affect the cost of a healthy diet.

Features ✨
State Selection: Choose from a list of Indian states to view specific nutritional data.

Nutrient Deficiency Analysis: The app highlights the key nutrients lacking in the typical rural diet for the selected state.

Food Recommendations: It suggests new, affordable foods to add to the local diet to address nutritional gaps.

Interactive Data Visualization: A dynamic bar chart displays the percentage of nutrient fulfillment before and after the suggested dietary changes, benchmarked against WHO recommendations.

Subsidy Simulation: A slider allows users to simulate the impact of a government subsidy on the total cost of the new food plan, showing the required government budget and the final cost per person.

Financial Breakdown: The app provides a clear summary of the total cost of the nutrition plan, the government's budgetary outlay based on the subsidy, and the adjusted monthly food cost for an individual.

Technology Stack 💻
HTML5: Provides the fundamental structure of the web page.

CSS3: Styles the user interface, including a modern, clean design with gradients and cards.

JavaScript (ES6+): Powers the application's logic and interactivity.

React (via CDN): A lightweight setup for building the component-based user interface.

Chart.js (via CDN): Used for generating the interactive and responsive bar and line charts.

How It Works ⚙️
Data Fetching: The application fetches nutritional and demographic data from a /api/states endpoint. This data includes information on staple foods, population, lacking nutrients, and the cost of dietary improvements for each state.

State Management: The app uses React's useState and useEffect hooks to manage the application's state, including the list of states, the currently selected state, and the chosen subsidy level.

Dynamic Rendering: Based on the selected state, the application dynamically renders various data points such as staple foods, nutrient deficiencies, and suggested new foods.

Chart Generation: When a state is selected, useEffect triggers the creation or update of a Chart.js instance. The chart visualizes the "before" and "after" nutrient fulfillment percentages and the "WHO Recommended" target line.

Cost Calculation: The subsidy slider updates the state, which in turn triggers a recalculation of the financial metrics. The total cost, government budget, and per-person cost are calculated and displayed in real-time. The formatToCrores helper function ensures Indian financial figures are presented in a familiar format.

Getting Started 🚀
Clone the repository or copy the HTML code into an index.html file.

Set up a local server to serve the index.html file. Since the app makes a fetch request to /api/states, you'll need to simulate this API.

Simulating the API: The easiest way to run this locally is to use a simple server that returns a JSON response for the /api/states endpoint. For a quick test, you could use a tool like json-server or a simple Node.js/Python server. The JSON data should follow this structure:

JSON

[
  {
    "state": "Madhya Pradesh",
    "population": 72626809,
    "stapleFoods": ["Wheat", "Rice", "Lentils"],
    "avgMonthlyFoodCostINR": 1850,
    "lackingNutrients": ["Vitamin A", "Iron", "Zinc"],
    "costToFulfillNutrientsINR": 150,
    "suggestedNewFoods": [
      { "name": "Moringa", "reason": "High in Iron and Vitamin A", "incrementalCostINR": 75 },
      { "name": "Amaranth", "reason": "Rich in Zinc", "incrementalCostINR": 75 }
    ],
    "nutrientFulfillment": {
      "Vitamin A": { "before": 45, "after": 95 },
      "Iron": { "before": 55, "after": 90 },
      "Zinc": { "before": 60, "after": 105 }
    }
  },
  ...
]
Open the file in your browser to start exploring the data.

Credits 
Design & Concept: This project was developed as a tool to showcase how data and technology can be used to address public health challenges like malnutrition in rural communities.

Data Source: The data used in this application is for illustrative purposes only.

Libraries:

React: For building the UI.

Chart.js: For data visualization.

Styling: Inspired by modern, clean web design principles.
