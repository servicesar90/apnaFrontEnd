const testimonials = [
    {
      name: "Shiwangi Singla",
      rating: 4.5,
      placed: true,
      image: "", // Add locally or use an online link
      feedback:
        "Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app.",
    },
    {
      name: "Jenil Ghevariya",
      rating: 4.5,
      placed: true,
      image: "", // Add locally or use an online link
      feedback:
        "This app is very helpful if you are looking for a job and the team is also very supportive and friendly. It is very easy to find a job on Apna because there are a lot of job options.",
    },
  ];
  
  const StarRating = () => (
    <div className="flex items-center text-yellow-500">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span className="text-gray-300">★</span> {/* half star visual */}
    </div>
  );
  
  export default function Testimonials() {
    return (
      <div className="flex flex-col md:flex-row items-stretch bg-[#3C78D8] text-white">
        {/* Left block */}
        <div className="md:w-1/3 p-10 flex flex-col justify-center text-left">
          <div className="text-5xl mb-6">❝</div>
          <h2 className="text-2xl font-bold mb-4">
            Join the community of <br />
            5 crore satisfied job seekers...
          </h2>
          <p className="text-base mt-2">Play Store Ratings</p>
          <div className="mt-1">
            <StarRating />
          </div>
        </div>
  
        {/* Right block */}
        <div className="md:w-2/3 bg-[#F5F5F5] p-6 flex gap-6 overflow-x-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-2xl object-cover"
                />
                <div>
                  <p className="font-semibold text-[#666666]">{t.name}</p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span className="text-sm font-medium">{t.rating}</span>
                    <StarRating />
                  </div>
                </div>
                {t.placed && (
                  <span className="ml-auto bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full border border-green-300">
                    PLACED
                  </span>
                )}
              </div>
              <p className="text-sm text-[#666666]">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }