import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

// Books component: horizontal scroll, animated covers, buy buttons, and scroll-triggered entrance
function Books() {
  const scrollRef = useRef(null); // Ref for horizontal scroll container
  const controls = useAnimation(); // Framer Motion animation controller
  const sectionRef = useRef(null); // Ref to this whole section for intersection observer

  // Book data: title, description, cover image path, and buy link
  const books = [
    {
      title: "Book Title One",
      description: "A thrilling adventure through the unknown.",
      cover: "/covers/book1.jpg",
      link: "https://www.routledge.com/The-Life-and-Works-of-Korean-Poet-Kim-Myong-sun-The-Flower-Dream-of-a-Woman-Born-Too-Soon/Choi/p/book/9781032365954?srsltid=AfmBOoqDhdNCdHYQ_71cD9lUzEE-9JVRn_Jb6AkrPcTVsp0YqvxCkzGE",
    },
    {
      title: "Book Title Two",
      description: "A heartfelt story of love, loss, and resilience.",
      cover: "https://via.placeholder.com/200x300",
      link: "https://example.com/book2",
    },
    {
      title: "Book Title Three",
      description: "Explore the depths of the human mind in this psychological drama.",
      cover: "/covers/book3.jpg",
      link: "https://example.com/book3",
    },
    {
      title: "Book Title Four",
      description: "A fantasy epic with magical twists.",
      cover: "/covers/book4.jpg",
      link: "https://example.com/book4",
    },
  ];

  // Scroll animation: automatically scrolls the book list horizontally every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll with arrow buttons
  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Scroll-triggered animation (Framer + IntersectionObserver-like)
    useEffect(() => {
    const node = sectionRef.current; // ✅ Copy the ref safely

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
        }
        },
        { threshold: 0.2 }
    );

    if (node) observer.observe(node);

    return () => {
        if (node) observer.unobserve(node);
    };
    }, [controls]);

  return (
    <motion.section
      id="books"
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="relative p-6 bg-gray-50"
    >
      {/* Section title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Books</h2>

      {/* Left arrow button */}
      <button
        onClick={() => scroll(-300)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        aria-label="Scroll left"
      >
        ←
      </button>

      {/* Right arrow button */}
      <button
        onClick={() => scroll(300)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        aria-label="Scroll right"
      >
        →
      </button>

      {/* Horizontal scroll container */}
      <div ref={scrollRef} className="overflow-x-auto pb-4">
        <div className="flex space-x-6 w-max">
          {books.map((book, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition min-w-[250px] max-w-xs"
            >
              {/* Book cover image with hover zoom effect */}
              <motion.img
                src={book.cover}
                alt={`${book.title} cover`}
                whileHover={{ scale: 1.05 }}
                className="w-full h-64 object-cover rounded-md mb-4 shadow-lg"
              />

              {/* Book title */}
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>

              {/* Book description */}
              <p className="text-sm text-gray-700 mb-4">{book.description}</p>

              {/* Animated "Buy Now" button */}
              <motion.a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-blue-700 transition"
              >
                Buy Now
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Books;
