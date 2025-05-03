import React from 'react';

const links = [
  { label: 'Resume', action: 'Update' },
  { label: 'Resume headline' },
  { label: 'Key skills' },
  { label: 'Employment', action: 'Add' },
  { label: 'Education', action: 'Add' },
  { label: 'IT skills' },
  { label: 'Projects' },
  { label: 'Profile summary' },
  { label: 'Accomplishments' },
  { label: 'Career profile' },
  { label: 'Personal Details' },
];

const QuickLinks = () => {
  return (
    <div className="w-full max-w-xs mt-14 bg-white hidden sm:block rounded-3xl p-6 ">
      <h2 className="font-bold text-lg mb-4">Quick links</h2>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index} className="flex justify-between text-sm text-black">
            <span>{link.label}</span>
            {link.action && (
              <button className="text-blue-500 hover:underline">
                {link.action}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
