import React, { useState } from "react";

function Form() {
  // const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 const onSubmit = async (e) => {
    e.preventDefault()
    
    try {
     const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name, email, message
      }),
      headers: {
        'content-type': 'application/json'
      }
     })

    } catch(error) {
      console.error('error', error)
    }
 }
  return (
    <form
      onSubmit={onSubmit}
      name="contact"
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
    >
      <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
        Contact Me
      </h2>
      <p className="leading-relaxed mb-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum suscipit
        officia aspernatur veritatis. Asperiores, aliquid?
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
