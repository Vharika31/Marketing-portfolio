import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 py-12 relative">
      <div className="container mx-auto px-6">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center hover:shadow-lg transition-elegant group"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        <div className="text-center pt-8">
          {/* Name and Title */}
          <h3 className="text-2xl font-bold font-poppins mb-2">
            <span className="text-gradient">Harika Vavilapalli</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            CSUG'26 | Product Marketing | AI + Strategy
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Work', href: '#work' },
              { name: 'Achievements', href: '#achievements' },
              { name: 'Stories', href: '#stories' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-elegant font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Harika Vavilapalli. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span></span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span></span>
            </div>
          </div>

          {/* Achievement Highlights */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;