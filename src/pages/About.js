import React from "react";
import AboutImage from "../assests/images/masala.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          eligendi, omnis facere quas modi veritatis architecto temporibus
          dolore cumque. Quidem, ipsa optio explicabo minus ratione odit dolores
          porro atque sit delectus dolorum consequuntur, quisquam libero alias.
          Quo, placeat commodi laborum ipsum fugiat officia odit unde explicabo
          optio. Quos rerum architecto maxime placeat cumque optio fugit sequi.
          Placeat nostrum tenetur modi porro sint hic optio quisquam quasi vitae
          natus? Quis blanditiis architecto tempore maxime veritatis, tenetur
          dolore quasi unde dicta eius, eaque id quas ex! Voluptate voluptatum
          commodi, quas qui sit nesciunt, earum voluptas consectetur sequi
          expedita perferendis laborum repellat odit cupiditate distinctio eius
          quae repudiandae consequuntur laboriosam. Aliquam voluptates totam sit
          ab soluta delectus ducimus eius quibusdam aspernatur? Nemo libero
          totam nam quasi tempore cumque ipsa doloribus! Debitis, repellat? Ut
          placeat eaque culpa, ipsum temporibus consequuntur porro deleniti fuga
          dolorum, ab, repellendus voluptas sint quidem aut vel illo pariatur
          minus!
        </p>
      </div>
    </div>
  );
};

export default About;
