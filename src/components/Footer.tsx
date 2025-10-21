import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <div className="text-2xl font-bold mb-2">Cleanup</div>
            <p className="text-sm opacity-90">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.services')}
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.follow')}</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <a
              href="mailto:cleanup.com.do"
              className="flex items-center text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              <Mail className="h-4 w-4 mr-2" />
              cleanup.com.do
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm opacity-90">
            © {currentYear} Cleanup. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
