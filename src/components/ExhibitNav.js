export default function ExhibitNav({ isVisible, onToggle, onPrev, onNext, showPrev, showNext }) {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 bg-black bg-opacity-70 z-50">
      <button
        onClick={onToggle}
        className="text-white text-xl hover:text-gray-300"
        aria-label="Toggle Navigation"
      >
        {isVisible ? "▲" : "▼"}
      </button>
      {isVisible && (
        <div className="flex gap-6">
          {showPrev && (
            <button onClick={onPrev} className="text-white underline text-lg hover:text-gray-300">
              Previous Poem
            </button>
          )}
          {showNext && (
            <button onClick={onNext} className="text-white underline text-lg hover:text-gray-300">
              Next Poem
            </button>
          )}
        </div>
      )}
    </div>
  );
}
