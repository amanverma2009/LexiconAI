import { User } from "@/components/Icons";
import SecondaryBtn from "@/components/SecondaryBtn";

const page = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    plan: "Pro Plan",
    joined: "March 2024",
  };
  return (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Account Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <User />
            </div>
            <div>
              <h4 className="text-white font-medium">{user.name}</h4>
              <p className="text-gray-400 text-sm">{user.email}</p>
              <p className="text-gray-400 text-sm">
                {user.plan} • Joined {user.joined}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">1,247</div>
              <div className="text-sm text-gray-400">Messages sent</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">89</div>
              <div className="text-sm text-gray-400">Conversations</div>
            </div>
          </div>
          <div className="space-y-3">
            <SecondaryBtn content="Change Password" className="w-full" />
            <SecondaryBtn content="Export Data" className="w-full" />
            <button className="w-full bg-red-600/20 hover:bg-red-600/30 border border-red-500/50 rounded-lg px-4 py-3 text-red-400 transition-all duration-200 whitespace-nowrap">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
