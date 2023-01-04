import React from "react";
// import Aooter from '../../../assets/images/appointment.png';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
  return (
    <div  style={{backgroundImage:`url(${footer})`}} className="h-96 bg-cover bg-no-repeat bg-center">
      <footer className="footer text-base-content flex justify-between p-20" >
        <div>
          <span className="footer-title">Services</span>
          <p className="link link-hover">Branding</p>
          <p className="link link-hover">Design</p>
          <p className="link link-hover">Marketing</p>
          <p className="link link-hover">Advertisement</p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <p className="link link-hover">About us</p>
          <p className="link link-hover">Contact</p>
          <p className="link link-hover">Jobs</p>
          <p className="link link-hover">Press kit</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p className="link link-hover">Terms of use</p>
          <p className="link link-hover">Privacy policy</p>
          <p className="link link-hover">Cookie policy</p>
        </div>
      </footer>
      <p className="text-center">Copyright 2022 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
