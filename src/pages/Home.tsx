import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Sparkles, Shield, Users, Quote, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import heroImage from '../assets/hero-cleaning.jpg';
import upholsteryImg from '../assets/service-upholstery.jpg';
import acImg from '../assets/service-ac.jpg';
import wallpaperImg from '../assets/service-wallpaper.jpg';
import cleaningImg from '../assets/service-cleaning.jpg';
import paintingImg from '../assets/service-painting.jpg';
import windowFilmImg from '../assets/service-window-film.jpg';

const Home = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(t('contact.success'));
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { title: t('service.upholstery'), desc: t('service.upholstery.desc'), image: upholsteryImg },
    { title: t('service.ac'), desc: t('service.ac.desc'), image: acImg },
    { title: t('service.wallpaper'), desc: t('service.wallpaper.desc'), image: wallpaperImg },
    { title: t('service.space'), desc: t('service.space.desc'), image: cleaningImg },
    { title: t('service.painting'), desc: t('service.painting.desc'), image: paintingImg },
    { title: t('service.window'), desc: t('service.window.desc'), image: windowFilmImg },
    { title: t('service.contracting'), desc: t('service.contracting.desc'), image: cleaningImg },
    { title: t('service.fumigation'), desc: t('service.fumigation.desc'), image: cleaningImg },
    { title: t('service.carpet'), desc: t('service.carpet.desc'), image: upholsteryImg },
    { title: t('service.floor'), desc: t('service.floor.desc'), image: cleaningImg },
    { title: t('service.pool'), desc: t('service.pool.desc'), image: cleaningImg },
  ];

  const testimonials = [
    {
      text: t('testimonial1.text'),
      author: t('testimonial1.author'),
      role: t('testimonial1.role'),
    },
    {
      text: t('testimonial2.text'),
      author: t('testimonial2.author'),
      role: t('testimonial2.role'),
    },
    {
      text: t('testimonial3.text'),
      author: t('testimonial3.author'),
      role: t('testimonial3.role'),
    },
  ];

  const galleryImages = [
    upholsteryImg,
    acImg,
    wallpaperImg,
    cleaningImg,
    paintingImg,
    windowFilmImg,
    cleaningImg,
    upholsteryImg,
    paintingImg,
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            {t('hero.subtitle')}
          </p>
          <Button size="lg" variant="accent" className="text-lg" style={{ backgroundColor: '#ECB201' }} onClick={() => scrollToSection('contact')}>
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">{t('about.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('about.subtitle')}</p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed">{t('about.text1')}</p>
            <p className="text-lg leading-relaxed">{t('about.text2')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover-lift animate-slide-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
                <Sparkles className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t('about.value1')}</h3>
              <p className="text-muted-foreground">{t('about.value1.desc')}</p>
            </Card>
            <Card className="p-8 text-center hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t('about.value2')}</h3>
              <p className="text-muted-foreground">{t('about.value2.desc')}</p>
            </Card>
            <Card className="p-8 text-center hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t('about.value3')}</h3>
              <p className="text-muted-foreground">{t('about.value3.desc')}</p>
            </Card>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2 text-accent">10+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-accent">500+</div>
                <div className="text-lg opacity-90">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-accent">11</div>
                <div className="text-lg opacity-90">Services Offered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">{t('services.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">{t('gallery.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('gallery.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">{t('testimonials.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('testimonials.subtitle')}</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="h-10 w-10 text-accent mb-4" />
                <p className="text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">{t('contact.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('contact.subtitle')}</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    {t('contact.phone')}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : t('contact.send')}
                </Button>
              </form>
            </Card>

            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Card className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">cleanup.com.do</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (809) 123-4567</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Dominican Republic</p>
                </div>
              </Card>

              <div className="aspect-video bg-background rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Map Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
