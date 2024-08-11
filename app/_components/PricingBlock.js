/* eslint-disable no-unused-vars */
"use client";
import styled from "styled-components";
import Check from "@/public/check.svg";
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import CheckGreen from "@/public/check-green.svg";
import Cancel from "@/public/x-mark.svg";
import CancelGreen from "@/public/x-mark-green.svg";
import Image from "next/image";
export const PricingSection = styled.section`
  padding: 100px 200px 100px 200px;
  display: flex;
  flex-direction: column;
  background-color: rgba(248, 244, 240, 1);
  gap: 48px;
  overflow: hidden;
  @media screen and (max-width: 1270px) {
    padding: 20px 60px 20px 60px;
  }
  @media screen and (max-width: 990px) {
    padding: 40px 16px 40px 16px;
  }
`;

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

const PricingTexts = styled(PricingContainer)`
  gap: 20px;
`;

const PricingTextsHeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.2rem;
  letter-spacing: -0.01em;
  text-align: center;
  color: rgba(2, 44, 34, 1);
  @media screen and (max-width: 468px) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;

const PricingTextsHeaderSubText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.004em;
  text-align: center;
  color: rgba(2, 44, 34, 1);
  @media screen and (max-width: 468px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 24px;
  background-color: rgba(2, 44, 34, 1);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const TabButton = styled.button`
  padding: 8px 12px;
  background-color: ${({ active }) =>
    active ? "rgba(239, 248, 122, 1)" : "transparent"};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 24px;
  transition: all 0.3s ease;
  display: flex;
  gap: 8px;
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.004em;
  font-weight: 500;
  align-items: center;
  color: ${({ active }) => (active ? "rgba(2, 44, 34, 1)" : "white")};

  span {
    background-color: rgba(239, 248, 122, 1);
    padding: 2px 10px;
    border-radius: 24px;
    display: flex;
    gap: 6px;
    color: rgba(2, 44, 34, 1);
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
  }

  &:hover {
    background-color: ${({ active }) =>
      active ? "transparent" : "rgba(239, 248, 122, 1)"};
    color: ${({ active }) => (active ? "white" : "rgba(2, 44, 34, 1)")};
  }
`;

const TabContent = styled.div`
  opacity: ${({ active }) => (active ? 1 : 0)};
  height: ${({ active }) => (active ? "auto" : 0)};

  gap: 32px;

  display: ${({ active }) => (active ? "flex" : "none")};
  @media screen and (max-width: 798px) {
    flex-direction: column;
  }
`;

const PricingBlocks = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(231, 231, 231, 1);
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;

  gap: 32px;
  box-shadow: ${({ active }) =>
    active ? "0px 25px 50px -12px rgba(0, 0, 0, 0.24)" : "none"};
  background-color: ${({ active }) =>
    active ? "rgba(2, 44, 34, 1)" : "rgba(255, 255, 255, 1)"};
  color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 1)" : "rgba(2, 44, 34, 1)"};

  /* &:hover {
    background-color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 1)" : "rgba(2, 44, 34, 1)"};
    color: ${({ active }) => (active ? "rgba(2, 44, 34, 1)" : "white")};
  }
  &:hover button {
    background-color: ${({ active }) =>
    active ? "rgba(2, 44, 34, 1)" : "rgba(239, 248, 122, 1)"};
    color: ${({ active }) => (active ? "white" : "rgba(2, 44, 34, 1)")};
  } */
`;

const PricingContent = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const PricingContentHeader = styled(PricingContent)`
  flex-direction: row;
`;

const PriceBlock = styled(PricingContent)`
  gap: 16px;
`;

const PriceBlockText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
`;

const AmountBlock = styled(PricingContentHeader)`
  gap: 8px;
  align-items: baseline;
`;

const AmountBlockText = styled(PriceBlockText)`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
`;

const AmountBlockSubText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

const PricingButton = styled.button`
  background-color: ${({ active }) =>
    active ? "rgba(239, 248, 122, 1)" : "rgba(2, 44, 34, 1)"};
  display: flex;
  gap: 0.8rem;
  border-radius: 2.4rem;
  outline: none;
  border: none;
  padding: 1.2rem 2rem;
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  letter-spacing: -0.004em;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${({ active }) => (active ? "rgba(2, 44, 34, 1)" : "white")};
`;

const PricingCheckList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PricingListItem = styled.li`
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: -0.004em;
  text-align: left;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Tab = ({ label, onClick, isActive }) => (
  <TabButton active={isActive} onClick={onClick}>
    {label}
  </TabButton>
);
Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
const TabPanel = ({ isActive, content }) => (
  <TabContent active={isActive}>
    {content.map((contents, index) => (
      <PricingBlocks key={index} active={contents.active}>
        <PricingContent>
          <PricingContentHeader>
            <PriceBlock>
              <PriceBlockText>{contents.name}</PriceBlockText>
            </PriceBlock>
          </PricingContentHeader>
          <AmountBlock>
            <AmountBlockText>{contents.type}</AmountBlockText>
            <AmountBlockSubText>{contents.trial}</AmountBlockSubText>
          </AmountBlock>
          <PricingButton active={contents.active}>
            {contents.button}
          </PricingButton>
          <PricingCheckList>
            {contents.list.map((list, index) => (
              <PricingList
                item={list}
                key={index}
                active={contents.active}
              ></PricingList>
            ))}
          </PricingCheckList>
        </PricingContent>
      </PricingBlocks>
    ))}
  </TabContent>
);

TabPanel.propTypes = {
  isActive: PropTypes.bool.isRequired,
  content: PropTypes.array.isRequired,
};

const PricingList = ({ item, active }) => (
  <PricingListItem>
    {item.active && active ? (
      <Image
        style={{ maxWidth: "100%", height: "auto" }}
        src={Check}
        alt="Check"
      />
    ) : item.active && !active ? (
      <Image
        style={{ maxWidth: "100%", height: "auto" }}
        src={CheckGreen}
        alt="Check"
      />
    ) : !item.active && active ? (
      <Image
        style={{ maxWidth: "100%", height: "auto" }}
        src={Cancel}
        alt="Cancel"
      />
    ) : (
      <Image
        style={{ maxWidth: "100%", height: "auto" }}
        src={CancelGreen}
        alt="Cancel"
      />
    )}
    {item.text} {/* Render the text property */}
  </PricingListItem>
);

// PropTypes for the PricingListItem component
PricingList.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index)}
            isActive={index === activeIndex}
          />
        ))}
      </TabContainer>
      {/* <div> */}
      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          isActive={index === activeIndex}
          content={tab.content}
        ></TabPanel>
      ))}
      {/* </div> */}
    </>
  );
};
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
};
const PricingBlock = () => {
  const tabs = [
    {
      label: "Pay monthly",
      content: [
        {
          name: "Basic",
          type: "₦6,999",
          active: false,
          trial: "Test try for 1 month",
          button: "Get started for free",
          list: [
            {
              text: "Perfect for flexibility",
              active: true,
            },
            {
              text: "Perfect for flexibility",
              active: true,
            },
            {
              text: "Unlimited messaging with your therapist",
              active: true,
            },
            {
              text: "Audio and video calls with therapist",
              active: false,
            },
            {
              text: "Access to exclusive in-app resources",
              active: false,
            },
            {
              text: "Community Forum",
              active: false,
            },
          ],
        },
        {
          name: "Pro",
          type: "₦16,999",
          active: true,
          trial: "/1 month free",
          button: "Get started",
          list: [
            {
              text: "Weekly live therapy sessions (60 minutes each)",
              active: true,
            },
            {
              text: "Weekly Check-in Emails",
              active: true,
            },
            {
              text: "Unlimited messaging with your therapist",
              active: true,
            },
            {
              text: "Audio and video calls with therapist",
              active: true,
            },
            {
              text: "Access to exclusive in-app resources",
              active: false,
            },
            {
              text: "Community Forum",
              active: false,
            },
          ],
        },
        ////////////////////////////

        //////////////////////////////
        {
          name: "Business",
          type: "Custom pricing",
          trial: "",
          active: false,
          button: "Contact us",
          list: [
            {
              text: "Weekly live therapy sessions (60 minutes each)",
              active: true,
            },
            {
              text: "Weekly Check-in Emails",
              active: true,
            },
            {
              text: "Unlimited messaging with your therapist",
              active: true,
            },
            {
              text: "Audio and video calls with therapist",
              active: true,
            },
            {
              text: "Access to exclusive in-app resources",
              active: false,
            },
            {
              text: "Community Forum",
              active: false,
            },
          ],
        },
      ],
    },
    {
      label: (
        <>
          Pay yearly<span>Save 10%</span>
        </>
      ),
      content: [
        {
          name: "Basic",
          type: "Free",
          active: true,
          trial: "Test try for 1 month",
          button: "Get started for free",
          list: [
            {
              text: "Perfect for flexibility",
              active: true,
            },
            {
              text: "Perfect for flexibility",
              active: true,
            },
            {
              text: "Unlimited messaging with your therapist",
              active: true,
            },
            {
              text: "Access to exclusive in-app resources",
              active: false,
            },
            {
              text: "Community Forum",
              active: false,
            },
          ],
        },
        {
          name: "Pro",
          type: "₦5,000",
          active: false,
          trial: "/ month",
          button: "Get started",
          list: [
            {
              text: "Weekly live therapy sessions (60 minutes each)",
              active: true,
            },
            {
              text: "Weekly Check-in Emails",
              active: true,
            },
            {
              text: "Unlimited messaging with your therapist",
              active: true,
            },
            {
              text: "Access to exclusive in-app resources",
              active: false,
            },
            {
              text: "Community Forum",
              active: false,
            },
          ],
        },
        {
          name: "Business",
          type: "Custom pricing",
          trial: "",
          active: false,
          button: "Contact us",
          list: [
            {
              text: "Weekly live therapy sessions (60 minutes each)",
              active: true,
            },
            {
              text: "Weekly Check-in Emails",
              active: true,
            },
            {
              text: "Unlimited messaging with your therapist",
              active: true,
            },
            {
              text: "Access to exclusive in-app resources",
              active: false,
            },
            {
              text: "Community Forum",
              active: false,
            },
          ],
        },
      ],
    },
  ];
  return (
    <PricingSection>
      <PricingContainer>
        <PricingTexts>
          <PricingTextsHeaderText>
            We have got a plan that is perfect for you.
          </PricingTextsHeaderText>
          <PricingTextsHeaderSubText>
            Choose a plan that fits your needs, with a free trial to get
            started.
          </PricingTextsHeaderSubText>
        </PricingTexts>
        <Tabs tabs={tabs} />
      </PricingContainer>
    </PricingSection>
  );
};
export default PricingBlock;
