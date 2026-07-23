import WorkCard from "../work/components/work-card";
import { works } from "../work/work.data";

function Search() {
  const queryParams = new URLSearchParams(window.location.search);
  const searchQuery = queryParams.get("q") || "";

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            All projects
          </h1>
        </div>
        {works
          .filter((work) =>
            work.title.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
      </div>
    </section>
  );
}

export default Search;
