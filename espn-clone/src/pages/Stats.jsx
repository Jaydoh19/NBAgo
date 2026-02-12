import React, { useState } from "react";
import { Award } from "lucide-react";
import TopPoints from "../components/TopPoints";
import TopRebounds from "../components/TopRebounds";
import TopAssists from "../components/TopAssists";

const Stats = () => {
  const [stats, setStats] = useState("points"); // 'points' | 'rebounds' | 'assists'

  return (
    <section className="mt-28 mb-15 sm:mt-32 md:mt-36 lg:mt-40 w-full flex justify-center px-3 sm:px-6">
      <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:max-w-5xl">
        <div className="rounded-xl bg-linear-to-tr from-[#0d121d] to-[#1a1f2b] border border-gray-400/20 p-4 sm:p-5 md:p-6 w-full">
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold">
                  Top Performers
                </p>
              </div>

              {/* Tabs: full-width on mobile, compact on sm+ */}
              <div className="flex w-full sm:w-auto bg-slate-700/40 rounded-xl p-1">
                <button
                  onClick={() => setStats("points")}
                  className={`flex-1 sm:flex-none font-semibold px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base transition-colors cursor-pointer ${
                    stats === "points"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Points
                </button>

                <button
                  onClick={() => setStats("rebounds")}
                  className={`flex-1 sm:flex-none font-semibold px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base transition-colors cursor-pointer ${
                    stats === "rebounds"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Rebounds
                </button>

                <button
                  onClick={() => setStats("assists")}
                  className={`flex-1 sm:flex-none font-semibold px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base transition-colors cursor-pointer ${
                    stats === "assists"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Assists
                </button>
              </div>
            </div>

            <hr className="border-gray-400/20 mt-3" />

            {/* Content */}
            <div className="mt-3">
              {stats === "points" ? (
                <TopPoints />
              ) : stats === "rebounds" ? (
                <TopRebounds />
              ) : (
                <TopAssists />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
