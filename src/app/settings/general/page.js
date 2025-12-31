import ThemeToggle from "../components/ThemeToggle";

const page = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          General Settings
        </h3>
        <div className="space-y-4">
          <ThemeToggle />
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Language
            </label>
            <select className="w-full bg-gray-800/80 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:border-blue-500/50 outline-none transition-all duration-200 pr-8">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-300">
                Auto-save conversations
              </label>
              <p className="text-xs text-gray-400 mt-1">
                Automatically save your chat history
              </p>
            </div>
            <button className="relative w-12 h-6 rounded-full transition-all duration-200 bg-linear-to-r from-blue-600 to-purple-600">
              <div className="absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all duration-200 left-6"></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-300">
                Push notifications
              </label>
              <p className="text-xs text-gray-400 mt-1">
                Receive notifications for important updates
              </p>
            </div>
            <button className="relative w-12 h-6 rounded-full transition-all duration-200 bg-linear-to-r from-blue-600 to-purple-600">
              <div className="absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all duration-200 left-6"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
