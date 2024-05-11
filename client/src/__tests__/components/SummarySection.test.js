import { render } from "@testing-library/react";
import React from "react";
import SummarySection from "../../components/LandingPage/SummarySection";

describe(SummarySection.name, ()=>{
    test('SummarySection matches snapshot', () => {
        const { container } = render(<SummarySection/>);
        expect(container).toMatchSnapshot();});
});