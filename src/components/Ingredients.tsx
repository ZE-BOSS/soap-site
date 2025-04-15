import React from 'react';
import {
  Leaf,
  Feather,
  Apple,
  Salad
} from 'lucide-react';
import { Card, CardContent } from "./Card"; 

const Ingredients = () => {
  return (
    <section className="text-center p-4 md:p-10 mt-6">
      <h2 className="text-2xl font-bold mb-8">Why Choose Wenwaw?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        <Card className='flex justify-center items-center bg-blue-50'> 
          <CardContent className="flex p-2 md:p-4 gap-1 md:gap-4">
            <Leaf size={90} color='lightgreen' />
            <div className='text-left'>
              <h3 className="font-semibold">Natural Formula</h3>
              <p className="text-sm">Made with plant-based cleansers and essential oils</p>
            </div>
          </CardContent>
        </Card>
        <Card className='flex justify-center items-center bg-blue-50'> 
          <CardContent className="flex p-2 md:p-4 gap-2 md:gap-4">
            <Feather size={70} color='lightgreen' />
            <div className='text-left'>
              <h3 className="font-semibold">Moisturizing</h3>
              <p className="text-sm">Enriched glycerin to prevent skin dryness</p>
            </div>
          </CardContent>
        </Card>
        <Card className='flex justify-center items-center bg-blue-50'> 
          <CardContent className="flex p-2 md:p-4 gap-2 md:gap-4">
            <Salad size={80} color='lightgreen' />
            <div className='text-left'>
              <h3 className="font-semibold">Eco-Conscious</h3>
              <p className="text-sm">Biodegradable formula & recyclable packaging</p>
            </div>
          </CardContent>
        </Card>
        <Card className='flex justify-center items-center bg-orange-50'> 
          <CardContent className="flex p-2 md:p-4 gap-2 md:gap-4">
            <Apple size={90} color='orange' />
            <div className='text-left'>
              <h3 className="font-semibold">Delightful Scents</h3>
              <p className="text-sm">Available in lavender, citrus, and more</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

  );
};

export default Ingredients;
