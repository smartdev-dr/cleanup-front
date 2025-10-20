import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Users, Shield, Award } from 'lucide-react';
import { Card } from '../components/ui/card';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Sparkles, title: t('about.value1'), desc: t('about.value1.desc') },
    { icon: Users, title: t('about.value2'), desc: t('about.value2.desc') },
    { icon: Shield, title: t('about.value3'), desc: t('about.value3.desc') },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-[#ECB201]">{t('about.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('about.subtitle')}</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6 animate-slide-up">
          <p className="text-lg leading-relaxed">
            {t('about.text1')}
          </p>
          <p className="text-lg leading-relaxed">
            {t('about.text2')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
                <value.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary text-[#ECB201]-foreground rounded-lg p-12">
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
    </div>
  );
};

export default About;
