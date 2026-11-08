import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollRange = docHeight - winHeight;
      
      const scrollPercentage = totalScrollRange > 0 
        ? (scrollTop / totalScrollRange) * 100 
        : 0;

      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-1 z-[60] pointer-events-none translate-y-full">
      <div
        className="relative h-full bg-primary transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      >
        {/* Aumentamos el tamaño a 22px y el resplandor */}
        <span 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-[22px] leading-none drop-shadow-[0_0_8px_rgba(212,175,55,0.9)]"
        >
          🖱️
        </span>
      </div>
    </div>
  );
}