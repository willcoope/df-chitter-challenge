import { render, screen } from '@testing-library/react';
import Chit from '../src/components/Chit';

test(`renders the chit`, () => {
    const chit = {
        user: {
            firstname: 'John',
            lastname: 'Doe',
            username: 'johndoe'
        },
        content: 'Hello, world!',
        time: new Date().toISOString()
    }
    render(<Chit chit={chit} />);
    const chitContent = screen.getByText(/Hello, world!/i);
    const chitUser = screen.getByText(/John Doe/i);
    const chitUsername = screen.getByText(/@johndoe/i);
    expect(chitUser).toBeInTheDocument();
    expect(chitUsername).toBeInTheDocument();
    expect(chitContent).toBeInTheDocument();
});