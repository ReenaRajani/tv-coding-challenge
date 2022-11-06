import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('App', () => {
  it('renders the Header', () => {
    render(<Router><App /></Router>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'Stan Logo');
  });

  it('renders the Nav Items', () => {
    render(<Router><App /></Router>);
    const navlistitems = screen.getAllByRole("listitem");
    expect(navlistitems).toHaveLength(3);
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/TV Shows/)).toBeInTheDocument();
    expect(screen.getByText(/Movies/)).toBeInTheDocument();
  });

})