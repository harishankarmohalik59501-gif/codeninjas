const CourseCard = ({ title, rating, reviews, image, duration }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f66c3b]/10 transition-all duration-300">
      <div className="h-40 w-full overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-[#2d2d2d] to-[#141414]" />
        )}
      </div>
      
      <div className="p-5 flex flex-col h-[180px]">
        <h3 className="text-[#fafafa] font-bold text-[18px] leading-tight mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center space-x-2 mt-auto mb-3">
          <span className="text-[#ff8119] font-bold text-sm">{rating}</span>
          <div className="flex text-[#ff8119] text-xs">
            ★ ★ ★ ★ ★
          </div>
          <span className="text-[#838485] text-xs">({reviews})</span>
        </div>
        
        <div className="flex items-center text-[#838485] text-sm font-medium">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </div>
      </div>
    </div>
  )
}

export default CourseCard
