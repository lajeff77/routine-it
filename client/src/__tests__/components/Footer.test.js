import { render } from "@testing-library/react";
import React from "react";
import Footer from "../../components/LandingPage/Footer";

describe(Footer.name, ()=>{
    test('Footer matches snapshot', () => {
        const { container } = render(<Footer/>);
    
        expect(container).toMatchSnapshot();});
});