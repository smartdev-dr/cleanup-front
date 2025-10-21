import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

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

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            {t('testimonials.title')}
          </h1>
          <p className="text-xl text-muted-foreground">{t('testimonials.subtitle')}</p>
        </div>

        {/* Testimonials Grid */}
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
    </div>
  );
};

export default Testimonials;
