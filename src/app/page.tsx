import { supabase } from "@/lib/supabaseClient";
import PortfolioView from "@/components/PortfolioView";

export default async function HomePage() {
  const { data: links, error: linksError } = await supabase
    .from("links")
    .select("*");
  const { data: projects, error: projectsError } = await supabase
    .from("projects")
    .select("*");
  const { data: games, error: gamesError } = await supabase
    .from("games")
    .select("*");

  return (
    <PortfolioView
      projects={projects || []}
      games={games || []}
      links={links || []}
    />
  );
}
