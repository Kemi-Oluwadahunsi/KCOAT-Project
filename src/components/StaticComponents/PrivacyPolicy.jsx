import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="border-l-8 border-simple1 pt-[8rem] px-[20em] pb-4 text-justify flex flex-col gap-[2rem] font-oxygen text-categoryborder">
      <h2 className="font-bold text-[4rem]">PRIVACY POLICY</h2>
      <p className="text-[1.2em]">
        At KCOAT, we are committed to protecting the privacy and security of
        your personal information. This Data Policy outlines how we collect,
        use, disclose, and safeguard your data when you use our website or
        interact with our services. By accessing or using our services, you
        agree to the terms outlined in this policy.
      </p>
      <div className="">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.5em]">INFORMATION WE COLLECT</h2> 
          <p className="text-[1.2em]">
            We collect various types of information when you interact with our
            website or services, including:
          </p>
        </div>

        <ul>
          <li className="text-[1.2em] list-disc ml-10">
            Personal information provided by you, such as name, email address,
            contact details, and payment information.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            Information automatically collected through cookies and similar
            technologies, including IP address, browser type, device
            identifiers, and website usage data.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            Information obtained from third-party sources, such as social media
            platforms or marketing partners.
          </li>
        </ul>
      </div>

      <div className="">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.5em]">
            HOW WE USE YOUR INFORMATION
          </h2>
          <p className="text-[1.2em]">
            We use the information we collect for the following purposes:
          </p>
        </div>

        <ul>
          <li className="text-[1.2em] list-disc ml-10">
            To provide and improve our services, customize your experience, and
            respond to your inquiries.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            To communicate with you about our products, services, promotions,
            and updates.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            To analyze usage trends, monitor the effectiveness of our marketing
            efforts, and prevent fraud.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            To comply with legal obligations and enforce our terms of service.
          </li>
        </ul>
      </div>

      <div className="">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.5em]">
            DATA SHARING AND DISCLOSURE
          </h2>
          <p className="text-[1.2em]">
            We may share your information with third parties under the following
            circumstances:
          </p>
        </div>

        <ul>
          <li className="text-[1.2em] list-disc ml-10">
            With service providers and business partners who assist us in
            delivering our services, processing payments, or conducting data
            analysis.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            With your consent or at your direction, including when you choose to
            connect your account with third-party applications or services.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            In response to legal requests or court orders, or to protect our
            rights, property, or safety, or the rights, property, or safety of
            others.
          </li>
        </ul>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.5em]">DATA SECURITY</h2>
          <p className="text-[1.2em]">
            We employ industry-standard security measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction. However, no method of transmission over
            the internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>{" "}
          <p className="text-[1.5em] font-bold">Your Privacy Choices</p>
          <p className="text-[1.2em]">
            You have certain rights and choices regarding the collection, use,
            and disclosure of your personal information:
          </p>
        </div>

        <ul>
          <li className="text-[1.2em] list-disc ml-10">
            You may update or correct your personal information by accessing
            your account settings.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            You may opt-out of receiving promotional communications or
            newsletter from us by following the unsubscribe instructions
            provided in our emails.
          </li>
          <li className="text-[1.2em] list-disc ml-10">
            You may disable cookies or adjust your browser settings to restrict
            the collection of certain information.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[1.5em]">CHILDREN&apos;S PRIVACY</h2>
        <p className="text-[1.2em]">
          Our services are not directed to children under the age of 13, and we
          do not knowingly collect personal information from children. If you
          believe that we have inadvertently collected personal information from
          a child, please contact us immediately.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[1.5em]">UPDATES TO THIS POLICY</h2>
        <p className="text-[1.2em]">
          We may update this Data Policy from time to time to reflect changes in
          our practices or legal requirements. We encourage you to review this
          page periodically for the latest information on our data practices.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-[1.5em]">Contact Us</h2>
        <p className="text-[1.2em]">
          If you have any questions or concerns about this Data Policy or our
          data practices, please contact us at{" "}
          <Link to="/contact">
            <span className="font-bold underline decoration-2 decoration-tertiary underline-offset-4">
              Contact.
            </span>
          </Link>
        </p>
        <strong>Last Updated: [Date]</strong>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
