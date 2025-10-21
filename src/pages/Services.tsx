import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/ui/card';
import upholsteryImg from '../assets/service-upholstery.jpg';
import acImg from '../assets/service-ac.jpg';
import wallpaperImg from '../assets/service-wallpaper.jpg';
import cleaningImg from '../assets/service-cleaning.jpg';
import paintingImg from '../assets/service-painting.jpg';
import windowFilmImg from '../assets/service-window-film.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('service.upholstery'),
      desc: t('service.upholstery.desc'),
      image: upholsteryImg,
    },
    {
      title: t('service.ac'),
      desc: t('service.ac.desc'),
      image: acImg,
    },
    {
      title: t('service.wallpaper'),
      desc: t('service.wallpaper.desc'),
      image: wallpaperImg,
    },
    {
      title: t('service.space'),
      desc: t('service.space.desc'),
      image: cleaningImg,
    },
    {
      title: t('service.painting'),
      desc: t('service.painting.desc'),
      image: paintingImg,
    },
    {
      title: t('service.window'),
      desc: t('service.window.desc'),
      image: windowFilmImg,
    },
    {
      title: t('service.contracting'),
      desc: t('service.contracting.desc'),
      image: cleaningImg,
    },
    {
      title: t('service.fumigation'),
      desc: t('service.fumigation.desc'),
      image: cleaningImg,
    },
    {
      title: t('service.carpet'),
      desc: t('service.carpet.desc'),
      image: upholsteryImg,
    },
    {
      title: t('service.floor'),
      desc: t('service.floor.desc'),
      image: cleaningImg,
    },
    {
      title: t('service.pool'),
      desc: t('service.pool.desc'),
      image: cleaningImg,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary">{t('services.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('services.subtitle')}</p>
        </div>

        {/* Services Grid */}
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
    </div>
  );
};

export default Services;

