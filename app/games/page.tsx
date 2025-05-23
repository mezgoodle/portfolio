import GameCard from "@/components/GameCard";
import { supabase } from "@/lib/supabaseClient";

export default async function games() {
  const { data: games } = await supabase.from("games").select();
  if (!games) {
    return <p>No games found</p>;
  }
  return (
    <div className="container">
      <h1 className="my-4">Games</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {games.map((game) => (
          <div key={game.id} className="col">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
}
