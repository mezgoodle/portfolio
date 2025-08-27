interface TimelineItemProps {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const TimelineItem = ({
  year,
  title,
  duration,
  details,
}: TimelineItemProps) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-teal-400 after:border-4 after:box-content after:border-gray-800 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time
        dateTime={year}
        className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-teal-400 bg-gray-800 rounded-full"
      >
        {year}
      </time>
      <div className="text-xl font-bold text-white">{title}</div>
    </div>
    <div className="text-gray-400 sm:pl-32">
      <p className="text-sm font-medium">{duration}</p>
      <p className="mt-2">{details}</p>
    </div>
  </div>
);

export default function Timeline() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold text-center mb-12">My journey</h2>
      <div>
        <TimelineItem
          year="2024"
          title="Started work as an Integrations Developer"
          duration="2024 - present"
          details="Start my official work at Jome as Integrations Developer."
        />
        <TimelineItem
          year="2023"
          title="Master's Degree in Computer Science"
          duration="2023 - 2024"
          details="Gained more research experience and participated in projects."
        />
        <TimelineItem
          year="2019"
          title="Bachelor's Degree in Computer Science"
          duration="2019 - 2023"
          details="Improve my skills and knowledge in the field of computer science with a focus on web development."
        />
        <TimelineItem
          year="2018"
          title="Intro to Programming"
          duration="2018 - 2019"
          details="Wrote my first Hello, World! program in Python and can't stop learning."
        />
      </div>
    </section>
  );
}
