import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import DentalCare from "../DentalCare/DentalCare";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
        <Banner></Banner>
        <Cards></Cards>
        <Services></Services>
        <DentalCare></DentalCare>
        <MakeAppoinment></MakeAppoinment>
        <Testimonial></Testimonial>
        <Contact></Contact>
    </div>
  );
};

export default Home;
