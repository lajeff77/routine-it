import { render} from "@testing-library/react";
import React from "react";
import HeroSection from "../../components/LandingPage/HeroSection";

describe(HeroSection.name, ()=>{
    test('HeroSection matches snapshot', () => {
        const { container } = render(<HeroSection/>);
        expect(container).toMatchSnapshot();});
});