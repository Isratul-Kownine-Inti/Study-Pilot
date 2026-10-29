import React from 'react';
import { LuNotebookPen } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-10">
      <aside>

        <p>
          <a className="flex gap-2 md:text-2xl font-semibold"><LuNotebookPen className='bg-emerald-600 rounded text-white px-1 font-bold text-2xl' />StudyPilot</a>
             </p>
          <span className='font-semibold text-slate-600 pt-5'>  A study dashboard for turning goals <br /> into daily progress.
          </span>


    

     
      </aside>
      <nav>
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">FAQ</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Blog</a>
      </nav>
      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Help center</a>
        <a className="link link-hover">Study tips</a>
        <a className="link link-hover">Contacts</a>
      </nav>
    </footer>
  );
};

export default Footer;