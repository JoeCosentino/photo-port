import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


describe('About component', () => {
    // first test (baseline to veryify that component is rendering)
    it('renders', () => {
        render(<About />);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        
        expect(asFragment()).toMatchSnapshot();
    })
})

afterEach(cleanup);