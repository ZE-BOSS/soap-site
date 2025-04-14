import React from 'react';
import {
  Droplet,
  Sparkles,
  Beaker,
  Flame,
  Palette,
  ShieldCheck,
  Smile
} from 'lucide-react';

const ingredientData = [
  {
    icon: <Droplet className="w-6 h-6 text-blue-500" />,
    title: 'HEC (Hydroxyethyl Cellulose)',
    description:
      'A plant-derived thickener that gives Wenwaw its smooth, gel-like texture. It glides effortlessly on your skin, offering an even and luxurious feel while stabilizing the formula.'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-green-500" />,
    title: 'SLES (Sodium Laureth Sulfate)',
    description:
      'A mild cleanser that lifts away dirt and oil effectively. Gentle on the skin, it creates a rich lather for a satisfying wash.'
  },
  {
    icon: <Flame className="w-6 h-6 text-yellow-500" />,
    title: 'SLS (Sodium Lauryl Sulfate)',
    description:
      'Adds powerful cleansing and foaming action. Used in safe concentrations and balanced with moisturizing agents for skin protection.'
  },
  {
    icon: <Beaker className="w-6 h-6 text-cyan-600" />,
    title: 'Sodium Carbonate (Washing Soda)',
    description:
      'Boosts cleaning efficiency and balances pH. It softens water, making soap more effective while leaving skin fresh—not stripped.'
  },
  {
    icon: <Palette className="w-6 h-6 text-pink-500" />,
    title: 'Cosmetic Colourants',
    description:
      'Skin-safe, minimal-use colorants that make Wenwaw visually appealing, vibrant, and reflective of its fruity energy.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
    title: 'Preservative (Paraben-Free)',
    description:
      'Keeps your soap fresh and bacteria-free. Our preservative is gentle and ensures safety from first drop to last.'
  },
  {
    icon: <Smile className="w-6 h-6 text-orange-400" />,
    title: 'Pineapple Fragrance',
    description:
      'A signature tropical aroma that uplifts your senses. It’s fresh, fruity, and makes every wash delightful without being overpowering.'
  }
];

const Ingredients = () => {
  return (
    <div className="p-4 md:p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-700 text-center">What’s Inside Wenwaw?</h2>
        <p className="text-gray-600 text-center mb-10 max-w-3xl md:max-w-2xl mx-auto">
          Every ingredient in Wenwaw Liquid Soap is carefully chosen — for cleansing, lathering, preserving freshness, or adding that signature tropical scent.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {ingredientData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 md:p-6 md:flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-md md:text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
