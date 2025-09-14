import React, { useState } from "react";

const InputField = ({ field, label, icon: Icon, formData, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Helper function to generate input classes dynamically
  const getInputClasses = (isTextArea = false) => {
    const baseClasses = `
      w-full p-4 rounded-xl bg-white/10 text-white placeholder-transparent 
      focus:outline-none focus:ring-2 focus:ring-offset-2 
      focus:ring-offset-[#1c1e26] transition-all duration-300 peer
    `;

    const focusClasses = isFocused
      ? "border-2 border-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_4px_16px_rgba(99,102,241,0.4)]"
      : "border-white/20 hover:border-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500";

    return `${baseClasses} ${focusClasses} ${isTextArea ? "h-52 pt-12" : "pl-12"}`;
  };

  // Render input or textarea based on the field type
  const renderInputContent = () => {
    if (field === "message") {
      return (
        <textarea
          id={field}
          name={field}
          placeholder={label}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={getInputClasses(true)}
          required
        />
      );
    }

    return (
      <input
        id={field}
        type={field === "email" ? "email" : "text"}
        name={field}
        placeholder={label}
        value={formData[field]}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={getInputClasses()}
        required
      />
    );
  };

  return (
    <div className="relative w-full group">
      {/* Icon and Label */}
      <div className="absolute left-4 top-4 flex items-center space-x-2 text-gray-400 transition-colors group-hover:text-cyan-400">
        <Icon className="w-5 h-5" />
        <label
          htmlFor={field}
          className={`
            absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm transition-all duration-300 
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 
            peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-cyan-400 peer-focus:text-sm
          `}
        >
          {label}
        </label>
      </div>

      {/* Input or Textarea */}
      {renderInputContent()}

      {/* Focus/Hover Border Effect */}
      <div
        className={`
          absolute inset-0 rounded-xl pointer-events-none 
          transition-all duration-300 
          ${isFocused ? "border-2 border-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" : "border-transparent"}
        `}
      ></div>
    </div>
  );
};

export default InputField;
