import { FC } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { HeartOffIcon } from 'lucide-react';
import { Facebook, Instagram, Twitter } from "lucide-react";

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen">

      <div className=" mx-auto flex w-full max-w-[60vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center">
        <h3 className="text-[5vw] md:text-[9vw] font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-1 to-primary mb-[2vw]">LET&apos;S CONNECT</h3>
        <p className="mt-[0.6vw] text-[1.5vw] md:text-[3.5vw] font-light text-text-1/80 md:leading-[1.5] max-w-[80%] mx-auto">
          We are here to help you with your delivery needs. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <Button
          onClick={handleFormToggle}
          title="SUBMIT A REQUEST"
          classes="px-[1.8vw] py-[1.5vw] w-[30vw] md:w-[50vw] min-h-[5vw] md:min-h-[10vw] text-[1.25vw] md:text-[3.5vw] bg-primary text-bg-1 hover:bg-primary/90 font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/30"
          btnClasses="mt-[3vw] md:mt-[6vw]"
        />
      </div>

      <footer className="flex justify-between items-center border-t border-t-stroke/30 px-[5vw] py-[1.8vw] text-[1.2vw] md:text-[3vw] md:py-[4vw] md:px-[4vw] text-text-1/70">
        <div>© 2026. <a href="https://www.facebook.com/eofitsolution" target='_blank' rel="noreferrer" className="hover:text-primary transition-colors">All rights reserved</a></div>
        <ul className="flex space-x-[2vw] items-center">
  <li>
    <a
      href="https://www.instagram.com/eofitsolution/"
      target="_blank"
      rel="noreferrer"
    >
      <Instagram className="w-[1.8vw] h-[1.8vw] md:w-[6vw] md:h-[6vw] hover:text-primary transition-colors duration-300" />
    </a>
  </li>

  <li>
    <a
      href="https://x.com/eofitsolution"
      target="_blank"
      rel="noreferrer"
    >
      <Twitter className="w-[1.8vw] h-[1.8vw] md:w-[6vw] md:h-[6vw] hover:text-primary transition-colors duration-300" />
    </a>
  </li>

  <li>
    <a
      href="https://www.facebook.com/eofitsolution"
      target="_blank"
      rel="noreferrer"
    >
      <Facebook className="w-[1.8vw] h-[1.8vw] md:w-[6vw] md:h-[6vw] hover:text-primary transition-colors duration-300" />
    </a>
  </li>
</ul>
      </footer>
    </SectionOpacity>
  );
};
export default Index;
