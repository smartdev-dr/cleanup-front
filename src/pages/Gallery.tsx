import { useLanguage } from '../contexts/LanguageContext';
import upholsteryImg from '../assets/service-upholstery.jpg';
import acImg from '../assets/service-ac.jpg';
import wallpaperImg from '../assets/service-wallpaper.jpg';
import cleaningImg from '../assets/service-cleaning.jpg';
import paintingImg from '../assets/service-painting.jpg';
import windowFilmImg from '../assets/service-window-film.jpg';

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-[#ECB201]">{t('gallery.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('gallery.subtitle')}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
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
    </div>
  );
};

export default Gallery;
