const StatsBar = () => {
  return (
    <div className="bg-[#141414] border-y border-[#2d2d2d] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-2">1,50,000+</h3>
            <p className="text-[#838485] font-medium text-sm">Students Enrolled</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-2">5,000+</h3>
            <p className="text-[#838485] font-medium text-sm">Placements</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-2">4.9/5</h3>
            <p className="text-[#838485] font-medium text-sm">Average Rating</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-2">10+</h3>
            <p className="text-[#838485] font-medium text-sm">Years of Trust</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StatsBar
