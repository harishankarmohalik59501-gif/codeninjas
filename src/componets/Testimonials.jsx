const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "SDE-1 @ Amazon",
      image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=f66c3b&color=fff",
      text: "The structured curriculum and 1-on-1 doubt support helped me crack Amazon. The instructors are amazing and the platform is very intuitive."
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Frontend Engineer @ Google",
      image: "https://ui-avatars.com/api/?name=Priya+Patel&background=12b8ff&color=fff",
      text: "I transitioned from a non-CS background to a developer role at Google thanks to the React & Node Bootcamp. Highly recommended!"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Software Engineer @ Microsoft",
      image: "https://ui-avatars.com/api/?name=Amit+Kumar&background=27c93f&color=fff",
      text: "The placement cell is extremely proactive. I had 3 offers before I even completed my course. Thank you Coding Ninjas!"
    }
  ]

  return (
    <section className="bg-[#000000] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Hear from our <span className="text-[#f66c3b]">alumni</span>
          </h2>
          <p className="text-[#838485] text-[16px] max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2d2d2d] relative">
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-[#2d2d2d] opacity-50">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="flex items-center mb-6">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full border-2 border-[#f66c3b]" />
                <div className="ml-4">
                  <h4 className="text-[#fafafa] font-bold text-lg">{item.name}</h4>
                  <p className="text-[#12b8ff] text-sm font-medium">{item.role}</p>
                </div>
              </div>
              
              <p className="text-[#bbbbbb] leading-relaxed relative z-10">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
