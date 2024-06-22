"use client";
import { useEffect, useState } from "react";

const Terminal = () => {
  const [displayText, setDisplayText] = useState("");
  const text =
    "> npm run dev \n> kyoto-kanko-tech-blog@0.1.0 dev \n> next de  ▲ Next.js 14.2.4\n> -Local:http://localhost:3000\n> ✓Starting...\n> ✓Readyin1331ms\n> ○Compiling/...\n> ✓Compiled/in1146ms(528modules)";

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [index]);

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="bg-gray-800 text-white font-mono p-2 rounded-t-lg flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm">kyoto-kanko -- -zsh -- 80x24</div>
        <div></div>
      </div>
      <div className="bg-black text-green-500 font-mono p-4 rounded-b-lg whitespace-pre-wrap">
        {displayText}
      </div>
    </div>
  );
};

export default Terminal;
