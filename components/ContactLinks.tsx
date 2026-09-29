import { LinkedinIcon, Github } from 'lucide-react';
import { profile } from '@/lib/data';
import { btn } from '@/lib/styles';

export default function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      
      <a href={profile.contacts.linkedin} target="_blank" rel="noopener noreferrer" className={btn}>
        <LinkedinIcon size={20} /> LinkedIn
      </a>
      <a href={profile.contacts.github} target="_blank" rel="noopener noreferrer" className={btn}>
        <Github size={20} /> GitHub
      </a>
      <a href={`mailto:${profile.contacts.email}`} className="underline underline-offset-2 hover:text-accent">
        {profile.contacts.email}
      </a>
    </div>
  );
}
