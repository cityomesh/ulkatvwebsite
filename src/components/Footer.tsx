import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ULKA TV</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://ulka.tv/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="https://ulka.tv/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://ulka.tv/packs" className="hover:text-gray-400">
                  Our Packs
                </a>
              </li>
              <li>
                <a href="https://ulka.tv/faq" className="hover:text-gray-400">
                  F.A.Q
                </a>
              </li>
              <li>
                <a href="https://ulka.tv/contact-us" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-xl hover:text-gray-400 fab fa-cc-paypal"></a>
              </li>
              <li>
                <a href="#" className="text-xl hover:text-gray-400 fab fa-cc-visa"></a>
              </li>
              <li>
                <a href="#" className="text-xl hover:text-gray-400 fab fa-cc-mastercard"></a>
              </li>
              <li>
                <a href="#" className="text-xl hover:text-gray-400 fab fa-cc-amex"></a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="mb-4">
              <strong>T 74164 10222</strong>
              <br />
              <strong>T 74164 10888</strong>
              <br />
              Email:{" "}
              <a href="mailto:contact@ulka.tv" className="hover:text-gray-400">
                contact@ulka.tv
              </a>
            </p>
            <p className="mb-4">
              City Online Media Pvt Ltd
              <br />
              709, 7th Floor, Aditya Trade Center, Ameerpet, Hyderabad, Telangana 500038
            </p>
            <p>
              <a
                href="https://goo.gl/maps/TPjXfYVtgy7CSFx69"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 flex items-center"
              >
                <i className="icon-map-marker text-lg mr-2"></i>
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>


        <div className="flex flex-wrap justify-between items-start text-white border-t border-gray-700 pt-4">
          <div className="text-center">
            <p>
              <a href="https://ulka.tv/" className="hover:text-gray-400">
                ULKA TV
              </a>
            </p>
            <p>© 2020-22 All Rights Reserved. City Online Media Pvt Ltd.</p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-bold">GET SOCIAL</span>
              <a href="#" className="text-xl hover:text-gray-400 fab fa-facebook-f"></a>
              <a href="#" className="text-xl hover:text-gray-400 fab fa-twitter"></a>
              <a href="#" className="text-xl hover:text-gray-400 fab fa-youtube"></a>
              <a href="#" className="text-xl hover:text-gray-400 fab fa-google-plus-g"></a>
            </div>
            <div className="text-sm">
              Tech Partners:{" "}
              <a
                href="https://cultnerds.io/"
                className="hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                CultNerds IT Solutions
              </a>
            </div>
          </div>
        </div>



      </div>
    </footer>
  );
}

export default Footer;
