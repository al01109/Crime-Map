import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import QuickLink from '../src/components/QuickLink';
import CrimeComment from '../src/components/Comment';
import CrimeCarousellItem from '../src/components/CrimeCarouselItem';

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

jest.mock('@react-navigation/native');
jest.mock('../src/utils/stringFormatter', () => ({
  formatName: jest.fn(name => name),
}));

describe('CrimeCarousellItem', () => {
  const mockCrime = {
    id: '1',
    location: {street: {name: 'Street 1'}},
    category: 'category1',
  };

  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  });

  it('renders correctly', () => {
    const {getByText} = render(<CrimeCarousellItem crime={mockCrime} />);

    expect(getByText('category1')).toBeTruthy();
    expect(getByText('Street 1')).toBeTruthy();
  });

  it('navigates when pressed', () => {
    const {getByText} = render(<CrimeCarousellItem crime={mockCrime} />);

    fireEvent.press(getByText('category1'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home', {
      screen: 'Explore',
      params: {
        screen: 'Comments',
        params: {
          crime: mockCrime,
        },
      },
    });
  });
});
