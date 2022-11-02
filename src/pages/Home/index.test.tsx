
import React from 'react';
import { render, screen } from "@testing-library/react";
import Home from './index';

describe('Home Page', () => {

  const mockData = [{
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

  it('renders the images based on the contents ', () => {
    // tests go here 
  });
})