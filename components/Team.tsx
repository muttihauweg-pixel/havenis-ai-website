import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';

interface TeamMemberCardProps {
  image: string;
  name: string;
  title: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, title, bio }) => {
  return (
    <div className="bg-[#1a1c1f] p-8 rounded-2xl border border-white/10 flex flex-col items-start text-left h-full transform hover:-translate-y-1 transition-transform duration-300">
      <div className="w-32 h-32 mb-5 rounded-full overflow-hidden border-4 border-[#08D9D6] mx-auto">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-white mb-1 text-center w-full">{name}</h3>
      <p className="text-sm font-semibold text-[#08D9D6] mb-4 text-center w-full">{title}</p>
      <p className="text-slate-400 leading-relaxed text-sm">{bio}</p>
    </div>
  );
};

const Team: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  const teamMembers = [
    {
      image: './images/danilo-kuss-ceo.jpg',
      name: t('team.member1Name'),
      title: t('team.member1Title'),
      bio: t('team.member1Bio'),
    },
    {
      image: './images/sarah-le-roux-cto.jpg',
      name: t('team.member2Name'),
      title: t('team.member2Title'),
      bio: t('team.member2Bio'),
    },
    {
      image: './images/dr-alexander-schmidt.jpg',
      name: t('team.member3Name'),
      title: t('team.member3Title'),
      bio: t('team.member3Bio'),
    },
  ];

  const advisors = [
      { name: t('team.advisor1Name'), title: t('team.advisor1Title') },
      { name: t('team.advisor2Name'), title: t('team.advisor2Title') },
  ];

  return (
    <section id="team" ref={ref} className={`py-24 md:py-32 bg-[#0f1113] border-t border-b border-[#08D9D6]/10 fade-in-section ${animationClasses}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
          {t('team.title')}
        </h2>
        <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto mb-16">
          {t('team.subtitle')}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

        {/* Advisory Board */}
        <div className="mt-24 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 cyan-gradient-text">{t('team.advisoryTitle')}</h3>
            <div className="space-y-4">
                {advisors.map((advisor, index) => (
                    <div key={index} className="bg-[#1a1c1f] p-4 rounded-lg border border-white/10 flex justify-between items-center text-left">
                        <p className="font-bold text-white">{advisor.name}</p>
                        <p className="text-sm text-slate-400">{advisor.title}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
