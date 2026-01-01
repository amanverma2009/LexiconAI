import ThemeToggle from "../components/ThemeToggle";
import LanguageSelector from "../components/LanguageSelector";

const page = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          General Settings
        </h3>
        <div className="space-y-4">
          <ThemeToggle />
          <LanguageSelector />
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
