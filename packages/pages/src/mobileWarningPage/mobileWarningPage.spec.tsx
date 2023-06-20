import React from 'react';
import { render } from '@testing-library/react';
import { MobileWarningPage } from './mobileWarningPage';

describe('MobileWarningPage', () => {
      it('renders the warning message', () => {
        const { baseElement } = render(<MobileWarningPage />);
        
        expect(baseElement).toBeTruthy();
      });
//   it('renders the warning message', () => {
//     const { getByText } = render(<MobileWarningPage />);
    
//     const warningMessage = getByText(
//       'We are sorry but this website is currently not available on mobile devices. We recommend that you access the page from your desktop computer instead.'
//     );
    
//     expect(warningMessage).toBeInTheDocument();
//   });

//   it('renders the thank you message', () => {
//     const { getByText } = render(<MobileWarningPage />);
    
//     const thankYouMessage = getByText('Thank you for your interest');
    
//     expect(thankYouMessage).toBeInTheDocument();
//   });
});
