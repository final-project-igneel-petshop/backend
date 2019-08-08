"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("dogProducts", [
      {
        imagePath: "/images/acana.jpg",
        title: "Acana – Adult Small Breed 6 Kg",
        qte: 100,
        price: 90000,
        description:
          "Mother Nature evolved dogs as carnivores, biologically adapted for a diet rich and varied in meats with smaller amounts of fruits and vegetables. That’s why ACANA Adult Small Breed is loaded with free-run chicken, wild-caught flounder and whole nest-laid eggs, brimming with goodness and taste. Free of grains and fast carbohydrates such as rice, tapioca or potato, ACANA is rich in meat proteins to promote your dog’s peak health and conditioning.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagePath: "/images/canidae.jpg",
        title: "Canidae – Lamb & Rice 15 Lb",
        qte: 100,
        price: 860000,
        description:
          "Formulated for Sensitive Dogs that Love Lamb. We use high quality lamb meal for great nutrition. Great for dogs that love lamb and have sensitivities to other animal proteins. Guaranteed levels of live probiotic cultures to support healthy digestion. Guaranteed levels of powerful antioxidants to help maintain a healthy immune system. Guaranteed levels of healthy omegas 6 & 3 for beautiful skin and coat. No wheat, corn, soy, fillers, antibiotics, hormones, artificial flavors, colors or preservatives. A great tasting formula that dogs love! Made in the U.S.A.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagePath: "/images/totwp-salmon.jpg",
        title: "Taste of The Wild Puppy – Salmon 15 Lb",
        qte: 100,
        price: 695000,
        description:
          "This grain-free formula provides digestible energy and excellent nutrition for your growing puppy. Made with real roasted meat and a blend of protein sources, this hearty formula offers a taste sensation like no other. Vegetables and fruits deliver antioxidants to help support a healthy lifestyle. Your puppy craves a taste of the wild. Go ahead and give him one.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagePath: "/images/totwp-bison.jpg",
        title: "Taste of The Wild Puppy – Bison 15 Lb",
        qte: 100,
        price: 695000,
        description:
          "This grain-free formula provides digestible energy and excellent nutrition for your growing puppy. Made with real roasted meat and a blend of protein sources, this hearty formula offers a taste sensation like no other. Vegetables and fruits deliver antioxidants to help support a healthy lifestyle. Your puppy craves a taste of the wild. Go ahead and give him one.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagePath: "/images/orijen-six.jpg",
        title: "Nourish life – Alaskan Salmon 4 Lb",
        qte: 100,
        price: 1390000,
        description:
          "BIOLOGICALLY APPROPRIATE DOG FOOD. FEATURING SIX AUTHENTICALLY FRESH AND WILD-CAUGHT CANADIAN FISH. SURROUNDED BY ATLANTIC, PACIFIC AND ARCTIC OCEANS, AND BLESSED WITH VAST UNPOLLUTED LAKES, CANADA BOASTS A MARINE HARVEST PERFECTLY SUITED TO OUR PHILOSOPHY OF BIOLOGICALLY APPROPRIATE™ FOODS FROM FRESH REGIONAL INGREDIENTS. Inspired by the rich diversity of fish indigenous to our local waters, ORIJEN 6 FISH features unmatched inclusions of saltwater and freshwater fish that are caught-wild within our region and whisked to our kitchens as fresh and cold as the waters they came from. Loaded with protein-packed fish (80%) to support lean muscle mass and a supple skin and hair coat, ORIJEN’s award-winning low-carbohydrate, low-glycemic formula supports healthy blood sugar levels for peak conditioning and optimum body weight in dogs of all breeds and life stages. Prepared from Canada’s best and freshest fish, fruits and berries in our very own kitchens, ORIJEN 6 FISH keeps your dog happy, healthy and strong — read our ingredients and we think you’ll be happy too!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagePath: "/images/nurturepro-chicken.jpg",
        title: "Nourish Life – Chicken 12.5 Lb",
        qte: 100,
        price: 530000,
        description:
          "Nurture Pro Nourish Life Chicken Formula is ideal for puppies and working adult dogs.Quality proteins and amino acids from Deboned Chicken and Fresh Salmon. Steamed whole Oats and Barley for outstanding energy replenishment for growing and active dogs. Essential vitamins and minerals from farm fresh vegetables and fruits that support whole health. Ideal ratio of Protein and Fats that ensures the healthy growth and development of puppies. Strong bones, joints and teeth with the right balance of Glucosamine, Calcium and Phosphorous. Rich in DHA and EPA for healthy brain development and cognitive ability.Finest ingredients with no fillers that lay the foundation for good digestion and immune systems. Minimizes / Eliminates odor. Fortified with additional prebiotics, probiotics and 12 natural herbs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagePath: "/images/blackwood-dog-chicken-rice.jpg",
        title: "Blackwood – Chicken & Rice 5 Lb",
        qte: 100,
        price: 235000,
        description:
          "Super-premium, all-natural chicken protein. Pre- and probiotics to aid digestion.No corn, no wheat, no soy. Nutritionally complete and balanced. An ideal food for all breeds ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagePath: "/images/tasteOfTheWild.jpg",
        title: "Taste of The Wild – Venison & Salmon 15 Lb",
        qte: 100,
        price: 750000,
        description:
          "Rocky Mountain Feline® Formula with Roasted Venison & Smoked Salmon \n A grain-free formula for all life stages with peas and sweet potatoes provides highly digestible energy for your active cat. Made with real roasted venison and smoked salmon, this formula offers a taste sensation like no other. For today’s healthy cat, this formula is supplemented with vegetables and fruits, providing antioxidants to support a healthy immune system and overall good health. \n Viables® Probiotics \n Prebiotic Fiber \n Roasted Venison & Smoked Salmon \n Antioxidants \n Omega Fatty Acid Blend \n All Life-Stages Nutrition \n Grain-Free \n Protein: 42% minimum; Fat: 18% minimum \n Calories: 3,745 kcal/kg (390 kcal/cup) Calculated Metabolizable Energy",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("catProducts", null, {});
  }
};
