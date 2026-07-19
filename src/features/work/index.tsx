import { Link } from "react-router-dom";
import { works } from "./work.data";
import WorkItem from "./components/work-item";

function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
              Selected work
            </h2>
          </div>
          <Link
            to="/work"
            className="reveal d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl"
          >
            All projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work) => (
            <WorkItem key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
