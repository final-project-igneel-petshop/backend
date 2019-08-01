"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        title: "Aixia – Skipjack Tuna with Chicken Fillet – BCM-8",
        qte: 100,
        price: 16000,
        description: 'Aixia – BCM 8 – Tuna & Skipjack with Chicken Fillet. Fish (Tuna, Skipjack tuna), Lactosucrose, Minerals, Vitamins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Blackwood – Senior Cat 4 Lb",
        qte: 100,
        price: 160000,
        description: "LEAN/SENIOR CAT FOOD. \n CHICKEN MEAL & BROWN RICE RECIPE. \n Ideal for older and overweight cats \n Super-premium, all-natural chicken protein \n No corn, no wheat, no soy \n No artificial flavors or colors \n Optimal nutrition for optimal wellness \n NUTRITIONALLY COMPLETE & BALANCED \n Blackwood Lean/Senior Chicken Meal & Brown Rice Cat Food is formulated to meet the nutritional levels established by the AAFCO cat food nutrient profiles for Maintenance.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Daily Delight – Skipjack Tuna White & Chicken with Salmon",
        qte: 100,
        price: 22000,
        description: "When skipjack tuna meets salmon, you can anticipate your feline meowing her expectations when you’re opening the can. Plenty of quality proteins, this easy to digest recipe is loaded with Omega fatty acids that support skin cells and reduce excessive shedding. Get a boost in heart health, joint health, and skin condition for your active feline! \n Delight your cat with a can of Pure at every mealtime. Each Pure recipe features delicate cuts of Skipjack Tuna and Chicken for an unforgettable flavour burst! There’s a surprise to every can – get bewildered by the big and chunky flakes, relish in the firm and chewy texture, savour the moist and clean ocean flavour! What’s more, each recipe is dressed up with highly nutritious seductive ingredients. \n Select Cuts of Premium Skipjack Tuna \n Real Deboned Fresh Chicken \n Perfectly Moist and Flavoured \n Nutritious and Balanced for Daily Feeding \n No Meat By-Products, Wheat, Corn or Soy \n Appealing Source of Hydration",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Holistic Select – Adult & Kitten Health 3 Lb",
        qte: 100,
        price: 285000,
        description: "This Holistic Select Adult & Kitten Health Chicken Meal dry cat food is formulated with our unique Digestive Health Support System, including active probiotics, healthy fiber and digestive enzymes. When combined with our other high quality, natural ingredients, this recipe supports the absorption and utilization of vital nutrients throughout your cat’s entire body. Your cat will look and feel healthy from the inside out. \n Healthy Protein Sources Support Lean Muscle \n Omega-3 Skin & Coat Support from Flaxseed & Menhaden Fish Oil \n With DHA to Help Support Healthy Brain & Eyes",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Nourish life – Alaskan Salmon 4 Lb",
        qte: 100,
        price: 210000,
        description: "Indoor cats can be less active when compared to those who are outdoor, so we have specifically created a formula to give them complete nutrition while helping them to manage a healthy weight. With Coconut Oil, our formula can help control hairball problems as a result of increase in indoor grooming. \n Nurture Pro Nourish Life Alaskan Formula is primarily for kittens and adult cats, who groom and primarily live indoors. \n Alaskan Salmon as 1st ingredient – Rich in Vitamin B6 and B12 \n Cranberries and Blueberries that provide phytonutrients while supporting urinary tract health \n Low levels of Ash and Magnesium that prevents feline lower urinary tract disease (FLUTD) \n Chia Seeds – Providing 3x more Omega 3 than Salmon while promoting lustrous furcoat \n Taurine to prevent further retinal and immune degeneration \n Coconut Oil to help cats to effectively manage hairball issues \n NO Wheat, Soy and Corn",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "Orijen – Adult Cat & Kitten 5.4 Kg",
        qte: 100,
        price: 1390000,
        description: "Loaded with the richly-nourishing meat ingredients all cats need to thrive, ORIJEN’s award-winning low-carbohydrate, low-glycemic formula supports healthy blood sugars for peak health and optimal body weight. \n And with each morsel now infused with freeze-dried meats and liver, ORIJEN cat foods are bursting with natural savory flavors that all cats love. \n Prepared with fresh and local ingredients in our award-winning kitchens, ORIJEN keeps your cat or kitten happy, healthy and strong. Read our ingredients and we think you’ll agree!",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "Schesir – Tuna with Surimi 85 Gr",
        qte: 100,
        price: 30000,
        description: "TTop quality food for adult cats made with 100% natural ingredients, free from added colorings and preservatives. Careful selection of the very best parts of the fish, steam-cooked and hand-processed. In soft jelly.",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "Taste of The Wild – Venison & Salmon 15 Lb",
        qte: 100,
        price: 750000,
        description: "Rocky Mountain Feline® Formula with Roasted Venison & Smoked Salmon \n A grain-free formula for all life stages with peas and sweet potatoes provides highly digestible energy for your active cat. Made with real roasted venison and smoked salmon, this formula offers a taste sensation like no other. For today’s healthy cat, this formula is supplemented with vegetables and fruits, providing antioxidants to support a healthy immune system and overall good health. \n Viables® Probiotics \n Prebiotic Fiber \n Roasted Venison & Smoked Salmon \n Antioxidants \n Omega Fatty Acid Blend \n All Life-Stages Nutrition \n Grain-Free \n Protein: 42% minimum; Fat: 18% minimum \n Calories: 3,745 kcal/kg (390 kcal/cup) Calculated Metabolizable Energy",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  }
};
