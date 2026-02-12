import React from "react";
import { Heart } from "lucide-react";
import { useFavoriteTeams } from "../components/FavoriteTeamContext.jsx";


const NBA_TEAMS = [
  { id: "ATL", name: "Atlanta Hawks", logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg" },
  { id: "BOS", name: "Boston Celtics", logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" },
  { id: "BKN", name: "Brooklyn Nets", logo: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg" },
  { id: "CHA", name: "Charlotte Hornets", logo: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg" },
  { id: "CHI", name: "Chicago Bulls", logo: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg" },
  { id: "CLE", name: "Cleveland Cavaliers", logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg" },
  { id: "DAL", name: "Dallas Mavericks", logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg" },
  { id: "DEN", name: "Denver Nuggets", logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg" },
  { id: "DET", name: "Detroit Pistons", logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg" },
  { id: "GSW", name: "Golden State Warriors", logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" },
  { id: "HOU", name: "Houston Rockets", logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg" },
  { id: "IND", name: "Indiana Pacers", logo: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg" },
  { id: "LAC", name: "LA Clippers", logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg" },
  { id: "LAL", name: "Los Angeles Lakers", logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" },
  { id: "MEM", name: "Memphis Grizzlies", logo: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg" },
  { id: "MIA", name: "Miami Heat", logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg" },
  { id: "MIL", name: "Milwaukee Bucks", logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg" },
  { id: "MIN", name: "Minnesota Timberwolves", logo: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg" },
  { id: "NOP", name: "New Orleans Pelicans", logo: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg" },
  { id: "NYK", name: "New York Knicks", logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg" },
  { id: "OKC", name: "Oklahoma City Thunder", logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg" },
  { id: "ORL", name: "Orlando Magic", logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg" },
  { id: "PHI", name: "Philadelphia 76ers", logo: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg" },
  { id: "PHX", name: "Phoenix Suns", logo: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg" },
  { id: "POR", name: "Portland Trail Blazers", logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg" },
  { id: "SAC", name: "Sacramento Kings", logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg" },
  { id: "SAS", name: "San Antonio Spurs", logo: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg" },
  { id: "TOR", name: "Toronto Raptors", logo: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg" },
  { id: "UTA", name: "Utah Jazz", logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg" },
  { id: "WAS", name: "Washington Wizards", logo: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg" },
];

const splitTeamName = (fullName) => {
  const parts = fullName.split(" ");
  const city = parts.slice(0, -1).join(" ");
  const nickname = parts.slice(-1).join(" ");
  return { city: city || fullName, nickname: nickname || "" };
};

const Teams = () => {
  const { favoriteTeams, toggleFavoriteTeam, isTeamFavorite } = useFavoriteTeams();

  return (
    <div className="flex flex-col items-center justify-center mt-32 mb-16 w-full px-3 sm:px-6">
      <p className="text-2xl sm:text-3xl font-bold">NBA Teams</p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-linear-to-r from-[#0d121d] to-[#1a1f2b] p-5 sm:p-8 md:p-10 w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:max-w-6xl">
        <p className="text-lg sm:text-xl font-bold">All Teams</p>
        <div className="my-3 h-px w-full bg-white/10" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {NBA_TEAMS.map((team) => {
            const { city, nickname } = splitTeamName(team.name);
            const isFav = isTeamFavorite(team.id);

            return (
              <div
                key={team.id}
                className="relative rounded-2xl border border-white/10 bg-linear-to-tr from-[#0d121d] to-[#1a1f2b] p-5 text-white shadow-lg transition-transform ease-out hover:scale-[1.02]"
              >
                {/* Heart icon */}
                <button
                  type="button"
                  onClick={() => toggleFavoriteTeam(team)}
                  className="absolute right-4 top-4 rounded-full p-1.5 text-white/60 hover:text-white/90 hover:bg-white/10 transition"
                  aria-label="Favorite team"
                >
                  <Heart className={`h-5 w-5 ${isFav ? "fill-white text-white" : ""}`} />
                </button>

                {/* Logo */}
                <div className="flex justify-center">
                  <img
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    src={team.logo}
                    alt={team.name}
                    loading="lazy"
                  />
                </div>

                {/* Name */}
                <div className="mt-4 text-center leading-tight">
                  <p className="text-base sm:text-lg font-bold">{city}</p>
                  <p className="text-sm text-gray-400">{nickname}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Teams;
