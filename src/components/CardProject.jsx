import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Github } from "lucide-react";

const CardProject = ({
  Img,
  Title,
  Description,
  Features,
  Github: GithubLink,
  Link: ProjectLink,
  id,
}) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={Img}
              alt={Title}
              className="w-full h-48 object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mt-4 space-y-2">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {Title}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed">
              {Description}
            </p>

            <ul className="text-sm text-gray-400 list-disc list-inside mt-2">
              {Features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="pt-3 flex items-center justify-between">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  Live Demo <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">
                  Demo Not Available
                </span>
              )}

              {GithubLink && (
                <a
                  href={GithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm"
                >
                  GitHub <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
