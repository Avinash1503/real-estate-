import React from 'react'
import { toast } from 'react-toastify';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "27838663-682a-4494-848b-f7c716170f5a");


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submit Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div 
    initial={{ opacity: 0, x:-200}}
      transition={{ duration: 1 }}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    class ='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2x1 sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonails</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Ready to Make a Move ? Let's Build Your Future Together</p>

      <div className="flex justify-center items-center ">
      <form onSubmit={onSubmit} className="max-w-2xl max-auto text-gray-600 pt-8">
        <div className="flex flex-wrap ">
          {/* Name Field */}
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              required/>
          </div>

          {/* Email Field */}
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 mt-2"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="my-6 text-left">
          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md px-4 py-3 mt-2 h-48 resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
          > {result ? result : "Send Message"}
          </button>
        </div>
      </form>
    </div>


    </motion.div>
  )
}
export default Contact;


