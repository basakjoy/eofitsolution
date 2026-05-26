import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  card: any;
}

const Index: FC<Props> = ({ card: { title, services, description, number, classes } }) => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
    <div ref={ref} key={number} className="px-[6vw] md:px-[4vw] pb-[9.5vw] md:pb-[15vw] last:pb-[13vw]">
      <h4 className="text-[3vw] md:text-[6vw] md:mt-[5vw] font-medium tracking-tight mb-4 md:mb-8">{title}</h4>
      <div className={`flex items-start space-x-[3vw] md:space-x-0 pt-[3vw] first:border-none md:flex-col ${classes}`}>
        <div className="flex-1 md:mb-[2vw]">
          <div className="flex flex-wrap space-y-[2vw] md:space-y-[1.5vw]  ">
            {services.map((service: string[], i: number) => {
              return (
                <ul key={i} className="flex items-center space-x-[5vw] text-[1.4vw] md:text-[4vw] font-medium text-text-1/80">
                  {service.map((s) => (
                    <li key={s} className="flex items-center space-x-[0.8vw]">
                      <div className="h-[0.8vw] w-[0.8vw] md:h-[2vw] md:w-[2vw] rounded-full bg-primary/60"></div>
                      <p>{s}</p>
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>
        </div>

        <div className="relative flex-1 ">
          <p className="relative z-[2000] line-clamp-4 text-[1.3vw] md:text-[3.5vw] font-light text-text-1/90 leading-[1.8] md:text-balance md:leading-[1.6] md:mt-[4vw]">{description}</p>
          <div className="absolute right-[6vw] top-[1.8vw] z-[1] text-right text-[12vw] font-bold tracking-wider text-gray-1/30 md:text-[20vw] md:top-[-8vw]">
            {number}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
