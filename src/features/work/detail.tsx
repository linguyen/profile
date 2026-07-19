import { Link, useParams } from 'react-router-dom'
import { works } from './work.data'

function WorkDetail() {
  const { workLink } = useParams()
  const work = works.find((item) => item.link === `/work/${workLink}`)

  if (!work) {
    return (
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="font-display font-bold text-4xl text-zinc-900 dark:text-white mb-4">Project not found</h1>
          <Link to="/work" className="text-sm font-medium text-accent nl">Back to all projects</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/work" className="inline-flex mb-8 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent nl">
          Back to all projects
        </Link>
        <img src={work.image} alt={work.title} className="w-full h-80 object-cover rounded-2xl mb-8" />
        <h1 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white mb-4">{work.title}</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">{work.description}</p>
      </div>
    </section>
  )
}

export default WorkDetail