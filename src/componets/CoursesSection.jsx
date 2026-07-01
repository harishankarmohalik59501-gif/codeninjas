import CourseCard from './CourseCard'

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Data Analytics and Machine Learning Bootcamp',
      rating: '4.9',
      reviews: '1.2k',
      duration: '6 Months',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Full Stack Web Development with React & Node',
      rating: '4.8',
      reviews: '2.5k',
      duration: '9 Months',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Java Data Structures and Algorithms',
      rating: '4.9',
      reviews: '5.1k',
      duration: '4 Months',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'C++ Foundation with Data Structures',
      rating: '4.8',
      reviews: '3.8k',
      duration: '4 Months',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <section className="bg-[#000000] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
              Explore our <span className="text-[#f66c3b]">top courses</span>
            </h2>
            <p className="text-[#838485] text-[16px] max-w-2xl">
              Learn from the best MAANG faculty and get placed in top tech companies with our structured, practice-based courses.
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-[#f66c3b] font-bold flex items-center hover:text-[#e16824] transition-colors">
            View All Courses
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default CoursesSection
