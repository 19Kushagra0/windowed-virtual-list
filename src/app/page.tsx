"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const BOX_HEIGHT = 40;
const TOTAL_BOX = 50000;
const SCREEN_HEIGHT = 400;

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollTopRef = useRef(0);

  const [currentRow, setCurrentRow] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) {
      return;
    }
    scrollTopRef.current = scrollRef.current.scrollTop;
    setCurrentRow(Math.floor(scrollTopRef.current / BOX_HEIGHT));
    console.log(currentRow);
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={{ height: SCREEN_HEIGHT }}
      className="w-full bg-green-400 overflow-auto relative"
    >
      <div
        style={{ height: TOTAL_BOX * BOX_HEIGHT }}
        className="w-full bg-blue-400"
      >
        <div
          style={{
            height: BOX_HEIGHT,
            position: "absolute",
            top: currentRow * BOX_HEIGHT,
          }}
          className="bg-red-400 w-full flex p-4 items-center"
        >
          row {currentRow}
        </div>
      </div>
    </div>
  );
}
