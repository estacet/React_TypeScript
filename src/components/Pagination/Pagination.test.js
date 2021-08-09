import React from "react";
import {render, getByTestId, fireEvent} from "@testing-library/react";
import App from "../../App";

test('check if initial page is 1', () => {
    const { container } = render(<App />);
    const currentPage = getByTestId(container, 'currentPage');
    expect(currentPage.textContent).toBe('1');
});

test('check if previous button is not displayed on first page', () => {
    const { container } = render(<App />);
    const previousButton = getByTestId(container, "prevPage");
    expect(previousButton.classList.contains('hidden')).toBe(true);
})

test('check if next button is displayed on first page', () => {
    const { container } = render(<App />);
    const nextButton = getByTestId(container, "nextPage");
    expect(nextButton.classList.contains('hidden')).toBe(false);
})

test('check if page is changed when previous/next button is clicked', () => {
    const { container } = render(<App />);
    const currentPage = getByTestId(container, 'currentPage');
    const nextButton = getByTestId(container, "nextPage");
    const previousButton = getByTestId(container, "prevPage");

    fireEvent.click(nextButton);
    expect(currentPage.textContent).toBe('2');

    fireEvent.click(previousButton);
    expect(currentPage.textContent).toBe('1');
})
