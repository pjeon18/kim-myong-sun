import React from "react";



export default function Citations() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 py-32 bg-gray-950 text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-12 text-center">Reference</h1>
      <div className="max-w-2xl bg-gray-900/80 rounded-xl shadow-xl p-8 flex flex-col items-center">
        <img
          src={process.env.PUBLIC_URL + '/covers/book1.jpg'}
          alt="The Life and Works of Korean Poet Kim Myong-sun by Jung Ja Choi"
          className="w-48 md:w-64 rounded-lg shadow-lg mb-8 border-2 border-pink-300/40"
        />
        <p className="text-xl md:text-2xl mb-8 text-center leading-relaxed">
          Choi, Jung Ja. <span className="italic">The Life and Works of Korean Poet Kim Myong-sun: The Flower Dream of a Woman Born Too Soon.</span> Routledge, 2023.
        </p>
        <a
          href="https://www.routledge.com/The-Life-and-Works-of-Korean-Poet-Kim-Myong-sun-The-Flower-Dream-of-a-Woman-Born-Too-Soon/Choi/p/book/9781032365954?srsltid=AfmBOoq8DclGgKxKOTBmUZ7_fiVnrbU0wXfYFJizCLhmIPJhwDV9FNDh?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold rounded-lg shadow transition"
        >
          View Book on Routledge
        </a>
      </div>
    </main>
  );
}
