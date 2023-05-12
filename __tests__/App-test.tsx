import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import QuickLink from '../src/components/QuickLink';
import CrimeComment from '../src/components/Comment';
import CrimeCarousellItem from '../src/components/CrimeCarouselItem';
import PrivacyPolicy from '../src/screens/PrivacyPolicy';

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

describe('PrivacyPolicy', () => {
  it('renders without crashing', () => {
    const {getByTestId} = render(<PrivacyPolicy />);
    expect(getByTestId('privacy-policy')).toBeDefined();
  });

  it('displays the privacy policy heading', () => {
    const {getByText} = render(<PrivacyPolicy />);
    expect(getByText('Privacy Policy')).toBeDefined();
  });

  it('displays the information we collect subheading', () => {
    const {getByText} = render(<PrivacyPolicy />);
    expect(getByText('What information do we collect?')).toBeDefined();
  });

  it('displays the protecting your data subheading', () => {
    const {getByText} = render(<PrivacyPolicy />);
    expect(getByText('Protecting Your Data')).toBeDefined();
  });

  it('displays the data usage subheading', () => {
    const {getByText} = render(<PrivacyPolicy />);
    expect(getByText('Data Usage')).toBeDefined();
  });

  it('displays the external links subheading', () => {
    const {getByText} = render(<PrivacyPolicy />);
    expect(getByText('External Links')).toBeDefined();
  });

  it('displays the contacting us subheading', () => {
    const {getByText} = render(<PrivacyPolicy />);
    expect(getByText('Contacting Us')).toBeDefined();
  });

  it('displays the email address for enquiries', () => {
    const {getByText} = render(<PrivacyPolicy />);
    expect(getByText(/al01109@surrey.ac.uk/i)).toBeDefined();
  });

  it('displays the text related to Data Protection Act 2018', () => {
    const {getByText} = render(<PrivacyPolicy />);
    expect(
      getByText(
        /Under the Data Protection Act 2018, you can request a copy of the personal data we store about you. To obtain this information, please contact us using the email address provided above./i,
      ),
    ).toBeDefined();
  });
});
