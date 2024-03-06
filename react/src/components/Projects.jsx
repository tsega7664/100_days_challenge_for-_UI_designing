import React from "react";

const Projects = ()=>{
    return(
        <div id="skill" className="max-w-[1040px] mt-24 text-center md:pl-20 py-16 ml-32 max-md:mx-8">
            <hr className="w-64 mx-auto border-t-2 border-[#DAA520] mb-16" />
          <h1 className="text-4xl text-center  text-gray-600">Skills</h1>
          <p className="text-center text-gray-500 py-8">
          Full-Stack Developer proficient in developing cutting-edge solutions. Skilled in front-end and back-end development.
          </p>
          <div className=" items-center lg:flex justify-between gap-4">
               <div className="shadow-lg rounded-lg hover:bg-gradient-to-r from-gray-200 to-[#DAA520] p-4">
                <img className="w-24 mx-16 mt-4" src="https://static.vecteezy.com/system/resources/previews/022/192/940/non_2x/design-backend-development-icon-style-vector.jpg" />
                <h2 className="mt-4 ml-4 text-center font-bold text-gray-400 px-2">Front-End Developmnet</h2>
                <p className="py-2 text-gray-400">crafting visually stunning digital experiences. Specializing in creating beautiful interfaces that captivate and engage users.</p>
                <p className="py-2 text-gray-400">React.js</p>
                <p className="py-2 text-gray-400">JQuery,JavaScript</p>
                <p className="py-2 text-gray-400">Tailwind,Bootstrap</p>
                <p className="py-2 text-gray-400">HTML,CSS</p>
               </div>
               <div className="shadow-lg rounded-lg  text-center  hover:bg-gradient-to-r from-gray-200 to-[#DAA520] p-4">
                 <img className="w-24 mx-16 mt-4 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsPKSTExYYXitosDG2KhhrObp-Cag5Ade0GWc6xHG2jLffLcFV8pAtUMOY0pycpO5Lr4&usqp=CAU"/>
               <h2 className="mt-4 ml-4 text-center font-bold text-gray-400">Web Developmnet</h2>
               <p className="py-2 text-gray-400">Full-Stack Developer proficient in developing cutting-edge solutions. Skilled in front-end and back-end development.</p>
                <p className="py-2 text-gray-400">PHP</p>
                <p className="py-2 text-gray-400">Node.js, Express.js</p>
                <p className="py-2 text-gray-400">MYSql, Mongo DB</p>
               </div>
               <div>
               <div className="shadow-lg rounded-lg text-center hover:bg-gradient-to-r from-gray-200 to-[#DAA520] p-8">
                <img className="w-24 mx-16 mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKERDeWHWnH3-PLHlEStdIiyR3mcYXGSR9xIlyYV4-aBNcmFuNkmNR6-7xW1kVmgNbCVk&usqp=CAU" />
                <h2 className="mt-4 ml-4 text-center font-bold text-gray-400">Tutoring</h2>
                <p className="py-2 text-gray-400">Tutoring enables me to share my expertise and passion for learning while helping students reach their academic goals.</p>
                <p className="py-2 text-gray-400">Java</p>
                <p className="py-2 text-gray-400">Python</p>
               </div>
               </div>
               
          </div>
        </div>
      
    )
}
export default Projects