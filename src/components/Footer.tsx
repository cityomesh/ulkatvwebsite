import React from 'react';
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Payment Icons */}
          <div>
            <h3 className="text-lg font-bold mb-4">We Accept</h3>
            <ul className="flex space-x-4 text-3xl">
              <li><FaCcPaypal className="hover:text-gray-400" /></li>
              <li><FaCcVisa className="hover:text-gray-400" /></li>
              <li><FaCcMastercard className="hover:text-gray-400" /></li>
              <li><FaCcAmex className="hover:text-gray-400" /></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="mb-2 font-semibold">T 74164 10888</p>
            <p className="mb-2">
              Email:{" "}
              <a href="mailto:contact@ulka.tv" className="hover:text-gray-400 underline">
                contact@ulka.tv
              </a>
            </p>
            <p className="mb-2">
              Ucast Media Pvt Ltd<br />
              709, 7th Floor, Aditya Trade Center,<br />
              Ameerpet, Hyderabad, Telangana 500038
            </p>
            <p>
              <a
                href="https://goo.gl/maps/TPjXfYVtgy7CSFx69"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 flex items-center"
              >
                <FaMapMarkerAlt className="mr-2" />
                Open in Google Maps
              </a>
            </p>
          </div>

          {/* Social Media Icons (Optional) */}
          <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="https://www.facebook.com/ulka.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="hover:text-gray-400" />
                </a>
                <a
                  href="https://www.instagram.com/ulka.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="hover:text-gray-400" />
                </a>
                <a
                  href="https://twitter.com/ulka_tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="hover:text-gray-400" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ulka-tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="hover:text-gray-400" />
                </a>
              </div>
            </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>
            <a href="https://ulka.tv/" className="hover:text-gray-200 font-medium">
              ULKA TV
            </a>
          </p>
          <p>© 2020-22 All Rights Reserved. Ucast Media Pvt Ltd.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
