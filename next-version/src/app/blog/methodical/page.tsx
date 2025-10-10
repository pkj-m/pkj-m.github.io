import Link from 'next/link';
import CanvasAnimation from '@/components/CanvasAnimation';
import GlitchTitle from '@/components/GlitchTitle';
import Wrapper from '@/components/Wrapper';
import ReadingProgress from '@/components/ReadingProgress';
import BackToTop from '@/components/BackToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodical: My Obsession with Order - Pankaj Mishra',
  description: 'A personal reflection on organization, planning, and the lifelong pursuit of order—from childhood timetables to adult calendar obsessions.',
  openGraph: {
    type: 'article',
    url: 'https://pkj-m.github.io/blog/methodical',
    title: 'Methodical: My Obsession with Order',
    description: 'A personal reflection on organization, planning, and the lifelong pursuit of order—from childhood timetables to adult calendar obsessions.',
    siteName: 'Pankaj Mishra',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pkj__m',
    creator: '@pkj__m',
  },
};

export default function MethodicalPost() {
  return (
    <>
      <ReadingProgress />
      <BackToTop />
      <CanvasAnimation />
      <Wrapper className="blog-post">
          <div className="text-sm my-8 leading-[1.7]">
            <Link href="/blog" className="text-inherit transition-all duration-200 inline-block relative hover:opacity-60 hover:translate-y-[-1px] active:translate-y-0 active:scale-[0.98] underline">
              ← Back to Blog
            </Link>
          </div>

          <div>
            <GlitchTitle
              text="BLOG"
              glitchText="BLओG"
              className="m-0 text-[72px] font-light tracking-[16px] max-md:text-[48px] max-md:tracking-[8px]"
            />
          </div>

          <div className="mt-8">
            <div className="max-w-[650px] mx-auto">
              <h2 className="text-[28px] font-medium mb-2 tracking-[0.5px] max-md:text-[24px]">
                Methodical: My Obsession with Order
              </h2>
              <p className="opacity-60 text-xs mb-8 block">October 2025 • 6 min read</p>
              <div className="flex gap-2 mt-2 mb-6 flex-wrap">
                <span className="text-[11px] px-[10px] py-1 bg-black/5 border border-black/10 inline-block uppercase tracking-[0.3px]">
                  Personal
                </span>
                <span className="text-[11px] px-[10px] py-1 bg-black/5 border border-black/10 inline-block uppercase tracking-[0.3px]">
                  Reflection
                </span>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4 tracking-[0.3px] max-md:text-base max-md:mt-6">
                AAP Party
              </h3>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                Back in 2015 in Delhi, it was all the craze. Outside the classroom, it was about an alumnus
                of IIT Kharagpur, and inside, about someone who would soon become one. While everyone in Delhi
                (and India, I&apos;d argue) knew what AAP was, for the 10-odd students sitting in that air-conditioned
                classroom in Kalu Sarai, it meant something else entirely. When GT wrote those three alphabets
                on the whiteboard that day, he managed to conjure a broad mix of emotions from the students,
                from envy to embarrassment: A_____<sup>1</sup>, A____<sup>2</sup> and Pankaj.
              </p>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                While the other two people rightly deserved that recognition and appreciation, some part of me
                knew, even then, that I was punching above my weight in getting my name added in the same league
                as those two, when there were so many other intelligent and hard-working kids competing for that
                distinction. GT, while there&apos;s a lot to be said about his style (and pace…) of teaching, had
                something about him that made him extremely memorable as a person.
              </p>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                One of my personal favorite compliments I have ever received in my life was from him in grade 11,
                when he called me &quot;methodical&quot; after looking at the way I jotted down and managed all the knowledge
                he dispensed in his lectures. I like that word. Methodical. I had not thought of it until then,
                but that word does indeed accurately describe me. Methodical, organized, systematic, algorithmic.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 tracking-[0.3px] max-md:text-base max-md:mt-6">
                Childhood Obsessions
              </h3>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                As far back as I can remember, I have always enjoyed planning and organizing things. At first,
                as a kid, with nothing really to my name except my own time, it was simply limited to planning
                my own day. Elaborate time-tables that neatly broke down and segmented each day into one-hour
                slots, seven days a week, all of them allocated to certain activities, essentially duplicated
                for all of weekdays and weekends left vacant to be filled in as the day rolled by.
              </p>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                I distinctly remember the process of fetching a ruler, pencil and an A4 sheet from the stack
                of paper that my father used to get from his office, dividing that sheet into 7 equally-sized
                columns, and then creating rows to divide each day into chunks.
              </p>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                Interestingly, but I guess to no one&apos;s surprise in hindsight, what started as a childhood
                obsession with breaking down the 24 hours of the day into hourly slots turned into an adult&apos;s
                infatuation with calendars. Google Calendar, Notion Calendar, Apple Calendar, Calendly, a
                calendar on my desk, a calendar in my diary. I indulged in this childhood obsession most
                recently just a few months back when I found myself in a new country and a new city with not
                much to do and a lot of time at hand, albeit this time the timetable wasn&apos;t on a paper but on
                my Google Calendar. Come to think of it, that A4 sheet with its rows and columns did in fact
                have a strong resemblance to the modern UI of the calendars of today.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 tracking-[0.3px] max-md:text-base max-md:mt-6">
                The Joy of Organization
              </h3>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                One other thing, besides the habit of slotting tasks and activities into a calendar, that has
                persisted over the years, is the commensurate disinterest in sticking to that schedule. This
                exercise of writing my thoughts down, forced me to reflect on this habit, and made me realize
                that perhaps the reason why I like scheduling things and creating time-tables is not so much
                to optimize or free-up mental bandwidth, but simply because I enjoy the process of organizing
                things.
              </p>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                Organizing my time in a day. Organizing my handkerchiefs in my wardrobe. Organizing my dinnerware
                in the kitchen cabinets, or even my snacks in the pantry. Organize. That is perhaps the right
                word to describe my affliction.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 tracking-[0.3px] max-md:text-base max-md:mt-6">
                Zooming Out
              </h3>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                Over the last decade, however, as the complexities in life grew, mere weekly time-tables were
                not enough to scratch my itch to organize life. Instead of thinking about how I would like to
                spend my hour on any given day, I zoomed out and started thinking more frequently about how I
                would like to spend each year of my life. As a 16 year old in grade 10, I would think about
                what I want the next decade of my life to look like, and now, a decade later, I find myself
                thinking about the same things all over again.
              </p>
              <p className="mb-5 leading-[1.8] max-md:text-sm">
                What do I want in the next decade of life? Perhaps I will write a whole separate post about
                that some other time when I have more mental clarity and stamina to organize my thoughts in a
                more coherent manner. Until then, I shall only say that this time, with all the wisdom and
                learning from the last 10 years, I would like to be extra careful in what I ask for, because
                if there&apos;s one thing I have learnt from my last 10-year plan, it is that we overestimate how
                much can change in a year, and underestimate how much can change in a decade.
              </p>

              <hr className="my-8 border-t border-black/10" />

              <div className="text-xs opacity-60 leading-[1.6]">
                <p className="mb-2"><strong>Privacy Note:</strong></p>
                <p><sup>1</sup> <sup>2</sup> Names have been omitted for privacy reasons.</p>
              </div>
            </div>
          </div>
        </Wrapper>
    </>
  );
}
