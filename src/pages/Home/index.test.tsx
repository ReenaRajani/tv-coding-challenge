
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, act, waitFor } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';

import Home from './index';

const mockResponse = [{
  "id": 67298,
  "title": "Dr. Death",
  "description": "Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him.",
  "type": "series",
  "image": "https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
  "rating": "MA 15+",
  "genre": "Drama",
  "year": 2021,
  "language": "English"
},
{
  "id": 65737,
  "title": "This Way Up",
  "description": "This achingly funny and deeply moving comedy series follows the quick-witted Aine as she tries to get her life back in order and regain some semblance of happiness after suffering a nervous breakdown.",
  "type": "series",
  "image": "https://streamcoimg-a.akamaihd.net/000/657/37/65737-PosterArt-15bee119eb92a5f33670e6bd3f1af967.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
  "rating": "MA 15+",
  "genre": "Comedy",
  "year": 2019,
  "language": "English"
}];

afterEach(() => {
  jest.clearAllMocks();
});

describe('Home Page', () => {
  it('renders the skeleton when loading', () => {
    render(<Router><Home /></Router>);
    expect(screen.getByTestId('carousel-skeleton')).toBeInTheDocument();
  });

  it('renders error when there is an error', async () => {
    jest.useFakeTimers(); // mock timers
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: "Not Found",
    }));
    await act(async () => {
      render(<Router><Home /></Router>);
    });
    act(() => jest.runAllTimers());
    const errorMessage = 'An unknown error occured. Please try again later';
    await waitFor(() => {
      expect(screen.getByTestId('error-container')).toBeInTheDocument();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
    jest.useRealTimers();
  });

  it('renders the images based on the contents', async() => {
    jest.useFakeTimers(); // mock timers
    global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockResponse),
    }));
    await act(async () => {
      render(<Router><Home /></Router>);
    });
    act(() => jest.runAllTimers());
    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(2);
    });
    jest.useRealTimers();
  });
});