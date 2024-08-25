import { render } from "@testing-library/react";
import React from "react";
import Footer from "../../components/Common/Footer";

describe(Footer.name, ()=>{
    test('Footer matches snapshot', () => {
        const { container } = render(<Footer/>);
    
        expect(container).toMatchSnapshot();});
});