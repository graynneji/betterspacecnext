"use client";
import Link from "next/link";
import styled from "styled-components";

export const PrivacyContent = styled.section`
  padding: 100px 200px;
  display: flex;
  gap: 10px;
  @media screen and (max-width: 1270px) {
    padding: 20px 60px 20px 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const PrivacyContainerContent = styled(PrivacyContainer)`
  /* align-items: center;
  justify-content: center; */
`;

export const PrivacyHeader = styled(PrivacyContainer)`
  gap: 24px;
  //align-items: flex-start;
  //justify-content: left;
  width: 100%;
`;

export const PrivacyHeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: -0.01em;
  text-align: left;
  color: rgba(2, 44, 34, 1);
`;

export const PrivacyHeaderTextTwo = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.01em;
  text-align: left;
  color: rgba(2, 44, 34, 1);
`;

export const PrivacyHeaderSubText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.004em;
  text-align: left;
  color: rgba(2, 44, 34, 1);
`;

export const PrivacyParagraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.004em;
  text-align: justify;
  color: rgba(2, 44, 34, 1);
`;

export const PrivacyList = styled.ul`
  list-style: disc;
  li {
    list-style: disc;
  }
`;

const Privacy = () => {
  return (
    <>
      <PrivacyContent>
        <PrivacyContainer>
          <PrivacyContainerContent>
            <PrivacyHeader>
              <PrivacyHeaderText>Privacy Policy</PrivacyHeaderText>
              <PrivacyHeaderSubText>
                Last updated: April 19, 2024
              </PrivacyHeaderSubText>
            </PrivacyHeader>
            <PrivacyParagraph>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </PrivacyParagraph>
            <PrivacyParagraph>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the{" "}
              <Link
                href="https://www.termsfeed.com/privacy-policy-generator/"
                target="_blank"
              >
                Privacy Policy Generator
              </Link>
              .
            </PrivacyParagraph>
            <PrivacyHeaderTextTwo>
              Interpretation and Definitions
            </PrivacyHeaderTextTwo>
            <PrivacyHeaderTextTwo>Interpretation</PrivacyHeaderTextTwo>
            <PrivacyParagraph>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </PrivacyParagraph>
            <PrivacyHeaderTextTwo>Definitions</PrivacyHeaderTextTwo>
            <PrivacyParagraph>
              For the purposes of this Privacy Policy:
            </PrivacyParagraph>
            <PrivacyParagraph>
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </PrivacyParagraph>
            <PrivacyParagraph>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party, where
              &quot;control&quot; means ownership of 50% or more of the shares,
              equity interest or other securities entitled to vote for election
              of directors or other managing authority.
            </PrivacyParagraph>
            <PrivacyParagraph>
              <strong>Application</strong> refers to betterspace, the software
              program provided by the Company.
            </PrivacyParagraph>
            <PrivacyParagraph>
              <strong>Company</strong> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
              in this Agreement) refers to betterspace Ltd., Suite 309 elyon
              plaza opposite daptchi fitness centre.
            </PrivacyParagraph>
            <PrivacyList>
              <li>
                <PrivacyParagraph>
                  <strong>Country</strong> refers to: Nigeria
                </PrivacyParagraph>
              </li>

              <li>
                <PrivacyParagraph>
                  <strong>Device</strong> means any device that can access the
                  Service such as a computer, a cellphone or a digital tablet.
                </PrivacyParagraph>
              </li>

              <li>
                <PrivacyParagraph>
                  <strong>Personal Data</strong> is any information that relates
                  to an identified or identifiable individual.
                </PrivacyParagraph>
              </li>

              <li>
                <PrivacyParagraph>
                  <strong>Service</strong> refers to the Application.
                </PrivacyParagraph>
              </li>

              <li>
                <PrivacyParagraph>
                  <strong>Service Provider</strong> means any natural or legal
                  person who processes the data on behalf of the Company. It
                  refers to third-party companies or individuals employed by the
                  Company to facilitate the Service, to provide the Service on
                  behalf of the Company, to perform services related to the
                  Service or to assist the Company in analyzing how the Service
                  is used.
                </PrivacyParagraph>
              </li>

              <li>
                <PrivacyParagraph>
                  <strong>Service Provider</strong> means any natural or legal
                  person who processes the data on behalf of the Company. It
                  refers to third-party companies or individuals employed by the
                  Company to facilitate the Service, to provide the Service on
                  behalf of the Company, to perform services related to the
                  Service or to assist the Company in analyzing how the Service
                  is used.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>Third-party Social Media Service</strong> refers to
                  any website or any social network website through which a User
                  can log in or create an account to use the Service.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>Usage Data</strong> refers to data collected
                  automatically, either generated by the use of the Service or
                  from the Service infrastructure itself (for example, the
                  duration of a page visit).
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </PrivacyParagraph>
              </li>
            </PrivacyList>
            <PrivacyHeaderTextTwo>
              Collecting and Using Your Personal Data
            </PrivacyHeaderTextTwo>
            <PrivacyHeaderTextTwo>Types of Data Collected</PrivacyHeaderTextTwo>
            <h4>Personal Data</h4>
            <PrivacyParagraph>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </PrivacyParagraph>
            <PrivacyList>
              <li>
                <PrivacyParagraph>First name and last name</PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>Phone number</PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  Address, State, Province, ZIP/Postal code, City
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>Usage Data</PrivacyParagraph>
              </li>
            </PrivacyList>
            <h4>Usage Data</h4>
            <PrivacyParagraph>
              Usage Data is collected automatically when using the Service.
            </PrivacyParagraph>
            <PrivacyParagraph>
              Usage Data may include information such as Your Device`s Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </PrivacyParagraph>
            <PrivacyParagraph>
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </PrivacyParagraph>
            <PrivacyParagraph>
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </PrivacyParagraph>
            <h4>Information from Third-Party Social Media Services</h4>
            <PrivacyParagraph>
              The Company allows You to create an account and log in to use the
              Service through the following Third-party Social Media Services:
            </PrivacyParagraph>
            <PrivacyList>
              <li>Google</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </PrivacyList>
            <PrivacyParagraph>
              If You decide to register through or otherwise grant us access to
              a Third-Party Social Media Service, We may collect Personal data
              that is already associated with Your Third-Party Social Media
              Service`s account, such as Your name, Your email address, Your
              activities or Your contact list associated with that account.
            </PrivacyParagraph>
            <PrivacyParagraph>
              You may also have the option of sharing additional information
              with the Company through Your Third-Party Social Media Service`s
              account. If You choose to provide such information and Personal
              Data, during registration or otherwise, You are giving the Company
              permission to use, share, and store it in a manner consistent with
              this Privacy Policy.
            </PrivacyParagraph>
            <h4>Information Collected while Using the Application</h4>
            <PrivacyParagraph>
              While using Our Application, in order to provide features of Our
              Application, We may collect, with Your prior permission:
            </PrivacyParagraph>
            <PrivacyList>
              <li>Information regarding your location</li>
              <li>Information from your Device`s phone book (contacts list)</li>
              <li>
                Pictures and other information from your Device`s camera and
                photo library
              </li>
            </PrivacyList>
            <PrivacyParagraph>
              We use this information to provide features of Our Service, to
              improve and customize Our Service. The information may be uploaded
              to the Company`s servers and/or a Service Provider`s server or it
              may be simply stored on Your device.
            </PrivacyParagraph>
            <PrivacyParagraph>
              You can enable or disable access to this information at any time,
              through Your Device settings.
            </PrivacyParagraph>
            <h3>Use of Your Personal Data</h3>
            <PrivacyParagraph>
              The Company may use Personal Data for the following purposes:
            </PrivacyParagraph>
            <PrivacyList>
              <li>
                <PrivacyParagraph>
                  <strong>To provide and maintain our Service</strong>,
                  including to monitor the usage of our Service.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>To manage Your Account:</strong> to manage Your
                  registration as a user of the Service. The Personal Data You
                  provide can give You access to different functionalities of
                  the Service that are available to You as a registered user.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>For the performance of a contract:</strong> the
                  development, compliance and undertaking of the purchase
                  contract for the products, items or services You have
                  purchased or of any other contract with Us through the
                  Service.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>To contact You:</strong> To contact You by email,
                  telephone calls, SMS, or other equivalent forms of electronic
                  communication, such as a mobile application`s push
                  notifications regarding updates or informative communications
                  related to the functionalities, products or contracted
                  services, including the security updates, when necessary or
                  reasonable for their implementation.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>To provide You</strong> with news, special offers and
                  general information about other goods, services and events
                  which we offer that are similar to those that you have already
                  purchased or enquired about unless You have opted not to
                  receive such information.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>To manage Your requests:</strong> To attend and manage
                  Your requests to Us.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>For business transfers:</strong> We may use Your
                  information to evaluate or conduct a merger, divestiture,
                  restructuring, reorganization, dissolution, or other sale or
                  transfer of some or all of Our assets, whether as a going
                  concern or as part of bankruptcy, liquidation, or similar
                  proceeding, in which Personal Data held by Us about our
                  Service users is among the assets transferred.
                </PrivacyParagraph>
              </li>
              <li>
                <PrivacyParagraph>
                  <strong>For other purposes</strong>: We may use Your
                  information for other purposes, such as data analysis,
                  identifying usage trends, determining the effectiveness of our
                  promotional campaigns and to evaluate and improve our Service,
                  products, services, marketing and your experience.
                </PrivacyParagraph>
              </li>
            </PrivacyList>
            <PrivacyParagraph>
              We may share Your personal information in the following
              situations:
            </PrivacyParagraph>
            <PrivacyList>
              <li>
                <strong>With Service Providers:</strong> We may share Your
                personal information with Service Providers to monitor and
                analyze the use of our Service, to contact You.
              </li>
              <li>
                <strong>For business transfers:</strong> We may share or
                transfer Your personal information in connection with, or during
                negotiations of, any merger, sale of Company assets, financing,
                or acquisition of all or a portion of Our business to another
                company.
              </li>
              <li>
                <strong>With Affiliates:</strong> We may share Your information
                with Our affiliates, in which case we will require those
                affiliates to honor this Privacy Policy. Affiliates include Our
                parent company and any other subsidiaries, joint venture
                partners or other companies that We control or that are under
                common control with Us.
              </li>
              <li>
                <strong>With business partners:</strong> We may share Your
                information with Our business partners to offer You certain
                products, services or promotions.
              </li>
              <li>
                <strong>With other users:</strong> when You share personal
                information or otherwise interact in the public areas with other
                users, such information may be viewed by all users and may be
                publicly distributed outside. If You interact with other users
                or register through a Third-Party Social Media Service, Your
                contacts on the Third-Party Social Media Service may see Your
                name, profile, pictures and description of Your activity.
                Similarly, other users will be able to view descriptions of Your
                activity, communicate with You and view Your profile.
              </li>
              <li>
                <strong>With Your consent</strong>: We may disclose Your
                personal information for any other purpose with Your consent.
              </li>
            </PrivacyList>
            <h3>Retention of Your Personal Data</h3>
            <PrivacyParagraph>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </PrivacyParagraph>
            <PrivacyParagraph>
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </PrivacyParagraph>
            <h3>Transfer of Your Personal Data</h3>
            <PrivacyParagraph>
              Your information, including Personal Data, is processed at the
              Company`s operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </PrivacyParagraph>
            <PrivacyParagraph>
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </PrivacyParagraph>
            <PrivacyParagraph>
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </PrivacyParagraph>
            <h3>Delete Your Personal Data</h3>
            <PrivacyParagraph>
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You.
            </PrivacyParagraph>
            <PrivacyParagraph>
              Our Service may give You the ability to delete certain information
              about You from within the Service.
            </PrivacyParagraph>
            <PrivacyParagraph>
              You may update, amend, or delete Your information at any time by
              signing in to Your Account, if you have one, and visiting the
              account settings section that allows you to manage Your personal
              information. You may also contact Us to request access to,
              correct, or delete any personal information that You have provided
              to Us.
            </PrivacyParagraph>
            <PrivacyParagraph>
              Please note, however, that We may need to retain certain
              information when we have a legal obligation or lawful basis to do
              so.
            </PrivacyParagraph>
            <h3>Disclosure of Your Personal Data</h3>
            <h4>Business Transactions</h4>
            <PrivacyParagraph>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </PrivacyParagraph>
            <h4>Law enforcement</h4>
            <PrivacyParagraph>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </PrivacyParagraph>
            <h4>Other legal requirements</h4>
            <PrivacyParagraph>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </PrivacyParagraph>
            <PrivacyList>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </PrivacyList>
            <h3>Security of Your Personal Data</h3>
            <PrivacyParagraph>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </PrivacyParagraph>{" "}
            <h2>
              Detailed Information on the Processing of Your Personal Data
            </h2>
            <PrivacyParagraph>
              The Service Providers We use may have access to Your Personal
              Data. These third-party vendors collect, store, use, process and
              transfer information about Your activity on Our Service in
              accordance with their Privacy Policies.
            </PrivacyParagraph>
            <h3>Usage, Performance and Miscellaneous</h3>
            <PrivacyParagraph>
              We may use third-party Service Providers to maintain and improve
              our Service.
            </PrivacyParagraph>
            <PrivacyList>
              <li>
                <PrivacyParagraph>
                  <strong>Google Places</strong>
                </PrivacyParagraph>
                <PrivacyParagraph>
                  Google Places is a service that returns information about
                  places using HTTP requests. It is operated by Google
                </PrivacyParagraph>
                <PrivacyParagraph>
                  Google Places service may collect information from You and
                  from Your Device for security purposes.
                </PrivacyParagraph>
                <PrivacyParagraph>
                  The information gathered by Google Places is held in
                  accordance with the Privacy Policy of Google:{" "}
                  <Link
                    href="https://www.google.com/intl/en/policies/privacy/"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    https://www.google.com/intl/en/policies/privacy/
                  </Link>
                </PrivacyParagraph>
              </li>
            </PrivacyList>
            <h2>Children`s Privacy</h2>
            <PrivacyParagraph>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </PrivacyParagraph>
            <PrivacyParagraph>
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent`s consent before We collect and use that
              information.
            </PrivacyParagraph>
            <h2>Links to Other Websites</h2>
            <PrivacyParagraph>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party`s site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </PrivacyParagraph>
            <PrivacyParagraph>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </PrivacyParagraph>
            <h2>Changes to this Privacy Policy</h2>
            <PrivacyParagraph>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </PrivacyParagraph>
            <PrivacyParagraph>
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              &quot;Last updated&quot; date at the top of this Privacy Policy.
            </PrivacyParagraph>
            <PrivacyParagraph>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </PrivacyParagraph>
            <h2>Contact Us</h2>
            <PrivacyParagraph>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </PrivacyParagraph>
            <PrivacyList>
              <li>
                By visiting this page on our website:{" "}
                <Link
                  href="https://betterspace.com/contact"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://betterspace.com/contact
                </Link>
              </li>
            </PrivacyList>
          </PrivacyContainerContent>
        </PrivacyContainer>
      </PrivacyContent>
    </>
  );
};

export default Privacy;
