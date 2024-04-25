import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import TaskList from "../../components/TaskList";

// jest.mock("list");
const testProps = {
    list: ["Eat breakfast", "Walk dog", "Clean dishes", "Shower"]
}

describe(TaskList.name, ()=>{
    test('TaskList matches snapshot', () => {
        const {container} = render(<TaskList props={testProps}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});