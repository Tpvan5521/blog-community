import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import Hr from "Line/Hr";

const Footer = () => {
  return (
    <div className="bg-transparent">
      <div className="container mx-auto">
        {/* list */}
        <div className="flex py-8">
          <div className="flex-1">
            <h5 className="text-coffee font-bold uppercase text-lg">FooterTitle</h5>
            <ul>
              <li className="my-2">
                <Link to="">FooterItem</Link>
              </li>
              <li className="my-2">
                <Link to="">FooterItem</Link>
              </li>
              <li className="my-2">
                <Link to="">FooterItem</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h5 className="text-coffee font-bold uppercase text-lg">FooterTitle</h5>
            <ul>
              <li className="my-2">
                <Link to="">FooterItem</Link>
              </li>
              <li className="my-2">
                <Link to="">FooterItem</Link>
              </li>
              <li className="my-2">
                <Link to="">FooterItem</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h5 className="text-coffee font-bold uppercase text-lg">FooterTitle</h5>
            <ul className="flex">
              <li className="my-2 mr-4 text-2xl">
                <Link to="/">
                  <FaFacebookSquare />
                </Link>
              </li>
              <li className="my-2 mr-4 text-2xl">
                <Link to="/">
                  <FaTwitter />
                </Link>
              </li>
              <li className="my-2 mr-4 text-2xl">
                <Link to="/">
                  <FaLinkedin />
                </Link>
              </li>
              <li className="my-2 mr-4 text-2xl">
                <Link to="/">
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Hr />
      <div className="container mx-auto text-center">
        {/* coppyright */}
        <div className="py-4">Copyright &copy; 2022</div>
      </div>
    </div>
  );
};

export default Footer;
