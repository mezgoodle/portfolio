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
    {/* Декоративна точка і лінія */}
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-teal-400 after:border-4 after:box-content after:border-gray-800 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-teal-400 bg-gray-800 rounded-full">
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
      <h2 className="text-4xl font-bold text-center mb-12">Мій шлях</h2>
      <div>
        <TimelineItem
          year="2023"
          title="Початок кар'єри як Freelance Developer"
          duration="2023 - дотепер"
          details="Працював над різноманітними проектами для клієнтів, від простих лендінгів до складних веб-додатків, використовуючи React, Next.js та Node.js."
        />
        <TimelineItem
          year="2022"
          title="Перший великий особистий проект"
          duration="3 місяці"
          details="Створив додаток для відстеження ігрової колекції, що стало моєю дипломною роботою. Це був перший досвід роботи з Supabase."
        />
        <TimelineItem
          year="2019"
          title="Вступ до [Назва вашого університету]"
          duration="2019 - 2023"
          details="Навчався за спеціальністю 'Комп'ютерні науки'. Отримав глибокі знання з алгоритмів, структур даних та архітектури програмного забезпечення."
        />
        <TimelineItem
          year="2018"
          title="Зацікавленість програмуванням"
          duration="Початок"
          details="Написав свою першу програму 'Hello, World!' на Python і зрозумів, що це моє покликання."
        />
      </div>
    </section>
  );
}
