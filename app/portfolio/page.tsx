import ProjectCard from '@/components/ProjectCard';
import ContactLinks from '@/components/ContactLinks';
import { projects, profile, skillGroups } from '@/lib/data';

export default function Portfolio() {
  return (
    <main className="pt-12 pb-16">
      <h1 className="sr-only">Portfolio</h1>

      <p className="text-dim mb-2">{profile.role}</p>
      <p className="mb-4">{profile.intro}</p>
      <div className="mb-14">
        <ContactLinks />
      </div>

      <h2 className="text-xl font-bold mb-6">Projects</h2>
      <div className="mb-14 space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <h2 className="text-xl font-bold mb-6">Skills</h2>
      {skillGroups.map((group) => (
        <p key={group.category} className="mb-3">
          <span className="font-bold">{group.category}.</span> {group.items.join(', ')}
        </p>
      ))}
    </main>
  );
}
