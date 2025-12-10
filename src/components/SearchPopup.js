"use client";

const SearchPopup = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="transition w-90 h-80 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-lg p-4 z-50"
    >
        <button onClick={onClose} className="cursor-pointer">
            X
        </button>
      <div onClick={(e) => e.stopPropagation()}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
      </div>
      Search
    </div>
  );
};

export default SearchPopup;
