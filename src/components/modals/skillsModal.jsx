import React, { useState } from "react";
import { X, Search } from "lucide-react";

const initialSkills = [
  "Front-end app development", "Java", "MongoDB", "HTML/CSS", "JavaScript"
];
const suggestedSkills = [
  "OOPS", "Java2D", "Content development", "Next.js", "Node", "Advanced java",
  "XPath", "Content Design", "XHTML", "Object-Oriented Design"
];

const EditSkillsModal = ({open, onClose, skill }) => {
  const [skills, setSkills] = useState(skill);
  const [input, setInput] = useState("");

  const removeSkill = (skill) =>
    setSkills(skills.filter((s) => s !== skill));

  const addSkill = (skill) => {
    if (!skills.includes(skill)) setSkills([...skills, skill]);
  };

  const handleSave=()=>{
    console.log({skills})
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-full max-w-2xl p-6 rounded-xl relative shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit skills</h2>
          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Input */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            What skills do you have?
          </label>
          <p className="text-sm text-gray-500 mb-2">
            Get noticed for the right job by adding your skills
          </p>

          <div className="relative mb-3">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search Skills"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Selected Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="flex items-center bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-green-700 hover:text-green-900"
                >
                  <X size={16} />
                </button>
              </span>
            ))}
            {skills.length > 5 && (
              <span className="text-sm px-3 py-1 rounded-full border border-gray-300">
                +{skills.length - 5}
              </span>
            )}
          </div>

          {/* Suggested Skills */}
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h4 className="font-medium text-sm text-gray-700 mb-2">Suggested skills</h4>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills.map((skill, idx) => (
                <button
                  key={idx}
                  onClick={() => addSkill(skill)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 text-right">
          <button
            className="bg-green-200 text-green-900 px-6 py-2 rounded-md hover:bg-green-300"
            onClick={ handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSkillsModal;
