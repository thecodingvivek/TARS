import React from "react";

const NinetyFive = () => {

  return (
    <div className="flex w-screen bg-white playtext text-black">
      {/* Sidebar */}
      <aside className="w-52 bg-indigo-100 p-2 border-r-2 border-black h-screen overflow-y-auto">
        <h2 className="playtext text-lg playtext text-blue-800 mb-2 playtext text-center">Macintosh! Games</h2>
        <ul className="list-none space-y-1">
          {["Inside Games", "Leagues", "Tournaments", "All-Star Central", "Downloads", "Games on Demand", "Video Games", "Mobile Games", "Games Shopping"].map((item) => (
            <li key={item}>
              <a href="#" className="playtext text-blue-600 playtext text-xs hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="my-5 p-2 bg-gray-300 border-2 border-black">
          <h3 className="playtext text-sm playtext text-blue-800">My Leagues</h3>
          <p className="playtext text-xs">You are not an All-Star Member</p>
          <a href="#" className="playtext text-xs playtext text-blue-600 hover:underline">Sign up Now!</a>
        </div>
        <div className="p-2 bg-gray-300 border-2 border-black">
          <h3 className="playtext text-sm playtext text-blue-800">Games Newsletter</h3>
          <a href="#" className="playtext text-xs playtext text-blue-600 hover:underline">Sign up for the Yahoo! Games Newsletter</a>
        </div>
        <div className="mt-5">
          <p className="playtext text-xs playtext text-red-800">In Depth Look: SWAT 4</p>
          <p className="playtext text-xs playtext text-red-800">Who's ready for another real-ish shooter? Wait...</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="playtext text-right playtext text-xs playtext text-blue-800 mb-2">77,775 Players Online</div>
        <div className="mb-5 border-2 border-black p-2 bg-blue-50">
          <h2 className="playtext text-sm playtext text-blue-800 mb-2">Today’s Featured Game</h2>
          <div className="flex items-center">
            <img src="/src/assets/game.png" alt="Bejeweled 2" className="w-[300px] mr-2" />
            <div>
              <h3 className="playtext text-xs">Bejeweled 2</h3>
              <p className="playtext text-xs playtext text-red-800">New game pieces, dazzling effects, and awe-inspiring planetary backdrops. <a href="#" className="playtext text-blue-600 hover:underline">Play Now!</a></p>
            </div>
          </div>
        </div>

        <div className="mb-5 border-2 border-black p-2 bg-blue-50">
          <h2 className="playtext text-sm playtext text-blue-800 mb-2">Yahoo! Games Presents</h2>
          <p className="playtext text-xs">Now available for your Verizon phone Wireless Package Game</p>
          <a href="#" className="playtext text-blue-600 hover:underline">Go get them</a>
          <p><a href="#" className="playtext text-xs playtext text-blue-600 hover:underline">Play Robin Hood Now!</a></p>
        </div>

        <div className="mb-5 border-2 border-black p-2 bg-blue-50">
          <h3 className="playtext text-sm playtext text-blue-800">Downloadable Games</h3>
          <div className="flex gap-2 mt-2">
            <img src="/src/assets/robin.png" alt="Magic Ball 2" className="w-[300px]" />
            <img src="/src/assets/robin.png" alt="Magic Ball 2" className="w-[300px]" />
          </div>
          <p><a href="#" className="playtext text-xs playtext text-blue-600 hover:underline">More Downloadable Games...</a></p>
        </div>

        <div className="flex gap-5">
          <div className="flex-1">
            <h3 className="playtext text-sm playtext text-blue-800 mb-1">Card Games</h3>
            <ul className="list-none playtext text-xs space-y-1">
              {["Solitaire", "Bridge", "Cribbage", "Euchre", "Gin", "Hearts"].map((game) => (
                <li key={game}>
                  <a href="#" className="playtext text-blue-600 hover:underline">{game}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="playtext text-sm playtext text-blue-800 mb-1">Arcade & Other Games</h3>
            <ul className="list-none playtext text-xs space-y-1">
              {["Jewel Quest", "PileUp", "Pop and Drop", "Puzzle Inlay", "Q-Bert"].map((game) => (
                <li key={game}>
                  <a href="#" className="playtext text-blue-600 hover:underline">{game}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NinetyFive;
