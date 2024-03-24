import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import PermanentSideDrawer from "../../components/PermanentSideDrawer";


describe(PermanentSideDrawer.name, ()=>{
    test('PermanentSideDrawer matches snapshot', () => {
        const {container} = render(<PermanentSideDrawer/>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('renders drawer with correct items', () => {
        const { getByText } = render(<PermanentSideDrawer/>);
        
        // Check if items are rendered correctly
        expect(getByText('Home')).not.toBeNull();
        expect(getByText('Account')).not.toBeNull();
        expect(getByText('Settings')).not.toBeNull();
        expect(getByText('Analytics')).not.toBeNull();
        });
          
});