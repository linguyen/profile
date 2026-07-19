import { Link } from "react-router-dom";
import type { Work } from "../work.types";

function WorkCard({ work }: { work: Work }) {
  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden mb-4">
      <div className="md:w-1/3">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-48 object-cover md:h-full mb-4 md:mb-0"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2">{work.title}</h3>
        <p className="text-gray-600 mb-4">{work.description}</p>
        {work.tags && work.tags.length > 0 && (
          <div className="mb-4">
            {work.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
            ))}
          </div>
        )}
        <Link to={work.link} className="text-orange-500 hover:underline">
          View Case Study
        </Link>
      </div>
    </div>
  );
}

export default WorkCard;
