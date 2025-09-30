import { FormData } from "@/types/form";

interface DayPlan {
  day: number;
  focus: string;
  duration: string;
  warmup: string[];
  exercises: Array<{
    name: string;
    reps: string;
    description: string;
  }>;
  cooldown: string[];
}

export const generatePilatesPlan = (data: FormData): {
  days: DayPlan[];
  nutritionTip: string;
  groceryList: string[];
} => {
  const weightGoal = parseFloat(data.goalWeight) < parseFloat(data.currentWeight) ? "loss" : "gain";
  
  const days: DayPlan[] = [
    {
      day: 1,
      focus: "Core Foundation",
      duration: "25 minutes",
      warmup: ["Cat-Cow stretches (2 min)", "Pelvic tilts (2 min)", "Gentle spinal twists (2 min)"],
      exercises: [
        {
          name: "The Hundred",
          reps: "10 breaths",
          description: "Lie on back, lift head and legs, pump arms while breathing"
        },
        {
          name: "Single Leg Stretch",
          reps: "10 each side",
          description: "Alternate pulling knees to chest while extending opposite leg"
        },
        {
          name: "Plank Hold",
          reps: "3 sets of 30 seconds",
          description: "Hold forearm plank with engaged core"
        },
        {
          name: "Bridge",
          reps: "15 reps",
          description: "Lift hips while squeezing glutes, hold for 2 seconds"
        }
      ],
      cooldown: ["Child's pose (2 min)", "Spinal twist (1 min each side)", "Deep breathing (2 min)"]
    },
    {
      day: 2,
      focus: "Flexibility & Flow",
      duration: "30 minutes",
      warmup: ["Neck rolls (1 min)", "Shoulder circles (2 min)", "Side bends (2 min)"],
      exercises: [
        {
          name: "Rolling Like a Ball",
          reps: "12 reps",
          description: "Balance on tailbone, roll back and return to balance"
        },
        {
          name: "Spine Stretch Forward",
          reps: "10 reps",
          description: "Sit tall and reach forward, articulating through spine"
        },
        {
          name: "Saw",
          reps: "8 each side",
          description: "Twist torso and reach across to opposite foot"
        },
        {
          name: "Mermaid Stretch",
          reps: "6 each side",
          description: "Side bends with arm reaching overhead"
        },
        {
          name: "Swan Dive Prep",
          reps: "10 reps",
          description: "Lie prone, lift chest using back muscles"
        }
      ],
      cooldown: ["Figure-4 stretch (2 min each side)", "Seated forward fold (3 min)"]
    },
    {
      day: 3,
      focus: "Posture & Alignment",
      duration: "35 minutes",
      warmup: ["Wall slides (2 min)", "Arm circles (2 min)", "Hip circles (2 min)"],
      exercises: [
        {
          name: "Shoulder Bridge",
          reps: "12 reps",
          description: "Articulate spine up and down, one vertebra at a time"
        },
        {
          name: "Chest Lift with Rotation",
          reps: "10 each side",
          description: "Crunch up and twist to each side alternately"
        },
        {
          name: "Side Plank",
          reps: "30 sec each side, 2 sets",
          description: "Hold side plank on forearm with stacked feet"
        },
        {
          name: "Swimming",
          reps: "20 counts",
          description: "Lie prone, alternate lifting opposite arm and leg"
        },
        {
          name: "Leg Pull Front",
          reps: "8 reps",
          description: "From plank, lift one leg at a time while maintaining alignment"
        }
      ],
      cooldown: ["Cat-cow (2 min)", "Thread the needle (2 min each side)", "Savasana (3 min)"]
    },
    {
      day: 4,
      focus: "Active Recovery",
      duration: "20 minutes",
      warmup: ["Gentle walking in place (2 min)", "Arm swings (2 min)", "Leg swings (2 min)"],
      exercises: [
        {
          name: "Pelvic Curl",
          reps: "15 slow reps",
          description: "Gentle bridge with focus on articulation"
        },
        {
          name: "Leg Circles",
          reps: "8 each direction, both legs",
          description: "Lie on back, draw circles with extended leg"
        },
        {
          name: "Seated Twist",
          reps: "10 each side",
          description: "Sit tall and rotate torso from center"
        },
        {
          name: "Modified Side Kicks",
          reps: "12 each leg",
          description: "Lie on side, controlled front and back leg swings"
        }
      ],
      cooldown: ["Hip flexor stretch (2 min each side)", "Hamstring stretch (2 min each side)", "Relaxation (3 min)"]
    },
    {
      day: 5,
      focus: "Strength & Control",
      duration: "40 minutes",
      warmup: ["Dynamic stretching (3 min)", "Arm and leg reaches (2 min)", "Torso rotations (2 min)"],
      exercises: [
        {
          name: "Double Leg Stretch",
          reps: "12 reps",
          description: "Curl up, extend arms and legs, then pull back in"
        },
        {
          name: "Criss-Cross",
          reps: "16 total (8 each side)",
          description: "Bicycle crunches with rotation"
        },
        {
          name: "Teaser Prep",
          reps: "8 reps",
          description: "Roll up to V-position with legs lifted"
        },
        {
          name: "Side Leg Series",
          reps: "10 each: lifts, circles, kicks per side",
          description: "Lie on side, perform various leg movements"
        },
        {
          name: "Push-Up to Pike",
          reps: "10 reps",
          description: "Push-up then lift hips to downward dog"
        }
      ],
      cooldown: ["Pigeon pose (3 min each side)", "Seated spinal twist (2 min each side)", "Deep breathing (3 min)"]
    },
    {
      day: 6,
      focus: "Balance & Stability",
      duration: "35 minutes",
      warmup: ["Balance exercises (3 min)", "Ankle circles (2 min)", "Toe taps (2 min)"],
      exercises: [
        {
          name: "Standing Leg Lift Series",
          reps: "10 each direction, both legs",
          description: "Stand on one leg, move other in all directions"
        },
        {
          name: "Tree Balance",
          reps: "1 min each side, 2 sets",
          description: "Stand on one leg with other foot on inner thigh"
        },
        {
          name: "Single Leg Bridge",
          reps: "12 each leg",
          description: "Bridge with one leg extended"
        },
        {
          name: "Bird Dog",
          reps: "10 each side",
          description: "On hands and knees, extend opposite arm and leg"
        },
        {
          name: "Standing Roll Down",
          reps: "8 reps",
          description: "Roll down through spine to touch floor, roll back up"
        }
      ],
      cooldown: ["Standing forward fold (3 min)", "Quad stretch (2 min each side)", "Meditation (3 min)"]
    },
    {
      day: 7,
      focus: "Full Body Integration",
      duration: "40 minutes",
      warmup: ["Sun salutation flow (5 min)", "Dynamic stretches (3 min)"],
      exercises: [
        {
          name: "The Series of Five",
          reps: "Single leg, double leg, scissors, lower lift, criss-cross - 10 each",
          description: "Classic Pilates ab series"
        },
        {
          name: "Full Teaser",
          reps: "6 reps",
          description: "Roll up to full V-position, arms reaching forward"
        },
        {
          name: "Plank to Down Dog Flow",
          reps: "12 reps",
          description: "Flow between plank and downward dog"
        },
        {
          name: "Side Plank with Leg Lift",
          reps: "8 each side",
          description: "Hold side plank and lift top leg"
        },
        {
          name: "Seal",
          reps: "10 reps",
          description: "Roll like a ball with legs in diamond shape, clap feet"
        }
      ],
      cooldown: ["Full body stretch sequence (5 min)", "Supported bridge (3 min)", "Final relaxation (5 min)"]
    }
  ];

  const nutritionTips: Record<string, string> = {
    "Balanced": `Your balanced diet perfectly complements this Pilates plan. Focus on whole grains, lean proteins, colorful vegetables, and healthy fats. Stay hydrated and eat regular meals to fuel your workouts and support ${weightGoal === "loss" ? "healthy weight loss" : "muscle building"}.`,
    "Vegetarian": `Your vegetarian diet aligns beautifully with Pilates' mind-body philosophy. Ensure adequate protein through legumes, tofu, tempeh, and quinoa. Include iron-rich foods like spinach and pair with vitamin C for better absorption. These nutrients support muscle recovery and energy for your daily practice.`,
    "Vegan": `Your plant-based approach supports both your Pilates practice and overall wellness. Prioritize complete proteins (quinoa, soy, hemp seeds), B12 supplementation, and omega-3s from flaxseed or algae. These nutrients enhance muscle repair and maintain energy throughout your 7-day journey.`,
    "Keto": `Your low-carb, high-fat diet can fuel your Pilates practice effectively. Ensure electrolyte balance (sodium, potassium, magnesium) especially important for muscle function. Include quality fats like avocado, nuts, and olive oil. Stay well-hydrated to support flexibility and prevent cramping during exercises.`,
    "Mediterranean": `The Mediterranean diet is ideal for Pilates practitioners! Rich in anti-inflammatory foods, omega-3s from fish, and abundant vegetables, it supports muscle recovery and joint health. Olive oil and nuts provide sustained energy for your workouts while promoting flexibility and strength.`,
    "High-Protein": `Your high-protein focus perfectly supports the strength-building aspects of this Pilates plan. Spread protein intake throughout the day for optimal muscle repair and growth. Include lean meats, fish, eggs, and Greek yogurt. The enhanced protein supports ${weightGoal === "loss" ? "fat loss while preserving muscle" : "muscle development and strength gains"}.`,
    "Other": `Whatever your dietary approach, ensure you're getting balanced nutrition to support your Pilates practice. Focus on adequate protein for muscle recovery, complex carbs for energy, and healthy fats for hormone balance. Stay hydrated and listen to your body's hunger cues to fuel your transformation journey.`
  };

  const groceryLists: Record<string, string[]> = {
    "Balanced": [
      "Chicken breast or fish",
      "Brown rice & quinoa",
      "Sweet potatoes",
      "Mixed vegetables (broccoli, spinach, bell peppers)",
      "Eggs",
      "Greek yogurt",
      "Berries & bananas",
      "Almonds & walnuts",
      "Olive oil",
      "Avocado"
    ],
    "Vegetarian": [
      "Tofu & tempeh",
      "Lentils & chickpeas",
      "Quinoa & whole grain pasta",
      "Mixed leafy greens",
      "Eggs & Greek yogurt",
      "Berries & citrus fruits",
      "Nuts & seeds",
      "Nutritional yeast",
      "Olive oil",
      "Sweet potatoes"
    ],
    "Vegan": [
      "Tofu, tempeh & edamame",
      "Black beans & lentils",
      "Quinoa & oats",
      "Leafy greens & cruciferous vegetables",
      "Berries & bananas",
      "Chia seeds & flaxseeds",
      "Almond butter",
      "Plant milk (fortified)",
      "Nutritional yeast",
      "B12 supplement"
    ],
    "Keto": [
      "Chicken, fish & beef",
      "Eggs (lots)",
      "Cheese & full-fat dairy",
      "Avocados",
      "Leafy greens (spinach, kale)",
      "Broccoli & cauliflower",
      "Olive oil & coconut oil",
      "Nuts (macadamia, pecans)",
      "Electrolyte supplements",
      "Berries (limited)"
    ],
    "Mediterranean": [
      "Salmon & sardines",
      "Olive oil (extra virgin)",
      "Whole grain bread",
      "Chickpeas & lentils",
      "Tomatoes & cucumbers",
      "Leafy greens",
      "Feta cheese",
      "Olives",
      "Nuts & seeds",
      "Fresh herbs (basil, oregano)"
    ],
    "High-Protein": [
      "Chicken breast & turkey",
      "Salmon & tuna",
      "Eggs & egg whites",
      "Greek yogurt & cottage cheese",
      "Protein powder",
      "Lean beef",
      "Quinoa",
      "Edamame",
      "Mixed vegetables",
      "Berries"
    ],
    "Other": [
      "Lean proteins (choose your preference)",
      "Whole grains",
      "Variety of vegetables",
      "Fresh fruits",
      "Healthy fats (nuts, olive oil)",
      "Greek yogurt or alternative",
      "Eggs or substitute",
      "Beans & legumes",
      "Herbs & spices",
      "Plenty of water"
    ]
  };

  return {
    days,
    nutritionTip: nutritionTips[data.dietPreference] || nutritionTips["Other"],
    groceryList: groceryLists[data.dietPreference] || groceryLists["Other"]
  };
};
