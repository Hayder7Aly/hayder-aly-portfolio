import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Venturenox | Software Engineer.',
    location: 'New York City, New York | Remote',
    date: 'March 2021 - Present',
    description: [
      'Collaborate with the team to analyze product requirements and estimate the effort required for project tasks.',
      'Design and implement scalable and maintainable architecture for React projects using reusable and efficient React components.',
      'Ensure high-quality code by following best practices and coding standards',
      'Develop and maintain scalable and highly optimized Restful APIs and Microservices using JavaScript technologies, specifically React for the frontend and Node.js for the backend.',
      'Ensure high-quality code by following best practices and coding standards.',
      'Write unit tests, integration tests, and end-to-end tests for React components.',
      'Work within an Agile methodology, participating in scrum meetings and sprint planning.',
      'Optimize application performance by identifying bottlenecks and areas for improvement.'
    ],
    image: { url: '/work/venturenox.jpeg', height: 60, width: 140, className: 'bg-white' },
  },
  // {
  //   title: 'Nextbridge | Software Engineer.',
  //   location: 'Lahore, Pakistan | On-site',
  //   date: 'Nov 2021 - Jul 2023',
  //   description: [
  //     'Collaborated with cross-functional teams to understand project requirements, translate business needs into technical specifications, and create an effective development plan',
  //     'Developing and maintaining reusable React components for consistent front-end development.',
  //     'Managed and maintained Redux store data for efficient state management within the application.',
  //     'Successfully integrated third-party APIs and backend services into the application, expanding its functionality and providing enhanced features to users.',
  //     'Contributed to the design and implementation of a scalable architecture, utilizing modular and reusable code components, design patterns, and efficient data structures.',
  //     'Optimized rendering and data fetching processes, resulting in significantly improved application loading times.',
  //     ' Conducted thorough code analysis, system testing, and debugging to ensure the reliability and stability of implemented solutions.',
  //     'Addressing and resolving reported bugs and issues for ongoing maintenance and support.'
  //   ],
  //   image: { url: '/work/next.jpeg', height: 60, width: 140, className: '' },
  // },


];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} location={item.location} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, location, date, image }: { children: React.ReactNode; title: string; location: string, date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="font-semibold text-white text-lg">{location}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
