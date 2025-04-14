import React from 'react';
import { Link } from 'react-scroll';
import { Leaf, Droplets, Recycle, Citrus, MessageSquare, Mail, Truck, HelpCircle, Info, Home } from 'lucide-react';
import S1 from "./assets/s1.jpg";
import S2 from "./assets/s2.jpg";
import S3 from "./assets/s3.jpg";
import S4 from "./assets/s4.jpg";
import S5 from "./assets/s5.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold">WENWAW</h1>
            <div className="hidden md:flex space-x-6">
              {['Home', 'About', 'Products', 'Ingredients', 'FAQ', 'Shipping', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen pt-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Experience the Magic of
              <span className="text-blue-600 block">Wenwaw Liquid Soap</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              One Drop Does The Magic - Powerful Cleaning, Gentle on Your Hands
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
                Shop Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="w-8 h-8 text-green-500" />}
              title="Natural Formula"
              description="Made with plant-based cleansers and essential oils"
            />
            <FeatureCard
              icon={<Droplets className="w-8 h-8 text-blue-500" />}
              title="Powerful Clean"
              description="Effective against tough stains and grease"
            />
            <FeatureCard
              icon={<Recycle className="w-8 h-8 text-green-600" />}
              title="Eco-Friendly"
              description="Biodegradable formula and recyclable packaging"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
              <p className="text-gray-600 text-lg">
                At Wenwaw, we believe in creating cleaning solutions that are both powerful and environmentally conscious. 
                Our journey began with a simple mission: to provide households with effective, safe, and sustainable cleaning products.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="bg-green-100 p-2 rounded-full">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </span>
                  <span>98% Natural Ingredients</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-100 p-2 rounded-full">
                    <Droplets className="w-5 h-5 text-blue-600" />
                  </span>
                  <span>Dermatologically Tested</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-yellow-100 p-2 rounded-full">
                    <Citrus className="w-5 h-5 text-yellow-600" />
                  </span>
                  <span>Refreshing Scents</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#e8f4f4] rounded-2xl p-8 shadow-lg">
              <img
                src={S4}
                alt="Eco-friendly Cleaning"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <img
                src={S1}
                alt="4L Multipurpose Liquid Soap"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">4Ls Multipurpose Liquid Soap</h3>
              <p className="text-gray-600 mb-4">Perfect for all your household cleaning needs</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">Get Wenwaw?</span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                  <Link
                    to={"contact"}
                    smooth={true}
                    duration={500}
                  >
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <img
                src={S2}
                alt="2L Multipurpose Liquid Soap"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">4Ls Multipurpose Liquid Soap</h3>
              <p className="text-gray-600 mb-4">Ideal for smaller households and regular use</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">Get Wenwaw?</span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                  <Link
                    to={"contact"}
                    smooth={true}
                    duration={500}
                  >
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <img
                src={S5}
                alt="1L Multipurpose Liquid Soap"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">4Ls Multipurpose Liquid Soap</h3>
              <p className="text-gray-600 mb-4">Perfect for trying out our product</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">Get Wenwaw?</span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                  <Link
                    to={"contact"}
                    smooth={true}
                    duration={500}
                  >
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ingredients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Active Ingredients</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>HEC (Hydroxyethyl Cellulose)</li>
                <li>SLES (Sodium Laureth Sulfate)</li>
                <li>SLS (Sodium Lauryl Sulfate)</li>
                <li>Carbonate</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Additional Components</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Natural Colors</li>
                <li>Safe Preservatives</li>
                <li>Essential Oils</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Benefits</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Effective Cleaning</li>
                <li>Gentle on Hands</li>
                <li>Pleasant Fragrance</li>
                <li>Biodegradable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="What surfaces can I use Wenwaw Liquid Soap on?"
              answer="Wenwaw Liquid Soap is safe to use on most surfaces including countertops, floors, dishes, and fabrics. However, always test on a small area first."
            />
            <FAQItem
              question="Is Wenwaw Liquid Soap eco-friendly?"
              answer="Yes, our formula is biodegradable and our packaging is recyclable. We're committed to minimizing our environmental impact."
            />
            <FAQItem
              question="How long does a 4L bottle typically last?"
              answer="A 4L bottle typically lasts 2-3 months for an average household, depending on usage frequency and dilution."
            />
          </div>
        </div>
      </section>

      {/* Shipping Policy Section */}
      <section id="shipping" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shipping Policy</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Delivery Areas</h3>
                <p className="text-gray-600">We currently deliver to all major cities and surrounding areas.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Shipping Times</h3>
                <p className="text-gray-600">Standard delivery: 3-5 business days<br/>Express delivery: 1-2 business days</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Shipping Costs</h3>
                <p className="text-gray-600">Shipping fee may vary depending on distance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          
          <div className="max-w-2xl mx-auto space-y-8">
            <form
              action="mailto:seller@example.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>

            {/* Quick Contact Buttons */}
            <div className="flex justify-center gap-6 mt-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/2348012345678?text=Hi%20there!%20I'm%20interested%20in%20Wenwaw%20Liquid%20Soap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 border border-green-600 px-5 py-2 rounded-md hover:bg-green-50"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              {/* Direct Email */}
              <a
                href="mailto:seller@example.com?subject=Inquiry%20about%20Wenwaw%20Soap"
                className="flex items-center gap-2 text-blue-600 border border-blue-600 px-5 py-2 rounded-md hover:bg-blue-50"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Wenwaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-blue-600" />
        {question}
      </h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

export default App;