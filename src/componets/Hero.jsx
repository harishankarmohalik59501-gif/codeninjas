import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full bg-[#000000] text-white overflow-hidden pb-16">
      {/* Background glowing gradient (approximate from design) */}
      <div 
        className="absolute top-0 right-0 w-[60%] h-[60%] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(246, 108, 59, 0.25) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#f66c3b] bg-[#1a1a1a]">
              <span className="text-[#f66c3b] text-sm font-bold">New</span>
              <span className="text-gray-300 text-sm ml-2 font-medium">AI-powered learning platform</span>
            </div>

            <h1 className="text-[44px] md:text-[52px] font-bold leading-tight tracking-tight">
              Build with AI <br />
              <span className="text-[#bbbbbb]">like never before</span>
            </h1>

            <p className="text-[#bbbbbb] text-[16px] md:text-[18px] max-w-lg leading-relaxed">
              8 years of delivering outcome-focused upskilling courses in a structured, 
              practice-based format by MAANG faculty, with the fastest 1-on-1 doubt resolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link to="#">
                <button className="w-full sm:w-auto bg-[#f66c3b] hover:bg-[#e16824] text-white font-bold text-[16px] px-8 py-3.5 rounded-lg transition-colors">
                  Explore Courses
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - CSS Mockup */}
          <div className="hidden md:block relative">
            {/* Window frame mockup */}
            <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
              {/* Fake Window Header */}
              <div className="flex items-center px-4 py-3 bg-[#141414] border-b border-[#2d2d2d]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="mx-auto text-[#838485] text-xs font-mono">App.jsx</div>
              </div>
              
              {/* Fake Code Content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="text-[#bbbbbb] leading-relaxed">
                  <span className="text-[#f66c3b]">import</span> {'{'} <span className="text-[#12b8ff]">useState</span> {'}'} <span className="text-[#f66c3b]">from</span> <span className="text-[#a5d6ff]">'react'</span>;<br/>
                  <br/>
                  <span className="text-[#f66c3b]">function</span> <span className="text-[#12b8ff]">CareerGrowth</span>() {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-[#f66c3b]">const</span> [skills, setSkills] = <span className="text-[#12b8ff]">useState</span>(<span className="text-[#ff8119]">0</span>);<br/>
                  <br/>
                  &nbsp;&nbsp;<span className="text-[#f66c3b]">const</span> <span className="text-[#12b8ff]">learnWithAI</span> = () <span className="text-[#f66c3b]">=&gt;</span> {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#838485]">// 1-on-1 doubt support included</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;setSkills(prev <span className="text-[#f66c3b]">=&gt;</span> prev + <span className="text-[#ff8119]">100</span>);<br/>
                  &nbsp;&nbsp;{'}'};<br/>
                  <br/>
                  &nbsp;&nbsp;<span className="text-[#f66c3b]">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#ff8119]">div</span> <span className="text-[#12b8ff]">className</span>=<span className="text-[#a5d6ff]">"success"</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#ff8119]">h1</span>&gt;Get the career you deserve&lt;/<span className="text-[#ff8119]">h1</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#ff8119]">button</span> <span className="text-[#12b8ff]">onClick</span>={'{'}<span className="text-[#12b8ff]">learnWithAI</span>{'}'}&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Start Learning<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#ff8119]">button</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#ff8119]">div</span>&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  {'}'}<br/>
                  <br/>
                  <span className="text-[#f66c3b]">export default</span> <span className="text-[#12b8ff]">CareerGrowth</span>;
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg p-4 shadow-xl flex items-center space-x-3">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" src="https://ui-avatars.com/api/?name=User&background=12b8ff&color=fff" alt="" />
                <img className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" src="https://ui-avatars.com/api/?name=Dev&background=ff8119&color=fff" alt="" />
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">5000+</p>
                <p className="text-[#838485] text-xs">Students placed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
