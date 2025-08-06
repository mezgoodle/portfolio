import { supabase } from "@/lib/supabaseClient";
import PortfolioView from "@/components/PortfolioView";

export default async function HomePage() {
  const [projectsRes, gamesRes, linksRes] = await Promise.all([
    supabase.from("projects").select("*"),
    supabase.from("games").select("*"),
    supabase.from("links").select("*"),
  ]);

  console.log("Projects:", projectsRes.data);

  return (
    <PortfolioView
      projects={projectsRes.data || []}
      games={gamesRes.data || []}
      links={linksRes.data || []}
    />
  );
}
