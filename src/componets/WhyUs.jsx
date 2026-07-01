const WhyUs = () => {
  const features = [
    {
      title: "Structured Learning",
      description: "A well-defined curriculum with 100+ hours of video lectures and hands-on projects.",
      icon: (
        <svg className="w-8 h-8 text-[#f66c3b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "1-on-1 Doubt Support",
      description: "Get your doubts resolved instantly by our Teaching Assistants over chat/audio.",
      icon: (
        <svg className="w-8 h-8 text-[#12b8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Dedicated Placement Cell",
      description: "Get access to exclusive job opportunities and hiring drives by top tech companies.",
      icon: (
        <svg className="w-8 h-8 text-[#27c93f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section className="bg-[#141414] py-16 md:py-24 border-t border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Why learn with <span className="text-[#f66c3b]">Coding Ninjas?</span>
          </h2>
          <p className="text-[#838485] text-[16px]">
            We provide everything you need to kickstart your career in tech, from structured curriculum to placement support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2d2d2d] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#2d2d2d] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#fafafa] mb-3">{feature.title}</h3>
              <p className="text-[#838485] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyUs
