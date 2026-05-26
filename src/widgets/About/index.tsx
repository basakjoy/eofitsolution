import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1 bg-gradient-to-b py-[6vw] md:py-[4vw] z-0">
      <SectionOpacity classes="z-2">
        <SectionTitle title="ABOUT." classes="px-[6vw] md:px-[3vw] pt-[3vw] z-10" />
        <div className="relative self-start px-[6vw] md:px-[3vw] pb-[5vw] pt-[3vw]">
          <div className="flex space-x-[5vw] md:space-x-0 md:flex-col md:space-y-[3vw] md:items-center">
            <p className="flex grow-[4] basis-0 flex-wrap text-[1.8vw] md:text-[4vw] md:leading-[1.4] md:text-balance md:text-center font-light text-text-1/90 leading-relaxed">
              We are a team of passionate professionals dedicated to delivering top-notch IT solutions. With a focus on innovation and excellence, we strive to exceed our clients&apos; expectations and help them achieve their business goals through cutting-edge technology and creative problem-solving.
            </p>

            <div className="relative h-[25vw] w-[35vw] md:h-[60vw] md:max-w-[100%] md:text-center grow-[3] md:w-full basis-0 md:basis-[initial] bg-bg-2 rounded-xl shadow-2xl overflow-hidden mt-0 md:mt-8">
              <img 
                src="/images/hands_v2.jpg" 
                alt="hands" 
                className="inline-block md:object-cover rounded-[0.125vw] md:rounded-[0.25vw] hover:scale-105 hover:brightness-110 transition duration-500 absolute inset-0 w-full h-full" 
              />
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Index;