// import React from 'react'
//  import {render,screen} from "@testing-library/react";
//  import "@testing-library/jest-dom";
//  import Hero from "../landing_page/home/Hero";

//  describe("Hero Component",()=>{
//     test("render hero image",()=>{
//         render(<Hero/>);
//         const heroImage = screen.getByText("Hero Image");
//         expect(heroImage).toBeInTheDocument();
//     });
//  })
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);

    const heroImage = screen.getAllByText('Hero Image');

    expect(heroImage).toBeInTheDocument();
  });
});