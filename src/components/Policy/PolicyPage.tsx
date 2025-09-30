"use client";
import React from "react";
import { motion } from "framer-motion";

const PolicyPage: React.FC = () => {
  return (
    <div className="mb-8 bg-white min-h-screen mx-auto">
      <div className="py-10 px-4 sm:px-8 lg:px-16 mt-[6rem]">
        <div className="max-w-7xl mx-auto p-8">
          <h1 className="text-2xl font-bold text-left mb-6">Privacy Policy for Website</h1>
          <p className="text-gray-700 mb-6">
            This page is used to inform visitors regarding ULKA TV policies with the collection, use, and disclosure of
            Personal Information if anyone decided to use our Services.
          </p>
          <p className="text-gray-700 mb-6">
            If you choose to use our Service, then you agree to the collection and use of information in relation to this
            policy. The Personal Information that We at ULKA TV collect is used for providing and improving the Service.
            We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p className="text-gray-700 mb-6">
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is
            accessible at ULKA TV unless otherwise defined in this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mb-4">Information Collection and Use</h2>
          <p className="text-gray-700 mb-6">
            For a better experience, while using our Service, We at ULKA TV may require you to provide us with certain
            personally identifiable information. The information that We at ULKA TV request will be retained on your
            device and is not collected by us in any other way.
          </p>
          <p className="text-gray-700 mb-6">
            The app does use third-party services that may collect information used to identify you.
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Google Play Services</li>
            <li>Firebase Analytics</li>
            <li>Crashlytics</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">Log Data</h2>
          <p className="text-gray-700 mb-6">
            We at ULKA TV want to inform you that whenever you use our Service, in the case of an error in the app, we
            collect data and information (through third-party products) on your device called Log Data. This Log Data may
            include information such as your device Internet Protocol (IP) address, device name, operating system version,
            the configuration of the app when utilizing our Service, the time and date of your use of the Service, and
            other statistics.
          </p>

          <h2 className="text-xl font-semibold mb-4">Cookies</h2>
          <p className="text-gray-700 mb-6">
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These
            are sent to your browser from the websites that you visit and are stored on your device&apos;s internal memory.
          </p>
          <p className="text-gray-700 mb-6">
            This Service does not use these &ldquo;cookies&rdquo; explicitly. However, the app may use third party code and libraries that use &ldquo;cookies&rdquo; to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
          </p>

          <h2 className="text-xl font-semibold mb-4">Service Providers</h2>
          <p className="text-gray-700 mb-6">
            ULKA TV may employ third-party companies and individuals due to the following reasons:
          </p>

          {[
            "To facilitate our Service;",
            "To provide the Service on our behalf;",
            "To perform Service-related services; or",
            "To assist us in analyzing how our Service is used.",
            "We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
          ].map((item, index) => (
            <React.Fragment key={index}>
              <p className="text-gray-700 mb-6 text-left flex">
                <motion.span
                  className="text-blue-500 mr-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                >
                  -
                </motion.span>
                <motion.span
                  className="text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  {item}
                </motion.span>
              </p>
              <hr className="my-4" />
            </React.Fragment>
          ))}

          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <p className="text-gray-700 mb-6">
            We at ULKA TV value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and We at ULKA TV cannot guarantee its absolute security.
          </p>

          <h2 className="text-xl font-semibold mb-4">Links to other sites</h2>
          <p className="text-gray-700 mb-6">
            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by ULKA TV. Therefore, I strongly advise you to review the Privacy Policy of these websites. We at ULKA TV have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2 className="text-xl font-semibold mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-700 mb-6">
            These Services do not address anyone under the age of 7. We at ULKA TV do not knowingly collect personally identifiable information from children under 7. In the case we at ULKA TV discover that a child under 13 has provided ULKA TV with personal information, we immediately delete the data from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
          </p>

          <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We at ULKA TV may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will be notifying you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
          </p>

          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact us at privacy@ulka.tv.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
