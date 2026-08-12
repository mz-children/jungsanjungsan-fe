import type { Player } from "../store/layoutStore";

interface PersonalLeagueCardProps {
  player1: Player;
  player2: Player;
  leagueName?: string;
}

export default function PersonalLeagueCard({
  player1,
  player2,
  leagueName = "개인전\n그린혼\n[리그]",
}: PersonalLeagueCardProps) {
  const renderLeagueName = () => {
    return leagueName.split("\n").map((line, index) => (
      <span key={index} className="block">
        {line}
      </span>
    ));
  };

  return (
    <div className="flex h-[350px] w-full max-w-[840px] overflow-hidden rounded-[24px] border-[5px] border-gray-500 bg-white">
      {/* 리그 이름 */}
      <div className="flex w-[190px] shrink-0 items-center justify-center bg-sky-100">
        <div className="text-center text-[42px] font-medium leading-[1.45] text-gray-500">
          {renderLeagueName()}
        </div>
      </div>

      {/* 선수 영역 */}
      <div className="flex flex-1 flex-col">
        <PlayerRow player={player1} />
        <PlayerRow player={player2} />
      </div>
    </div>
  );
}

interface PlayerRowProps {
  player: Player;
}

function PlayerRow({ player }: PlayerRowProps) {
  return (
    <div className="flex flex-1 items-center border-b-[5px] border-gray-500 px-10 last:border-b-0">
      {/* 선수 이미지 */}
      <div className="mr-10 h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border-[3px] border-gray-400">
        <img
          src={player.image}
          alt={player.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* 선수 이름 */}
      <span className="text-[42px] font-medium text-gray-800">
        {player.name}
      </span>
    </div>
  );
}
