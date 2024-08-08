import React from "react";
import { CSSTransition } from "react-transition-group";
import "./ContactUsPage.css"; // Import your CSS file

const ContactUsPage = () => {
  return (
    <div className="flex items-center  min-h-screen p-4 justify-evenly  max-md:flex-col">
      <CSSTransition in={true} appear={true} timeout={1000} classNames="slide-left">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Get In Touch For Quick Demo
          </h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="company"
              >
                Hotel/Agency/Company Name
              </label>
              <input
                type="text"
                id="company"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="mobile"
              >
                Your Mobile Number
              </label>
              <div className="flex mt-1">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  🇮🇳
                </span>
                <input
                  type="text"
                  id="mobile"
                  className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="info"
              >
                Anything else we should know
              </label>
              <textarea
                id="info"
                rows="3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <div className="g-recaptcha" data-sitekey="your_site_key"></div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </CSSTransition>
      <CSSTransition in={true} appear={true} timeout={1000} classNames="slide-right">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
            We Are Here For You
          </h3>
          <p className="text-gray-700 mb-4">
            We respond to e-mail messages and requests via the contact form within
            24 hours on working days. For any questions regarding our products,
            support inquiries, or anything else, our office is reachable between
            08:00 – 21:00 IST on working days. The Technical Support number is
            only available for support inquiries.
          </p>
          <h4 className="text-lg font-semibold text-blue-600">Corporate Office</h4>
          <p className="text-gray-700">
            Lower Ground Floor, A-6, Sector 22, California, US, 19970
          </p>
          <p className="text-gray-700"> <span></span> info@asiatech.in</p>
          <p className="text-gray-700">
            <a
              href="https://hotel-managment-six.vercel.app/"
              className="text-blue-600 hover:underline"
            >
              www.dreamland.in
            </a>
          </p>
          <h4 className="text-lg font-semibold mt-4 text-blue-600">For Offers</h4>
          <p className="text-gray-700">+91 - 7200700800</p>
          <p className="text-gray-700"> info@dreamland.in</p>
          <h4 className="text-lg font-semibold mt-4">Technical Support</h4>
          <p className="text-gray-700">+91 - 90000666086</p>
          <p className="text-gray-700">support@dreamland.in</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ContactUsPage;
