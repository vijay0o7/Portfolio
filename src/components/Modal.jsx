import React, { useState } from "react";
import { Eye, ArrowRight, ExternalLink } from "lucide-react";

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Open Modal Button */}
      <button
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white transition-all duration-300 hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm font-medium">Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-xl bg-gradient-to-br from-[#0c0f1d]/80 to-[#1e1b2f]/80 p-6 shadow-2xl backdrop-blur-lg text-white animate-slide-up sm:p-8 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 rounded-md p-2 hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Eye className="h-5 w-5 text-white" />
            </button>

            {/* Title & Description */}
            <h2 className="mb-4 text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="mb-6 text-gray-300">{description}</p>

            {/* Actions */}
            <div className="flex justify-end space-x-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-4 py-2 font-medium hover:scale-105 transition-all duration-200 flex items-center gap-1"
              >
                Live Demo <ExternalLink className="ml-1 h-5 w-5" />
              </a>
              <button
                className="rounded-md bg-gray-800 px-4 py-2 font-medium hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;
