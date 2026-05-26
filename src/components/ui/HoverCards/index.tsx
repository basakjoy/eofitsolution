import { FC, SVGProps, useState } from 'react';

import { cn } from '@/shared/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  cards: { title: string; icon: FC<SVGProps<SVGSVGElement>>; description: string }[];
  wrapperClasses?: string;
  itemClasses?: string;
}

const Index: FC<Props> = ({ cards, itemClasses, wrapperClasses }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn('grid md:grid-cols-2 ', itemClasses)}>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={cn('relative flex flex-col px-[0.4vw] md:px-[0.6vw] md:py-[0.5vw] py-[0.3vw] last:col-span-2 md:col-span-2', itemClasses)}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <AnimatePresence>
            {hoveredIdx === idx && (
              <motion.span
                className={cn(
                  'absolute inset-0 z-0 block h-full w-full rounded-[1.333vw] bg-stroke/50',
                  wrapperClasses,
                )}
                layoutId="cardHoverEffect"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div
            className={cn(
              'z-[1] h-full min-w-[18vw] space-y-[1.2vw] rounded-[1vw] border-[0.1vw] border-stroke px-[2vw] py-[2.5vw] md:min-w-full md:space-y-[3vw] md:px-[4vw] md:py-[5vw] md:rounded-[2vw] transition-colors duration-300 hover:border-primary/50 bg-bg-2/30 backdrop-blur-sm',
            )}
          >
            <div className="flex items-center space-x-[1vw] md:space-x-[3vw] mb-[1vw] md:mb-[3vw]">
              {<card.icon />}
              <h6 className="text-[1.8vw] md:text-[5vw] font-semibold text-text-1">{card.title}</h6>
            </div>
            <p className="text-[1.1vw] md:text-[3.5vw] font-light leading-[1.7] md:leading-[1.6] text-text-1/80">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Index;
