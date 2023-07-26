import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('renders correctly', () => {
        render(<Header />);
        const textElement = screen.getByText('MUI');
        expect(textElement).toBeInTheDocument();
    })
})