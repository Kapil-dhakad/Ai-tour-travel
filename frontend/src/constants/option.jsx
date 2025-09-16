// src/constants.js

export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler exploring the world alone.",
    icon: "🧳",
    people: "1",
  },
  {
    id: 2,
    title: "Couple Trip",
    desc: "Traveling with your partner for romantic adventures.",
    icon: "❤️",
    people: "2",
  },
  {
    id: 3,
    title: "Family Vacation",
    desc: "Fun trips with family and kids to create memories.",
    icon: "👨‍👩‍👧‍👦",
    people: "4",
  },
  {
    id: 4,
    title: "Adventure Buddies",
    desc: "Travel with friends to explore new places together.",
    icon: "🧗‍♂️",
    people: "3",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of cost",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Balanced budget with comfort",
    icon: "🏨",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Premium experience with no compromise",
    icon: "💎",
  },
];

export const AI_PROMPT = (location, totalDays, travelers, budget) => `
Generate a travel plan in STRICT JSON format only. 
Do not include any explanation or extra text.
Follow this schema:

{
  "location": "${location}",
  "totalDays": ${totalDays},
  "travelers": "${travelers}",
  "budget": "${budget}",
  "itinerary": [
    {
      "day": "Day 1",
      "plan": [
        {
          "time": "09:00 AM",
          "placeName": "Mahakaleshwar Temple",
          "placeDetails": "Famous Jyotirlinga temple in Ujjain",
          "timeToTravel": "15 mins"
        },
        {
          "time": "12:00 PM",
          "placeName": "Ram Ghat",
          "placeDetails": "Popular riverfront on Shipra river",
          "timeToTravel": "10 mins"
        }
      ]
    },
    {
      "day": "Day 2",
      "plan": [
        {
          "time": "10:00 AM",
          "placeName": "Kal Bhairav Temple",
          "placeDetails": "Historic temple dedicated to Kal Bhairav",
          "timeToTravel": "20 mins"
        }
      ]
    }
  ],
  "hotels": [
    {
      "name": "Hotel Ashray",
      "address": "Near Mahakaleshwar Temple, Ujjain, MP",
      "price": "₹1500 - ₹2500 per night",
      "rating": 4.3
    },
    {
      "name": "Hotel Shanti Palace",
      "address": "Freeganj, Ujjain, MP",
      "price": "₹2000 - ₹3500 per night",
      "rating": 4.5
    }
  ]
}

Return ONLY valid JSON. 
Do not include \`\`\`json or \`\`\` or any explanation.
`;
