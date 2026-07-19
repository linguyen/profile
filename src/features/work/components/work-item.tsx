import type { Work } from "../work.types";

function WorkItem({ work }: { work: Work }) {
  return (
    <article className="card-h reveal group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent md:row-span-2">
      <div className="pf w-full h-64 md:h-80">
        <img src={work.image} alt={work.title} loading="lazy" />
      </div>
      <div className="p-7">
        <div className="flex flex-wrap gap-2 mb-4">
          {work.tags.map((tag, index) => (
            <span
              key={index}
              className={`active text-xs ${index === 0 ? "border border-orange-200 text-orange-600 dark:border-orange-600 dark:text-orange-600" : "bg-zinc-200 text-zinc-600  dark:bg-zinc-800 dark:text-zinc-400"} px-3 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={work.link}>
          <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-2">
            {work.title}
          </h3>
        </a>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
          {work.description}
        </p>
        <a
          href={work.link}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
        >
          View case study{" "}
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default WorkItem;
