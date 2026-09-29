import { timelineData } from '@/lib/data';
import ContactLinks from '@/components/ContactLinks';

export default function About() {
  return (
    <main className="pt-12 pb-16">
      <h1 className="text-3xl font-bold mb-4">Hello, I&apos;m Gabin</h1>
      <p className="mb-4">
        I&apos;m a master&apos;s student passionate about Data Science on a work-study as a BPM Developer.
      </p>
      <div className="mb-14">
        <ContactLinks />
      </div>

      <h2 className="text-xl font-bold mb-6">Background</h2>
      <div>
        {timelineData.map((item) => (
          <section key={item.id} id={item.id} className="py-6 border-t border-border first:border-t-0 first:pt-0">
            {item.dateRange && <p className="text-sm text-dim">{item.dateRange}</p>}
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-dim mb-2">
              {item.company}{item.location && `, ${item.location}`}
            </p>
            {item.description && <p className="mb-2">{item.description}</p>}
            {item.bullets && (
              <ul className="list-disc pl-5 space-y-1">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
