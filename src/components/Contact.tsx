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
    <div className="md:px-4 py-3 md:py-6">
      <div className="max-w-4xl md:max-w-3xl mx-auto p-2 md:p-8 spacey-3 md:space-y-6">
        <div className="text-center">
          <h3 className="text-md md:text-3xl font-extrabold text-blue-800">Get In Touch</h3>
          <p className="mt-2 text-xs md:text-lg text-gray-600">Have questions or bulk orders? We’re here to help.</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-3">
          {/* Name Field */}
          <div>
            <div className="relative">
              <User className="absolute top-3 left-2 text-gray-400 w-3 h-3 mb:w-5 mb:h-5" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-8 md:pl-10 md:pr-4 py-2 border text-xs md:text-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <div className="relative">
              <AtSign className="absolute top-3 left-2 text-gray-400 w-3 h-3 mb:w-5 mb:h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-8 md:pl-10 md:pr-4 py-2 border text-xs md:text-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <div className="relative">
              <Pencil className="absolute top-3 left-2 text-xs text-gray-400 w-3 h-3 mb:w-5 mb:h-5" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-8 md:pl-10 md:pr-4 py-2 text-xs md:text-md border rounded-lg resize-none h-20 md:h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              />
            </div>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={handleSendEmail}
            className="w-full flex items-center text-sm md:text-base justify-center gap-2 border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            <Mail className="w-4 h-4 mb:w-5 mb:h-5" />
            <span>Send Email</span>
          </button>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-sm md:text-base flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <MessageSquare className="w-4 h-4 mb:w-5 mb:h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
