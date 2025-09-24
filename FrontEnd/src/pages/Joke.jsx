import React from "react";

const videos = [
  {
    title: "I love Lookism",
    views: "77K views",
    time: "1 day ago",
    duration: "8:13",
    thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
  },
  {
    title: "I love Japan",
    views: "74K views",
    time: "4 days ago",
    duration: "9:03",
    thumbnail: "https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg",
  },
  {
    title: "LOOKISM IS THE BEST",
    views: "144K views",
    time: "8 days ago",
    duration: "8:59",
    thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg",
  },
  {
    title: "Perfect Diet Doesn't Exist 😭 (Dank Memes 😁)",
    views: "77K views",
    time: "11 days ago",
    duration: "9:15",
    thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
  },
];

export default function App() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white font-sans">
      {/* Banner */}
      <div className="relative w-full h-[210px] bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=1200&q=80"
          alt="Channel Art"
          className="w-full h-full object-cover"
        />
        {/* Profile avatar */}
        <div className="absolute left-8 -bottom-16 flex items-center gap-6">
          <img
            src="https://ui-avatars.com/api/?name=Priffith&background=f00&color=fff&size=128"
            alt="Channel Avatar"
            className="rounded-full border-4 border-[#0f0f0f] w-32 h-32"
          />
          {/* Channel Info */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-bold text-2xl">Priffith</h2>
              <span className="text-gray-400 text-xl">✔️</span>
            </div>
            <div className="text-sm text-gray-300">@uchihabrothers</div>
            <div className="text-sm text-gray-300 mt-1">
              139K subscribers • 154 videos
            </div>
            <div className="text-xs text-gray-400 ml-px">
              <span>
                Work: <a href="mailto:workforpriffith@gmail.com" className="hover:underline">workforpriffith@gmail.com</a>
              </span>
              <span className="ml-2">
                <a href="https://youtube.com/@UchihaBrothers" className="text-blue-300 hover:underline">
                  youtube.com/@UchihaBrothers
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Channel Actions & Tabs */}
      <div className="pt-20 max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-wrap px-8">
          <div></div> {/* empty for spacing */}
          <div className="flex gap-2 flex-wrap">
            <button className="bg-white text-black font-semibold px-5 py-2 rounded hover:bg-blue-200 text-sm">
              Subscribe
            </button>
            <button className="bg-gray-700 text-white px-5 py-2 rounded border border-gray-600 hover:bg-gray-600 text-sm">
              Join
            </button>
            <button className="bg-[#272727] text-white px-4 py-2 rounded border border-gray-700 hover:bg-gray-800 text-sm">
              Contact
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 border-b border-gray-800 px-8">
          <button className="py-3 border-b-2 border-white font-bold">Home</button>
          <button className="py-3 text-gray-400 hover:text-white">Videos</button>
          <button className="py-3 text-gray-400 hover:text-white">Playlists</button>
          <button className="py-3 text-gray-400 hover:text-white">Community</button>
          <button className="py-3 text-gray-400 hover:text-white">Channels</button>
          <button className="py-3 text-gray-400 hover:text-white">About</button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {videos.map((vid, idx) => (
          <div key={idx} className="bg-[#16181b] p-2 rounded-lg transition hover:bg-[#23262b]">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-xs px-2 py-0.5 rounded text-gray-200">{vid.duration}</span>
            </div>
            <div className="mt-3">
              <div className="font-semibold leading-tight">{vid.title}</div>
              <div className="text-gray-400 text-xs mt-1">{vid.views} • {vid.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

