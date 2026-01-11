import { useState } from "react";
import { dummyTrailers } from "../assets/assets";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <section className="bg-black px-6 md:px-16 lg:px-24 xl:px-44 py-20">
      
      {/* Heading */}
      <h2 className="text-white text-lg font-medium mb-6">
        Trailers
      </h2>

      {/* VIDEO PLAYER */}
      <div className="max-w-[960px] mx-auto rounded-xl overflow-hidden bg-black border border-gray-800">
        <video
          key={currentTrailer.videoUrl}
          src={currentTrailer.videoUrl}
          poster={currentTrailer.image}
          controls
          preload="metadata"
          className="w-full h-[540px] bg-black"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="mt-8 max-w-[960px] mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {dummyTrailers.map((trailer, index) => {
            const isActive = currentTrailer.title === trailer.title;

            return (
              <button
                key={index}
                onClick={() => setCurrentTrailer(trailer)}
                className={`flex-shrink-0 text-left transition ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {/* IMAGE */}
                <img
                  src={trailer.image}
                  alt={trailer.title}
                  className={`w-[160px] h-[90px] object-cover rounded-md border-2 ${
                    isActive
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                />

                {/* TITLE */}
                <p className="mt-2 text-sm text-white truncate w-[160px]">
                  {trailer.title}
                </p>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default TrailersSection;
