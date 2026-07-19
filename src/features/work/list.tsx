import WorkCard from "./components/work-card";
import { works } from "./work.data";

function WorkList() {
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
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}

export default WorkList;
