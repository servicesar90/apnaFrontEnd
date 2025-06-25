// import React from "react";

import { useEffect, useState } from "react";
import UserForm from "../modals/profileUpdateModals/resumeUpload";
import { uploadResumeApi } from "../../API/APIs";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserProfile } from "../../Redux/getData";
// import DynamicModal from "../modals/profileUpdateModals/updateProfileModal";
// import EditExperienceModal from "../modals/profileUpdateModals/experienceModal";
// import { addEmpExp } from "../../API/ApiFunctions";

// const links = [
//   { label: "Resume", action: "Update" },
//   { label: "Key skills" },
//   { label: "Employment", action: "Add" },
//   { label: "Education", action: "Add" },
//   { label: "Skills" },
//   // { label: 'Career profile' },
//   { label: "Personal Details" },
// ];

// const QuickLinks = () => {
//   return (
//     <div className="w-full max-w-xs mt-5 bg-white hidden sm:block p-6 border rounded-lg shadow-xl">
//       <h2 className=" text-l6 font-medium text-gray-800 mb-4">Quick links</h2>
//       <ul className="space-y-4">
//         {links.map((link, index) => (
//           <li
//             key={index}
//             className="flex justify-between text-14 text-gray-650"
//           >
//             <span>{link.label}</span>
//             {link.action && (
//               <button className="text-secondary hover:underline">
//                 {link.action}
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default QuickLinks;

const QuickLinks = ({ employee, onLinkClick }) => {
  const [resumeModal, openResmeModal] = useState(false);

  const links = [
    { label: "Resume", action: "Update" },
    { label: "Employment", action: "" },
    { label: "Education", action: "" },
    { label: "Skills" },
    { label: "Basic Details" },
  ];

  const hanleModalOpen = (link) => {
    if (link.action == "Update") {
      openResmeModal(true);
    }
  };

  return (
    <div className="w-full max-w-xs mt-5 bg-white hidden sm:block p-6 border rounded-lg shadow-xl">
      <h2 className="text-l6 font-medium text-gray-800 mb-4">Quick links</h2>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center"
          >
            <li
              className="flex justify-between text-14 text-gray-650 cursor-pointer"
              onClick={() => onLinkClick(link.label)}
            >
              <span>{link.label}</span>
            </li>
            {link.action && (
              <button
                onClick={() => hanleModalOpen(link)}
                className="text-secondary hover:underline text-14 font-medium text-gray-800"
              >
                {link.action}
              </button>
            )}
          </div>
        ))}
      </ul>
      {resumeModal && (
        <UserForm
          open={resumeModal}
          label="Resume Update"
          onClose={() => openResmeModal(!resumeModal)}
          metaData={{
            field: "resume",
            Api: uploadResumeApi,
            default: employee?.resumeURL,
          }}
        />
      )}
    </div>
  );
};

export default QuickLinks;
