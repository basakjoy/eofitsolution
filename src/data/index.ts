import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Main',
    href: 'main',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Our Services',
    href: 'services',
  },
  {
    title: 'Approach',
    href: 'approach',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'Maeketing & Branding',
    description:
      'We help businesses grow through smart marketing strategies, digital advertising, and creative branding solutions.',
    services: [
      ['Market research', 'Branding'],
      ['Advertising', 'SMM', 'SEO',],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'E-commerce',
    description:
      'EOF LifeStyle is a fashion brand creating stylish and premium clothing that reflects modern lifestyle and individuality.',
    services: [
      ['Fashion Apparel Design', 'Brand Merchandise'],
      ['Online Clothing Sales', 'Custom Clothing'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Agro Firm',
    description:
      'EOF Agro is committed to providing fresh agro products and supporting modern agriculture for a better future. ',
    services: [['Organic Farming', 'Crop Production'], ['Fresh Food Supply', 'Agricultural Products Supplyg']],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Import-Export',
    description:
      'We facilitate international trade by importing quality products and exporting goods to global markets. ',
    services: [
      ['Importing Goods', 'Product Distribution'],
      ['Supplier & Buyer Coordination', 'International Product Sourcing'],
    ],
    number: '04.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Freelancing',
    description:
      'A freelancing company connects skilled professionals with global clients to deliver high-quality digital solutions.',
    services: [
      ['Web Design & Development', 'Video Editing'],
      ['App Development', 'Graphic Design'],
    ],
    number: '05.',
    classes: 'border-t border-gray-1/50',
  },
   {
    title: 'Computer Training Center',
    description:
      'A computer training center helps students learn essential computer and IT skills for education and employment.',
    services: [
      ['Basic Computer Training', 'Graphic Design Course'],
      ['Freelancing Training', 'Programming Courses', 'Digital Marketing Training'],
    ],
    number: '06.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Consultation',
    description:
      "We begin by diving deep into your goals. Through active listening and collaborative brainstorming, we align our vision with your business objectives to build a solid foundation for the project.",
  },
  {
    icon: Second,
    title: 'Joint review',
    description:
      'Transparency is key. Once the initial design concepts are ready, we walk you through the details. Your feedback is our guide, ensuring the creative direction meets your exact expectations.',
  },
  {
    icon: Third,
    title: 'Development',
    description: 'This is where the magic happens. Our team transforms approved designs into high-performance digital solutions, using clean code and the latest technologies to ensure scalability and speed.',
  },
  {
    icon: Fourth,
    title: 'Testing',
    description:
      'Quality is non-negotiable. We conduct rigorous cross-browser and functionality tests to eliminate bugs. We then invite you for user-acceptance testing to ensure everything works flawlessly.',
  },
  {
    icon: Fifth,
    title: 'Final result',
    description:
      'The ultimate launch. We deliver a polished, fully optimized product that is ready to engage your audience. Beyond the handover, we ensure you have everything needed to drive growth and achieve long-term success.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'What type of services you want?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      
      { name: 'Fashion Products', value: 'design/branding' },
      { name: 'Web Development', value: 'web-dev' },
      { name: 'App Development', value: 'mobile-dev' },
      { name: 'Advertising', value: 'all-types' },
      { name: 'Social Media Marketing', value: 'all-types' },
      { name: 'Agro Products', value: 'all-types' },
      { name: 'Import-Export', value: 'all-types' },
      { name: 'Programing Course', value: 'all-types' },
      { name: 'Graphic Design Course', value: 'all-types' },
      { name: 'Computer Training', value: 'all-types' },
      { name: 'Other', value: 'other-service' },
    ],
    formKey: '_service',
  },
  {
    title: 'What is your budget category?',
    classes: '',
    radioArray: [
      { name: '৳2000 - ৳4000', value: '2-4' },
      { name: '৳4000 - ৳8000', value: '4-8' },
      { name: '৳8000 - ৳10000', value: '8-10' },
      { name: '৳10000', value: '10+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Approximately how many pages will your project have?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Less than 5', value: '<5' },
      { name: '6-10', value: '6-10' },
      { name: '11-20', value: '11-20' },
      { name: '20+', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: 'How quickly do you need the project?',
    classes: '',
    radioArray: [
      { name: 'As fast as possible', value: 'max-fast' },
      { name: 'High priority ', value: 'high-prio ' },
      { name: 'Regular time', value: 'regular' },
      { name: 'Take your time ', value: 'take-your-time' },
    ],
    formKey: '_quickness',
    
  },
  {
    title: 'Approximately how many Fashion items will your purchase?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: '1', value: '1' },
      { name: 'Less than 5', value: '<5' },
      { name: '11-20', value: '11-20' },
      { name: '20+', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: 'How Fast Delevary do you need and where?',
    classes: '',
    radioArray: [
      { name: 'Express Delivery', value: 'Express-Delivery' },
      { name: 'Regular Delivery', value: 'Regular-Delivery' },
      { name: 'Inside Dhaka', value: 'inside-dhaka' },
      { name: 'Out of Dhaka', value: 'out-of-dhaka' },
    ],
    formKey: '_quickness',
    
  },
  {
    title: 'Approximately how many Agro Products will your purchase?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: '1 kg', value: '1' },
      { name: 'Less than 5 kg', value: '<5' },
      { name: '11-20 Kg', value: '11-20-kg' },
      { name: '20+ Kg', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: 'When do you need the delivery?',
    classes: '',
    radioArray: [
      { name: 'Express Delivery', value: 'Express-Delivery' },
      { name: 'Regular Delivery', value: 'Regular-Delivery' },
      { name: 'Inside Dhaka', value: 'inside-dhaka' },
      { name: 'Out of Dhaka', value: 'out-of-dhaka' },
    ],
    formKey: '_quickness',
    
  },
];

export const INPUT_FIELDS = [
  { label: 'Your name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Phone', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Company name', name: 'company', classes: '', required: true },
  { label: 'Company website', name: 'websiteUrl', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
