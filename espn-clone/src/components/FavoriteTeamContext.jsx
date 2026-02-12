import { createContext, useContext, useEffect, useState } from "react";

const FavoriteTeamContext = createContext(null);

export const FavoriteTeamProvider = ({ children }) => {
  const [favoriteTeams, setFavoriteTeams] = useState(() => {
    const raw = localStorage.getItem("favoriteTeams");
    try {
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favoriteTeams", JSON.stringify(favoriteTeams));
  }, [favoriteTeams]);

  const isTeamFavorite = (teamId) => favoriteTeams.some((t) => t.id === teamId);

  const toggleFavoriteTeam = (team) => {
    setFavoriteTeams((prev) => {
      const exists = prev.some((t) => t.id === team.id);
      return exists ? prev.filter((t) => t.id !== team.id) : [...prev, team];
    });
  };

  const value = { favoriteTeams, toggleFavoriteTeam, isTeamFavorite };

  return (
    <FavoriteTeamContext.Provider value={value}>
      {children}
    </FavoriteTeamContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavoriteTeams = () => {
  const ctx = useContext(FavoriteTeamContext);
  if (!ctx) throw new Error("useFavoriteTeams must be used inside FavoriteTeamProvider");
  return ctx;
};
