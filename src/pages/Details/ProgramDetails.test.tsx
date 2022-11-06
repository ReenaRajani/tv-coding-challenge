import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';


import ProgramDetails from './ProgramDetails';

const programData = {
  "id": 67298,
  "title": "Dr. Death",
  "description": "Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him.",
  "type": "series",
  "image": "https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
  "rating": "MA 15+",
  "genre": "Drama",
  "year": 2021,
  "language": "English"
};

const mockLocation = {
  pathname: '/details/Dr.%20Death',
  hash: '',
  search: '',
  state: { data: programData },
  key: 'Dr.%20Death'
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom"),
    useLocation: () => ({ state: { data: programData } }),
  }));

afterEach(() => {
  jest.clearAllMocks();
})

describe('ProgramDetails', () => {
  it('renders the skeleton when loaded', () => {
    render(<Router><ProgramDetails /></Router>);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('renders the ProgramDetails', async () => {
    render(<Router><ProgramDetails /></Router>);
    await waitFor(() => {
      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute('alt', programData.title);
      expect(screen.getByText(programData.title)).toBeInTheDocument();
      expect(screen.getByText(programData.rating)).toBeInTheDocument();
      expect(screen.getByText(programData.genre)).toBeInTheDocument();
      expect(screen.getByText(programData.language)).toBeInTheDocument();
      expect(screen.getByText(programData.description)).toBeInTheDocument();
    }, {
      timeout: 2000,
    });
  });

})

