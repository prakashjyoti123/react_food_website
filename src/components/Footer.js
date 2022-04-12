import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon />
        <InstagramIcon />
        <FacebookIcon />
        <EmailIcon />
      </div>
      <p>&copy; 2021 Indianfood.com. </p>
    </div>
  );
}

export default Footer;
