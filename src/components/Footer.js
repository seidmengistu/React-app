 import React from 'react'
 import { BsSearch } from 'react-icons/bs'
 import { Link } from 'react-router-dom'
 import { BsLinkedin,BsGithub,BsYoutube,BsInstagram, } from 'react-icons/bs'
 
 const Footer = () => {
   return (
     <>
     <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt="newsletter"/>
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
                <input type="text" className="form-control py-1 " placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
          </div>

        </div>

      </div>
     </footer>

     <footer className='py-4'>
       <div className='container-xxl'>
         <div className='row'>
           <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us </h4>
              <address className='text-white fs-6'>
                Hno: 277 Near Vill Chopal,<br/> Addis Ababa,Ethiopia<br/>
                Pincode:131103
              </address>
              <a href="tel:+251968983297" className='mt-2 d-block mb-2 text-white'>+251 968 983 207</a>
              <a href="mailto:seidmengistu88@gmail.com" className='mt-2 d-block mb-2 text-white'>seidmengistu88@gmail.com</a>
              <div className='social_icons d-flex align-items-center gap-30'>
                 <a href="#" className='text-white'>
                  <BsLinkedin className=' fs-4'/>
                 </a>
                 <a href="#" className='text-white'>
                  <BsInstagram className='fs-4'/>
                 </a>
                 <a href="#" className='text-white'>
                  <BsGithub className='fs-4'/>
                 </a>
                 <a href="#" className='text-white'>
                  <BsYoutube className='fs-4'/>
                 </a>
              </div>
           </div>
           <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Plolicy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms of Service</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
           </div>
           <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Search</Link>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
              <Link className='text-white py-2 mb-1'>Store Chart</Link>
            </div>
           </div>
           <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphone</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
            </div>
           </div>
         </div>
       </div>
     </footer>

     <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>  
           <div className="col-12">
             <p className='text-center mb-0 text-white'> 
                &copy; {new Date().getFullYear()}; Powered by Devloper Seid
              </p>             
           </div>
        </div>

      </div>
     </footer>
     
     </>
   )
 }
 
 export default Footer