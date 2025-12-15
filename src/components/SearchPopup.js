"use client";

const SearchPopup = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="transition w-90 h-80 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-lg p-4 z-50 flex">
      <div className="flex gap-2">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="rounded-xl border border-zinc-300 px-3 py-2 hover:bg-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800 text-sm font-medium text-zinc-800 transition  dark:text-zinc-100 w-full"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="cursor-pointer text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 "
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;
