import React from 'react';
import { Leaf, Star, Factory, Smile, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            About Wenwaw
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            <em>Powerful Cleaning, Tropical Freshness</em>
          </p>
        </div>

        {/* Who We Are */}
        <section className="p-4 md:p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Wenwaw</strong> is a trusted manufacturer of 
            <span className="text-blue-800 font-medium"> high-performance liquid washing soap</span>, 
            designed for <strong>heavy-duty cleaning</strong> in homes and commercial spaces. 
            Our formula blends <em>industrial-strength surfactants</em> like 
            <strong> SLES, SLS, and HEC</strong> with a refreshing <strong>pineapple fragrance</strong>, 
            offering unmatched cleanliness without compromising on freshness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We specialize in <strong>bulk solutions</strong> 
            (<span className="text-blue-800 font-medium">4L and 25L containers</span>), making Wenwaw the go-to choice for:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 list-disc list-inside pl-4">
            <li>
              <strong>Households</strong> needing long-lasting cleaning supplies.
            </li>
            <li>
              <strong>Janitorial services</strong> requiring cost-effective, efficient products.
            </li>
            <li>
              <strong>Hotels, schools, and restaurants</strong> prioritizing hygiene and tropical freshness.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
