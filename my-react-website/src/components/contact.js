import React from 'react';
import emailjs from 'emailjs-com';
function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5w9icvj',
        'template_g5s4hvf',
        e.target,
        'dinwsaIjI9zKzd9QQ'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Handle success, e.g., show a success message
        },
        (error) => {
          console.error(error.text);
          // Handle error, e.g., show an error message
        }
      );
  };

  return (
    <section id="contact">
      <form onSubmit={sendEmail} className="lg:w-1/3  text-center flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">Contact Me</h2>
        <p className="leading-relaxed mb-5">Feel free to contact me to collaborate!</p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label> <p />
          <input type="text" id="name" name="name" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label><p />
          <input type="email" id="email" name="email" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label><p />
          <textarea id="message" name="message" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required />
        </div>
        <div>
          <button type="submit" className="text-white bg-indigo-500 w-1/3  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
      </form>
    </section>
  );
}
export default Contact;