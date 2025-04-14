import React, { useState } from 'react';
import { MessageSquare, Mail, User, AtSign, Pencil } from 'lucide-react';

interface Validator {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Validator>({} as Validator);

  const handleSendEmail = () => {
    const validationErrors: Validator = {} as Validator;

    if (!name) validationErrors.name = 'Name is required';
    if (!email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = 'Please enter a valid email address';
    if (!message) validationErrors.message = 'Message cannot be empty';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:support@wenwaw.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-blue-50 md:px-4 py-12">
      <div className="max-w-4xl md:max-w-3xl mx-auto p-2 md:p-8 space-y-8">
        <div className="text-center">
          <h3 className="text-xl md:text-3xl font-extrabold text-blue-800">Get In Touch</h3>
          <p className="mt-2 text-sm md:text-lg text-gray-600">Have questions or bulk orders? We’re here to help.</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <AtSign className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@example.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <div className="relative">
              <Pencil className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here..."
              />
            </div>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={handleSendEmail}
            className="w-full flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            <Mail className="w-5 h-5" />
            <span>Send Email</span>
          </button>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
