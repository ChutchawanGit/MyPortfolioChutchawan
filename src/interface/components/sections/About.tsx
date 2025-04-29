import React, { useState } from 'react';

const About: React.FC = () => {
  // เพิ่ม state สำหรับเก็บข้อมูลทักษะที่จะแสดง tooltip
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // ข้อมูลคำอธิบายทักษะ
  const skillDescriptions: Record<string, string> = {
    "Java": "85% - Advanced Java development with Spring Boot. Experience building RESTful APIs, microservices, and backend systems. Proficient in multi-threading, collections, and Java 8+ features.",
    "Golang": "75% - Intermediate Golang development. Experience with goroutines, channels, and building efficient web services. Used for API development and real-time applications.",
    "JavaScript": "60% - Used for web frontend development and some backend scripting. Experience with JavaScript frameworks and AJAX.",
    "SQL/Databases": "80% - Strong experience with database design, complex queries, joins, and optimization across multiple database systems (Oracle, MySQL, PostgreSQL).",
    "APIs": "70% - Experienced in designing, building, and consuming RESTful APIs. Understanding of API security, versioning, and documentation.",
    "Firebase/Supabase": "65% - Used for personal projects. Experience with authentication, real-time database, storage, and hosting features."
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
                I'm a Backend Developer with 11 months of professional experience, specializing in Java and Golang development. I have experience utilizing APIs and a foundational to intermediate understanding of their operation. Proficient in database management including SQL, Oracle, AWS, and BigQuery.
              </p>
              <p className="text-gray-700">
                I've been involved in developing management systems, real-time chat administration, and update systems. I also have introductory skills in automation with Selenium and Linux. Outside of work, I enjoy contributing to personal projects and am eager to expand my skillset with new technologies.
              </p>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <p className="text-gray-600 mb-4 text-sm italic">
                Click on any skill bar to see detailed description of my proficiency level
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Java</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("Java")}
                      >
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
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
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("Golang")}
                      >
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
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
                        <span className="text-sm font-medium">60%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("JavaScript")}
                      >
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
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
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("SQL/Databases")}
                      >
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
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
                        <span className="text-sm font-medium">70%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("APIs")}
                      >
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
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
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div 
                        className="w-full bg-gray-200 rounded-full h-2 cursor-pointer relative"
                        onClick={() => toggleTooltip("Firebase/Supabase")}
                      >
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
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
                    "Git", "AWS", "BigQuery", "Oracle", "RESTful APIs", "Springboot", 
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
                  <h5 className="font-bold">Bachelor's degree                  </h5>
                  <p className="text-gray-600">Computer Science | SUAN SUNANDHA RAJABHAT UNIVERSITY | 2024</p>
                  <p className="mt-2 text-gray-700">Additional Coursework: Image Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* เพิ่มส่วนอธิบายรูปแบบการวัดทักษะ */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Skill Level Explanation</h3>
          <p className="text-gray-700 mb-4">
            The percentage ratings shown next to each skill represent my proficiency level according to the following scale:
          </p>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">80-100%:</span> Expert level. Professional experience with advanced concepts and best practices.
            </div>
            <div>
              <span className="font-semibold">60-79%:</span> Intermediate level. Comfortable working independently with the technology.
            </div>
            <div>
              <span className="font-semibold">40-59%:</span> Working knowledge. Can use effectively with some guidance.
            </div>
            <div>
              <span className="font-semibold">20-39%:</span> Basic understanding. Familiar with core concepts but limited practical experience.
            </div>
            <div>
              <span className="font-semibold">0-19%:</span> Exposure level. Basic awareness but still learning fundamentals.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;