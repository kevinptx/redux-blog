import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => (
  <Nav>
    <Link to="/" className="logo">
      D
    </Link>
    <Link to={"/"}>Home</Link>
    <Link to={"/blog/new"}>New Post</Link>
  </Nav>
);

const Nav = styled.ul`
  position: fixed;
  top: 0;
  width: 100%;
  list-style: none;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;

  a {
    text-decoration: none;
    padding: 10px 15px;
    background-color: transparent;
    border: 2px solid #2d3436;
    margin: 0 5px;
    color: #2d3436
    font-size: 14px;

    &:first-child {
      margin-right: auto;
      background-color: #2d3436;
      cursor: pointer;
      width: 50px;
      height: 50px;
      margin-right: auto;
      font-size: 28px;
      color: white;
      border: none;
      padding: 0;
      width: 50px;
      font-family: "Merriweather", serif;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }

    &:hover {
      background-color: #2d3436;
      color: white;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default NavBar;
