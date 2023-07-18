import React from "react";
import Head from "next/head";

const TermOfUse = () => {
  return (
    <div className="px-5 py-10 max-w-screen-xl mx-auto mt-10">
      <Head>
        <title>Term & Conditions | Jolmer</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      <div className="flex justify-between lg:space-x-72 space-x-10">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl  text-primary-lowBlack">
            Term of Condition
          </h1>
          <div className="h-[4px] rounded-full bg-primary-blue w-16 mt-2"></div>
          <p className="font-medium mt-5 max-w-xl text-primary-lowBrown text-sm md:text-base">
            So you think you are at the right place? If yes, every collaboration
            has its own terms of use. Here’s our terms and conditions.
          </p>
        </div>
        <div className="hidden md:inline">
          <img
            src="/TermOfCondition 1.png"
            alt=""
            className=" h-[300px] lg:h-[292px]"
          />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-2xl md:text-3xl  text-primary-blue">
          Term of Use
        </h1>
        <p className="font-medium mt-4 text-sm md:text-base">
          Your use of Jolmer’s products, software, services and websites
          (referred to collectively as the “Services” in this document) is
          subject to the terms of a legal agreement between you and Jolmer.
          Please read the following terms and conditions very carefully as your
          use of services is subject to your acceptance of and compliance with
          the following terms and conditions ("Terms"). By subscribing to or
          using any of our services, you agree that you have read, understood
          and are bound by the Terms, regardless of how you subscribe to or use
          the services. If you do not want to be bound by the Terms, you must
          not subscribe to or use our services. In these Terms, references to
          "you", "User", “Visitor” shall mean the end user accessing the
          Website, its contents and using the Services offered through the
          Website, and "we", "us" and "our" shall mean Unstop.com and its
          affiliates.
        </p>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-2xl md:text-3xl text-primary-blue">
          User Aggreement
        </h1>
        <p className="font-medium mt-4 text-sm md:text-base">
          You hereby certify that your User Content does not violate our
          Acceptable Use Policy. You may not represent or imply to others that
          your User Content is in any way provided, sponsored or endorsed by
          JolMer. Because you alone are responsible for your User Content, you
          may expose yourself to liability. JolMer is not obliged to backup any
          User Content that you post; also, your User Content may be deleted at
          any time without prior notice to you. You are solely responsible for
          making your own backup copies of your User Content if you desire. You
          hereby grant to JolMer an irreversible, nonexclusive, royalty-free and
          fully paid, worldwide license to reproduce, distribute, publicly
          display and perform, prepare derivative works of, incorporate into
          other works, and otherwise use and exploit your User Content, and to
          grant sub licenses of the foregoing rights, solely for the purposes of
          including your User Content in the Site. You hereby irreversibly waive
          any claims and assertions of moral rights or attribution with respect
          to your User Content.
        </p>
      </div>
    </div>
  );
};

export default TermOfUse;
