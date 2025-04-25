const footerData = {
    Links: [
      "Download Apna App",
      "Free Job Alerts",
      "Careers",
      "Contact Us",
      "Vulnerability Disclosure Policy",
    ],
    Legal: [
      "Privacy Policy",
      "User Terms & Conditions",
    ],
    Resources: [
      "Blog",
      "Sitemap",
    ],
  };
  
  export default function FooterLinks() {
    return (
      <div className="bg-[#F5F5F5] px-4 md:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(footerData).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-[#666666] mb-2">{title}</h4>
            <ul className="space-y-1 text-sm text-[#666666]">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline text-[#3C78D8]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }