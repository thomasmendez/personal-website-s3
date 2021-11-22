// app.test.js
import {render, screen} from '@testing-library/react';
import React from 'react';
import App from './App';

describe('full app rendering/navigating', () => {
    test.each([
        ['home', /About Me/i],
    ])('route %s has page title %s', (route, title) => {
        // Arrange
        const expectedText = title;
        // Act
        render(
          <App />,
        );
        // Assert
        const text = screen.getByText(expectedText);
        expect(text).toBeTruthy();
    });
});

// test('landing on a bad page', () => {
//   render(
//     <App />,
//   )
//   expect(screen.getByText(/404/i)).toBeInTheDocument()
// })