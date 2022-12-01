import Link from 'next/link'

const ContactIcon = () => {
  return (
    <Link href="mailto:2060aashishadhikari@gmail.com?subject=Saying%20Hello" className="border border-yellow-400 px-5 py-2 rounded-full text-white cursor-pointer hover:bg-yellow-300 hover:text-black transition-all duration-300 hover:scale-[1.05] animate-contact-btn-entry" title="Contact me">
      <p>Say Hello</p>
    </Link>
  );
};

export default ContactIcon;
