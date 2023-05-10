import React from 'react'

const Contact = () => {
  return (
   <div name="contact" className="w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-40 pb-20">

     <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="pb-8">
       <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
       <p className="py-6">Submit the form below to get touch with me</p>
      </div>

      <div className="flex justify-center items-center">
      <form action="https://getform.io/f/52de37bb-035a-43ca-b3c0-f55447de12b1" method="POST" className=" flex flex-col w-full md:w-1/2">
        <input type="text" name="name" placeholder="enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
        <input type="text" name="email" placeholder="enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
        <textarea name="message"      placeholder="Enter your message" cols="30" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">submit</button>
       </form>
      </div>

     </div>
    </div>
  )
}

export default Contact