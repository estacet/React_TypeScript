import React from "react";
import {render, getByTestId, fireEvent} from "@testing-library/react";
import App from "../../App";

test('check if default search form input is empty', () => {
    const { container } = render(<App />);
    const input = getByTestId(container, 'searchForm');
    expect(input.value).toBe('')
})

test('check if search form input value is changed while typing', () => {
    const {container} = render(<App/>);
    const input = getByTestId(container, 'searchForm');
    fireEvent.change(input);
    expect(input).not.toBe('');
})