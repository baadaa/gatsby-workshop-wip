import React from 'react';
import FooterStyles from './styles/FooterStyles';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <FooterStyles>&copy; B &bull; {currentYear}</FooterStyles>;
}
