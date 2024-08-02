import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from "@/components";
import { Accounts } from "@/icons";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <div className=" @container flex justify-between items-center flex-wrap gap-8 @sm:flex-col @lg:flex-col">
        <SectionHeader
          icon={
            <>
              <Accounts height="28" width="28" />
              <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
            </>
          }
          title="About Me"
          description={
            <div>
              Expert{" "}
              <span className="text-about_me_green">
                {" "}
                Full Stack Developer{" "}
              </span>{" "}
              Transforming Ideas into Stunning{" "}
              <span className="text-about_me_green"> Web Solutions </span>
            </div>
          }
        />
        <div className="flex-none  mx-auto order-1 lg:order-2">
          <Image
            className="rounded-full object-cover"
            src="/me.png"
            alt=""
            height={208}
            width={208}
          />
        </div>
      </div>
      <Stars id="about-me" />

      <div className="@container">
        <div className="gap-8 mt-12 @lg:flex-row justify-between">
          {/* Image on the right side */}
          <div className="max-w-xl flex-auto order-2 lg:order-1">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
              Hayder Aly
            </h3>
            <p className="text-base leading-7 text-white">Lahore, Pakistan</p>
            <p className="text-base leading-7 text-about_me_green">
              {" "}
              Frontend Engineer | React Developer | Full Stack Web Developer
            </p>
          </div>
        </div>
        {/* Paragraphs taking full width */}
        <div className="mt-4 text-lg text-gray-500">
          {/* Your paragraphs here */}
          <p className="mt-4">
            Experienced software engineer who constantly seeks out
            innovative solutions to everyday problems.
          </p>
          <p className="break-words">
            As an experienced software engineer with over 3 years in Web Development, I specialize as a Full Stack Developer with a strong emphasis on React and Node.js. I have a proven track record of designing and implementing robust, scalable, and high-performance web applications. My expertise lies in JavaScript and its modern frameworks, and I prioritize writing clean, efficient, and well-documented code to deliver high-quality software solutions.

            My skills include developing responsive user interfaces, creating robust backend APIs, managing database operations, implementing secure authentication mechanisms, optimizing server performance, and ensuring seamless communication between frontend and backend layers. I thrive in collaborative, cross-functional teams, am well-versed in Agile Methodology, and committed to continuous learning and professional growth.
          </p>
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-about_me_green mb-1">| Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Urdu</p> -{" "}
                      <p className="text-gray-500">Native</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> -{" "}
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">German</p> -{" "}
                      <p className="text-gray-500"> A2 </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <Socials />
            </div>
            <FadeIn
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <GlowCard
                className="hover:shadow-about_me_green/90"
                glowClassName="from-[#6bc072] to-[#6bc072]"
              >
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image
                      className="rounded-1xl object-fill"
                      src="/tec.png"
                      alt=""
                      width={144}
                      height={144}
                    />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                      B.S. in Computer Science and Technology
                    </h3>
                    <p className="text-base leading-7 text-about_me_green">
                      Virtual University, Lahore, Pakistan
                    </p>
                    <p className="text-base leading-7 text-about_me_green">
                      Mar 2017 - Mar 2021
                    </p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
