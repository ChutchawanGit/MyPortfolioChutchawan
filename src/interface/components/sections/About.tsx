import React, { useState } from 'react';

const About: React.FC = () => {
  // เพิ่ม state สำหรับเก็บข้อมูลทักษะที่จะแสดง tooltip
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // ข้อมูลคำอธิบายทักษะ
  const skillDescriptions: Record<string, string> = {
    "Java": "65% - Solid Java development experience with Spring Boot framework. Proficient in building RESTful APIs, working with collections, and handling basic multi-threading. Comfortable with Maven/Gradle and writing unit tests.",
    "Golang": "40% - Working knowledge of Go fundamentals including goroutines and channels. Experience building simple web services and API endpoints. Still developing proficiency with advanced Go patterns and best practices.",
    "JavaScript": "35% - Basic proficiency in JavaScript for frontend interactions and simple scripting. Understanding of ES6+ features, async/await, and DOM manipulation. Used primarily for enhancing user interfaces.",
    "SQL/Databases": "45% - Competent in writing complex queries, joins, and basic optimization. Experience with Oracle, MySQL, and PostgreSQL. Understanding of database design principles and normalization.",
    "APIs": "55% - Strong practical experience in consuming and integrating third-party APIs. Comfortable building RESTful endpoints and handling HTTP methods, status codes, and JSON responses. Good understanding of API authentication and error handling.",
    "Firebase/Supabase": "30% - Basic experience with authentication and real-time database features. Used in personal projects for quick prototyping and learning cloud services fundamentals."
  };

  // Function to toggle tooltip visibility
  const toggleTooltip = (skill: string) => {
    if (activeTooltip === skill) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(skill);
    }
  };

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Who am I?</h3>
              <p className="text-gray-700 mb-4">
                I'm a Junior Backend Developer with 1 year of professional experience, specializing in Java and exploring Golang development. I have practical experience working with APIs, both consuming external services and building internal endpoints for various business requirements.
              </p>
              <p className="text-gray-700">
                During my first year, I've contributed to developing management systems, real-time chat features, and data update mechanisms. I also have foundational knowledge in automation tools like Selenium and basic Linux operations. I'm continuously learning and eager to deepen my technical expertise while taking on more challenging projects.
              </p>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <p className="text-gray-600 mb-4 text-sm italic">
                Click on any skill bar to see detailed description of my current proficiency level
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Java</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("Java")}
                      >
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                        {activeTooltip === "Java" && (
                          <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 w-full max-w-xs">
                            {skillDescriptions["Java"]}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Golang</span>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("Golang")}
                      >
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                        {activeTooltip === "Golang" && (
                          <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 w-full max-w-xs">
                            {skillDescriptions["Golang"]}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">JavaScript</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("JavaScript")}
                      >
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                        {activeTooltip === "JavaScript" && (
                          <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 w-full max-w-xs">
                            {skillDescriptions["JavaScript"]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">SQL/Databases</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("SQL/Databases")}
                      >
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        {activeTooltip === "SQL/Databases" && (
                          <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 w-full max-w-xs">
                            {skillDescriptions["SQL/Databases"]}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">APIs</span>
                        <span className="text-sm font-medium">55%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("APIs")}
                      >
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                        {activeTooltip === "APIs" && (
                          <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 w-full max-w-xs">
                            {skillDescriptions["APIs"]}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Firebase/Supabase</span>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("Firebase/Supabase")}
                      >
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                        {activeTooltip === "Firebase/Supabase" && (
                          <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 w-full max-w-xs">
                            {skillDescriptions["Firebase/Supabase"]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Other Skills & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git", "AWS", "BigQuery", "Oracle", "RESTful APIs", "Spring Boot", 
                    "Next.js", "PostgreSQL", "MySQL", "Docker", "Looker", "Grafana", 
                    "Postman", "Selenium", "Linux", "Flutter", "Dart", "TypeScript"
                  ].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Education</h4>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h5 className="font-bold">Bachelor's degree</h5>
                  <p className="text-gray-600">Computer Science | SUAN SUNANDHA RAJABHAT UNIVERSITY | 2024</p>
                  <p className="mt-2 text-gray-700">Additional Coursework: Image Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* เพิ่มส่วนอธิบายรูปแบบการวัดทักษะ */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Junior Developer Skill Assessment</h3>
          <p className="text-gray-700 mb-4">
            The percentage ratings reflect my current capabilities as a Junior Developer with 1 year of experience. These are assessed based on what I can realistically accomplish at this stage of my career, measuring progress within the junior level range before transitioning to mid-level responsibilities.
          </p>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">60-70%:</span> Strong junior level. Can work independently on most tasks with minimal guidance. Approaching the upper limit of junior developer expectations.
            </div>
            <div>
              <span className="font-semibold">40-59%:</span> Solid junior level. Comfortable with core concepts and can handle routine tasks effectively. May need occasional guidance on complex issues.
            </div>
            <div>
              <span className="font-semibold">25-39%:</span> Developing junior level. Understanding fundamentals but still building practical experience and confidence.
            </div>
            <div>
              <span className="font-semibold">10-24%:</span> Entry junior level. Basic familiarity with concepts, requires guidance and supervision for most tasks.
            </div>
            <div>
              <span className="font-semibold">0-9%:</span> Learning phase. Just beginning to explore the technology with limited hands-on experience.
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            <em>Note: These percentages represent competency within the junior developer scope, not industry-wide expertise levels.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;