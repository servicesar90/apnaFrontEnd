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
    <div className="w-full max-w-xs mt-5 bg-white hidden sm:block p-6 border rounded-lg shadow-xl">
      <h2 className=" text-l6 font-medium text-gray-800 mb-4">Quick links</h2>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index} className="flex justify-between text-14 text-gray-650">
            <span>{link.label}</span>
            {link.action && (
              <button className="text-secondary hover:underline">
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
