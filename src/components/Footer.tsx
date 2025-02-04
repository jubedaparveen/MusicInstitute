

function Footer() {
  return (
    <footer className="bg-black text-slate-300 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-[#a3efe8] text-lg font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Music institution dedicated to teaching the art
             of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-[#a3efe8] font-bold text-lg  mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-[#a3efe8] hover:font-bold transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#a3efe8] hover:font-bold transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#a3efe8] hover:font-bold transition-colors duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#a3efe8] hover:font-bold transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#a3efe8] text-lg font-semibold mb-4">Follow Us</h2>
          <div className="list-none ">
            <li>
              <a href="#" className="hover:text-[#a3efe8] hover:font-bold transition-colors duration-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#a3efe8] hover:font-bold transition-colors duration-300">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#a3efe8] hover:font-bold transition-colors duration-300">
                Instagram
              </a>
            </li>
          </div>
        </div>
        <div>
          <h2 className="text-[#a3efe8] text-lg font-bold mb-4">Contact Us</h2>
          <p>Indore, India</p>
          <p>Indore 453441</p>
          <p>Email: info@musicinstitute.com</p>
          <p>Phone: (123) 456-1234</p>
        </div>
      </div>
      <p className="text-center text-[#a3efe8] font-bold text-xs pt-8">© 2024 Music Institute. All rights reserved.</p>
    </footer>
  )
}

export default Footer