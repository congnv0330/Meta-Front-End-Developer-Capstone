import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconLocation,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

import logoImage from '@/assets/logo-white.png';

import './Footer.css';

const socials = [
  { icon: <IconBrandFacebook />, name: 'facebook' },
  { icon: <IconBrandTwitter />, name: 'twitter' },
  { icon: <IconBrandInstagram />, name: 'instagram' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <img className="footer-logo" src={logoImage} alt="Little Lemon" />
        </div>
        <div className="footer-contact">
          <h4>Contact us</h4>
          <ul>
            <li>
              <IconLocation /> 678 Pisa Ave, Chicago, IL 60611
            </li>
            <li>
              <IconPhone /> <a href="tel:(312) 593-2744">(312) 593-2744</a>
            </li>
            <li>
              <IconMail />{' '}
              <a href="mailto:customer@littlelemon.com">
                customer@littlelemon.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect with us</h4>
          {socials.map((social) => (
            <a
              key={social.name}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
