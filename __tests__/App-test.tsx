import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuickLink from '../src/components/QuickLink';
import CrimeComment from '../src/components/Comment';

describe('QuickLink component', () => {
  const mockLink = {
    name: 'Test Link',
    description: 'This is a test link',
    image: 'https://test.com/image.jpg',
    url: 'https://test.com',
  };

  it('renders the link name and description', () => {
    const {getByText} = render(<QuickLink link={mockLink} />);
    const name = getByText('Test Link');
    const description = getByText('This is a test link');
    expect(name).toBeTruthy();
    expect(description).toBeTruthy();
  });
});

const mockComment = {
  id: 1,
  description: 'This is a test comment',
};

describe('CrimeComment component', () => {
  it('renders the comment description', () => {
    const {getByText} = render(<CrimeComment comment={mockComment} />);
    expect(getByText(mockComment.description)).toBeTruthy();
  });
});
