import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  function formhandler(event) {
    event.preventDefault();
    console.log("form submitted",event.target.value);

    // Clear the input fields
    const form = event.target;
    const inputFields = form.querySelectorAll('input, textarea');
    inputFields.forEach(input => input.value = '');
  }
  return (
    <div className='bg-gray-950 '>
      <div className='max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen '>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-3xl md:text-4xl font-bold text-[#33cccc] mb-4 text-center '>Get in touch </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className='text-gray-300 text-center max-w-xl mb-12 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, fugiat, in sed tempore quae accusantium iusto incidunt sint minus sapiente.</motion.p>
        <div className='grid md:grid-flow-col gap-10 '>
          {/* contact Form  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='bg-[#c7e9ec] shadow-xl shadow-[#33cccc] rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]'>
            <form onSubmit={formhandler}
              className='flex flex-col space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Full Name</label>
                <input type="text" id="name" className='mt-1 p-3 block w-full text-white border-2 border-[#33cccc]
        bg-gray-900 rounded-md shadow-sm sm:text-sm' placeholder='xyz' />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-900'>Email Address</label>
                <input type="email" id="email" className='mt-1 p-3 block w-full text-white border-2 border-[#33cccc]
        bg-gray-900 rounded-md shadow-sm sm:text-sm' placeholder='xyz@gmail.com' />
              </div>
              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-900'>Message</label>
                <textarea rows='4' id="message" className='mt-1 p-3 block w-full text-white border-2 border-[#33cccc]
        bg-gray-900 rounded-md shadow-sm sm:text-sm resize-none' placeholder='your message here....' />
              </div>
              <button type='submit' className='bg-[#33cccc] text-white py-2 px-4 rounded-md shadow-md hover:bg-black'>Send Message</button>
            </form>

          </motion.div>
          {/* location and maps  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='bg-[#c7e9ec] shadow-xl shadow-[#33cccc] rounded-lg py-8 md:p-12 max-w-3xl flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8 '>
            <div className='flex-1 '>
              <h3 className='text-2xl font-semibold mb-4 '>Our Location </h3>
              <div className='text-gray-950 flex gap-2 items-center '>
                <MapPin fill='#33cccc' className='text-gray-950' />
                <p className='text-sm '>
                  123 Business Avenue,<br />Nike city ,Marketing State 12345
                </p>
              </div>
              <div className='text-gray-950 flex gap-2 items-center '>
                <Phone fill='#33cccc' className='text-gray-950' />
                <p className='text-gray-950 mt-4 '>
                  phone: (123) 456 7890
                </p>
              </div>
              <div className='text-gray-950 flex gap-2 items-center '>
                <Mail fill='#33cccc' className='text-gray-950' />
                <p className='text-gray-950'>
                  Email: contact@Nike.com
                </p>
              </div>
            </div>
            {/* map placeholder  */}
            <div className='w-full h-auto rounded-lg p-8  '>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1810585.5710178846!2d76.75564154443305!3d27.58422900092912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0068f051c8c83%3A0x6bd546405d569bf3!2sNIKE!5e0!3m2!1sen!2sin!4v1737628259041!5m2!1sen!2sin"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Contact
