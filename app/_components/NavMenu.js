"use client";
import styled, { keyframes, css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/menuModalSlice";
// import { CiHome } from "react-icons/ci";

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  z-index: 9;
  background-color: #fff;
  /* background-color: #022c22; */
  /* background-color: #f0f87a; */
  /* box-shadow: 0px 1px 3px 0px #1018281a; */
  box-shadow: 0px 0px 0px 1000px #10182873;
  width: 70%;
  height: 100%;
  /* border-radius: 0px 0px 15px 15px; */
  border-bottom: 1px solid #eaebf0;
  border-top: 1px solid #eaebf0;
  transition: all 0.4s ease-in-out;
  top: ${({ isopen }) => (isopen ? "0px" : "-100%")}; //this
  /* top: ${({ isopen }) => (isopen ? "80px" : "-100%")}; //this */
  /* margin-left: -16px; */
  /* padding-left: 16px; */
  /* max-height: ${({ isopen }) => (isopen ? "200px" : "0")}; */
  display: ${({ isopen }) => (isopen ? "inline-block" : "none")};
  /* overflow-y: auto; */

  ${({ isopen }) =>
    isopen &&
    css`
      animation: ${fadeInDown} 0.4s ease-in-out;
    `}
`;

const NavMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  align-items: left;
  /* justify-content: center; */

  &:first-child {
    padding-top: 50px;
  }
`;

const MenuItem = styled.li`
  display: flex;
  /* border-radius: 5px; */
  /* padding: 10px; */
  padding-top: 40px;
  padding-left: 10px;
  gap: 12px;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.004em;
  /* text-align: left; */
  color: #022c22;

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    border-bottom: 2px solid #022c22;
  }
`;

const NavMenuLink = styled(NavLink)`
  &:hover,
  &:focus {
    border: none;
  }
`;

function NavMenu() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menuModal.isMenuOpen);
  const location = useLocation();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  // const navlinkks = [
  //   "home",
  //   "about",
  //   "pricing",
  //   "article",
  //   "therapy",
  //   "business",
  //   "contact",
  // ];
  return (
    <StyledNavMenu {...(isMenuOpen ? { isopen: "true" } : {})}>
      <NavMenuContainer>
        <MenuItem>
          {/* <CiHome /> */}
          <NavMenuLink
            to="/home"
            onClick={handleMenuClick}
            active={location.pathname === "/home"}
          >
            Home
          </NavMenuLink>
        </MenuItem>
        <MenuItem>
          <NavMenuLink to="/about" onClick={handleMenuClick}>
            About
          </NavMenuLink>
        </MenuItem>
        <MenuItem>
          <NavMenuLink to="/pricing" onClick={handleMenuClick}>
            Pricing
          </NavMenuLink>
        </MenuItem>
        <MenuItem>
          <NavMenuLink to="/article" onClick={handleMenuClick}>
            Article
          </NavMenuLink>
        </MenuItem>
        <MenuItem>
          <NavMenuLink to="/therapy" onClick={handleMenuClick}>
            Therapy
          </NavMenuLink>
        </MenuItem>
        <MenuItem>
          <NavMenuLink to="/business" onClick={handleMenuClick}>
            Business
          </NavMenuLink>
        </MenuItem>
        {/* <MenuItem>
          <NavMenuLink to="/contact" onClick={handleMenuClick}>
            Contact
          </NavMenuLink>
        </MenuItem> */}
      </NavMenuContainer>
    </StyledNavMenu>
  );
}

export default NavMenu;
