import React from "react";
import {AiOutlineContacts} from "react-icons/ai";


function Contact() {
  return (
    <div
      className="bg-gray-900 flex justify-center flex-col items-center p-5 lg:p-20 text-white relative "
      id="contact"
    >
      <AiOutlineContacts className="text-5xl mb-6" />
      <h1 className="text-5xl">Want to reach out?</h1>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="w-full bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Baptist%20Theological%20Seminary%20of%20Zambia+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
            className="absolute inset-0"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className=" px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                justplainrodney@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+260-76-350-2355</p>
            </div>
          </div>
        </div>
        {/* <Form/> */}
      </div>

      
    </div>
  );
}

export default Contact;
