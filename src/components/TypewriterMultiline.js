import { useEffect, useRef, useState } from "react";

export default function TypewriterMultiline({ lines = [], className, onComplete, colorClass = "text-white" }) {
  const [displayedLines, setDisplayedLines] = useState(Array(lines.length).fill(""));
  const [isTyping, setIsTyping] = useState(true);
  const lineRef = useRef(0);
  const charRef = useRef(0);

  useEffect(() => {
    if (!lines || lines.length === 0) return;
    const interval = setInterval(() => {
      const line = lineRef.current;
      const char = charRef.current;
      if (!lines[line] || !lines[line][char]) {
        lineRef.current++;
        charRef.current = 0;
        if (lineRef.current >= lines.length) {
          clearInterval(interval);
          setIsTyping(false);
          onComplete?.();
        }
        return;
      }
      setDisplayedLines((prev) => {
        const updated = [...prev];
        updated[line] += lines[line][char];
        return updated;
      });
      charRef.current++;
    }, 80);
    return () => clearInterval(interval);
  }, [lines, onComplete]);

  const currentTypingLine = displayedLines.findIndex((l, i) => l.length < (lines[i]?.length || 0));

  return (
    <div className="text-left max-w-5xl mx-auto">
      {displayedLines.map((line, i) => (
        <h1
          key={i}
          className={`${className} ${colorClass} ${i === 0 ? "" : "mt-4"}`}
        >
          {line}
          {i === currentTypingLine && isTyping && <span className="animate-pulse">|</span>}
        </h1>
      ))}
    </div>
  );
}
