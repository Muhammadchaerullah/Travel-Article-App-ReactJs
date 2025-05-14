import { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutHomePage() {
  const accordions = [
    { title: 'About', content: [{ About: 'About Travellergram.com' }] },
    { title: 'Terms and Conditions', content: [{ 
        Terms: 'Cancellation Policy',
        Force: 'Force majeure cancellation',
        Privacy: 'Privacy Policy',
        Modification: 'Modification Policy'
    }] },
    { title: 'Contact Us', content: [{ ContactUs: 'Customer Support' }] }
  ];

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index:number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {accordions.map(({ title, content }, index) => (
        <div key={index} className="border rounded-md">
          <button
            className="w-full text-left px-4 py-2 font-semibold bg-gray-100 hover:bg-gray-200"
            onClick={() => toggle(index)}
          >
            {title}
          </button>
          {open === index && (
            <div className="px-4 py-2 bg-white">
              {content.map((obj, i) =>
                Object.entries(obj).map(([key, value]) => (
                  <p key={`${i}-${key}`} className="text-sm">
                    <Link to={`/About/${key}`} className="text-blue-500 mt-2">
                    {value}
                    </Link>
                  </p>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
