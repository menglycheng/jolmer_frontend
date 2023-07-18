import React from "react";

const privacy = () => {
  return (
    <div className="px-5 py-10 max-w-screen-xl mx-auto mt-10">
      <div className="flex justify-between lg:space-x-72 space-x-10">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-primary-lowBlack">
            Privacy Policy
          </h1>
          <div className="h-[4px] rounded-full bg-primary-blue w-16 mt-2"></div>
          <p className="font-medium mt-5 text-sm md:text-base max-w-xl text-primary-lowBrown">
            So you think you are at the right place? If yes, every collaboration
            has its own terms of use. Here’s our terms and conditions.
          </p>
        </div>
        <div className="hidden md:inline">
          <img src=" /Policy 1.png" alt="" className="h-[292px]" />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-2xl md:text-3xl  text-primary-blue">
          Use of Your Personal Data
        </h1>

        <p className="font-medium mt-4 text-sm md:text-base">
          The Company may use Personal Data for the following purposes:
          <ul className="list-disc pl-10">
            <li>
              To provide and maintain our Service, including to monitor the
              usage of our Service.
            </li>
            <li>
              To manage Your Account: to manage Your registration as a user of
              the Service. The Personal Data You provide can give You access to
              different functionalities of the Service that are available to You
              as a registered user.
            </li>
            <li>
              For the performance of a contract: the development, compliance and
              undertaking of the purchase contract for the products, items or
              services You have purchased or of any other contract with Us
              through the Service.
            </li>
            <li>
              To contact You: To contact You by email, telephone calls, SMS, or
              other equivalent forms of electronic communication, such as a
              mobile application's push notifications regarding updates or
              informative communications related to the functionalities,
              products or contracted services, including the security updates,
              when necessary or reasonable for their implementation.
            </li>
            <li>
              To provide You with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless You have opted not to receive such information.
            </li>
            <li>
              To manage Your requests: To attend and manage Your requests to Us.
            </li>
            <li>
              For business transfers: We may use Your information to evaluate or
              conduct a merger, divestiture, restructuring, reorganization,
              dissolution, or other sale or transfer of some or all of Our
              assets, whether as a going concern or as part of bankruptcy,
              liquidation, or similar proceeding, in which Personal Data held by
              Us about our Service users is among the assets transferred.
            </li>
            <li>
              For other purposes: We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing
              and your experience.
            </li>
          </ul>
          We may share Your personal information in the following situations:
          <ul className="list-disc pl-10">
            <li>
              With Service Providers: We may share Your personal information
              with Service Providers to monitor and analyze the use of our
              Service, to contact You.
            </li>
            <li>
              For business transfers: We may share or transfer Your personal
              information in connection with, or during negotiations of, any
              merger, sale of Company assets, financing, or acquisition of all
              or a portion of Our business to another company.
            </li>
            <li>
              With Affiliates: We may share Your information with Our
              affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include Our parent company
              and any other subsidiaries, joint venture partners or other
              companies that We control or that are under common control with
              Us.
            </li>
          </ul>
        </p>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-2xl md:text-3xl text-primary-blue">
          Personal Data
        </h1>
        <p className="font-medium mt-4 text-sm md:text-base">
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
          <ul className="list-disc pl-10">
            <li>address</li>
            <li>First name and last name</li>
            <li>Usage Data</li>
          </ul>
        </p>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-2xl md:text-3xl text-primary-blue">
          Usage Data
        </h1>
        <p className="font-medium mt-4 text-sm md:text-base">
          Usage Data is collected automatically when using the Service. Usage
          Data may include information such as Your Device's Internet Protocol
          address (e.g. IP address), browser type, browser version, the pages of
          our Service that You visit, the time and date of Your visit, the time
          spent on those pages, unique device identifiers and other diagnostic
          data. When You access the Service by or through a mobile device, We
          may collect certain information automatically, including, but not
          limited to, the type of mobile device You use, Your mobile device
          unique ID, the IP address of Your mobile device, Your mobile operating
          system, the type of mobile Internet browser You use, unique device
          identifiers and other diagnostic data. We may also collect information
          that Your browser sends whenever You visit our Service or when You
          access the Service by or through a mobile device.
        </p>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-2xl md:text-3xl text-primary-blue">
          Use of Your Personal Data
        </h1>
        <p className="font-medium mt-4 text-sm md:text-base">
          <ul className="list-disc pl-5">
            <li>
              With business partners: We may share Your information with Our
              business partners to offer You certain products, services or
              promotions.
            </li>
            <li>
              With other users: when You share personal information or otherwise
              interact in the public areas with other users, such information
              may be viewed by all users and may be publicly distributed
              outside. If You interact with other users or register through a
              Third-Party Social Media Service, Your contacts on the Third-Party
              Social Media Service may see Your name, profile, pictures and
              description of Your activity. Similarly, other users will be able
              to view descriptions of Your activity, communicate with You and
              view Your profile.
            </li>
            <li>
              With Your consent: We may disclose Your personal information for
              any other purpose with Your consent.
            </li>
          </ul>
        </p>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-2xl md:text-3xl text-primary-blue">
          Contact Us
        </h1>

        <p className="font-medium mt-4 text-sm md:text-base">
          If you have any questions about this Privacy Policy, You can contact
          us:
          <ul className="list-disc pl-10">
            <li>By visiting this page on our website: jolmer.me/contact us</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default privacy;
