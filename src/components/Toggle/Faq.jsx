import React, { useState } from "react";

const Faq = ({ faqData }) => {
  const { title, description } = faqData;
  const [isOpen, setIsOpen] = useState(false); // FAQ ওপেন/ক্লোজ করার জন্য State

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-3 transition-all duration-300">
      {/* Title and Button Section */}
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
        <button
          className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      {/* Description Section (Visible when isOpen is true) */}
      {isOpen && (
        <p className="mt-2 text-gray-600 transition-all duration-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default Faq;
