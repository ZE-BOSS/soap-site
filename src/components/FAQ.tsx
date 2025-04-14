import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';  // Import Chevron icons

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null); // Manage which question is open

  const toggleAnswer = (index: number | null) => {
    setOpen(open === index ? null : index); // Toggle the visibility of the answer
  };

  return (
    <div className="bg-white py-12 px-2 md:px-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-blue-700 mb-8">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="space-y-6 text-md md:text-lg leading-relaxed h-[37rem] overflow-scroll">
          {faqData.map((faq, index) => (
            <div key={index} className={open == index? `bg-blue-50` : ``}>
              <div 
                className="flex items-center justify-between cursor-pointer hover:bg-blue-50 p-4 rounded-lg transition-all"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="font-semibold text-lg md:text-xl text-gray-800">{faq.question}</h3>
                <div className="text-blue-600">
                  {open === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>
              {open === index && (
                <div className="p-2 md:p-4 md:ml-4 bg-blue-50 rounded-lg shadow-md text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: '1. What is Wenwaw Liquid Washing Soap?',
    answer: (
      <>
        Wenwaw is a <em>high-performance, industrial-strength liquid soap</em> designed for heavy-duty washing and
        house cleaning. Available in <strong>4L (household)</strong> and <strong>25L (commercial)</strong> containers,
        it combines powerful surfactants (SLES, SLS) with a refreshing <strong>pineapple scent</strong>.
      </>
    ),
  },
  {
    question: '2. What are the active ingredients?',
    answer: (
      <ul className="list-disc list-inside ml-4">
        <li><strong>SLES & SLS:</strong> Creates rich lather for deep cleaning.</li>
        <li><strong>HEC:</strong> Thickens the formula for better cling.</li>
        <li><strong>Carbonate:</strong> Boosts stain removal.</li>
        <li><strong>Preservatives:</strong> Extends shelf life.</li>
        <li><strong>Pineapple fragrance:</strong> Leaves a tropical freshness.</li>
      </ul>
    ),
  },
  {
    question: '3. Is Wenwaw safe for all surfaces?',
    answer: (
      <>
        Yes! It’s effective on:
        <ul className="list-disc list-inside ml-4">
          <li>Floors (tiles, marble, linoleum)</li>
          <li>Walls</li>
          <li>Utensils</li>
          <li>Fabrics (pre-soak for tough stains)</li>
        </ul>
        <p className="mt-2 italic text-sm text-gray-600">
          Avoid direct use on delicate surfaces like silk or untreated wood.
        </p>
      </>
    ),
  },
  {
    question: '4. How do I dilute Wenwaw for use?',
    answer: (
      <ul className="list-disc list-inside ml-4">
        <li><strong>General cleaning:</strong> 50ml per 5L of water</li>
        <li><strong>Heavy stains:</strong> 100ml per 5L</li>
        <li><strong>Foam machines:</strong> Use undiluted</li>
      </ul>
    ),
  },
  {
    question: '5. Why does it smell like pineapple?',
    answer: (
      <>
        We added a <em>natural-inspired pineapple fragrance</em> to mask chemical odors and leave spaces
        smelling fresh after cleaning.
      </>
    ),
  },
  {
    question: '6. Is Wenwaw environmentally friendly?',
    answer: (
      <ul className="list-disc list-inside ml-4">
        <li>Biodegradable surfactants (SLES/SLS break down safely)</li>
        <li>Phosphate-free</li>
        <li>25L containers are recyclable (check local guidelines)</li>
      </ul>
    ),
  },
  {
    question: '7. How long does a 4L/25L container last?',
    answer: (
      <ul className="list-disc list-inside ml-4">
        <li><strong>4L:</strong> ~80 washes (standard dilution)</li>
        <li><strong>25L:</strong> ~500 washes (ideal for businesses)</li>
      </ul>
    ),
  },
  {
    question: '8. Can I use Wenwaw for handwashing clothes?',
    answer: (
      <>
        Yes, but <strong>wear gloves</strong> for prolonged use (SLES/SLS may dry skin). For machines,
        add directly to the drum.
      </>
    ),
  },
  {
    question: '9. Where can I buy Wenwaw in bulk?',
    answer: (
      <>
        <ul className="list-inside ml-4 space-y-1">
          <li>
            <strong>WhatsApp:</strong>{' '}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              +07043800858
            </a>
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:orders@wenwaw.com" className="text-blue-600 underline">
              orders@wenwaw.com
            </a>
          </li>
        </ul>
        <p className="mt-1 text-sm text-gray-600">Discounts available for 25L purchases!</p>
      </>
    ),
  },
  {
    question: '10. How should I store it?',
    answer: (
      <ul className="list-disc list-inside ml-4">
        <li>Keep in a <strong>cool, dry place</strong> away from sunlight</li>
        <li><strong>Shelf life:</strong> 2 years unopened</li>
      </ul>
    ),
  },
];

export default FAQ;
