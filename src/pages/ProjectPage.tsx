import React from 'react';
import { useLanguage } from '../i18n';
import ProjectForm from '../components/project/ProjectForm';

const ProjectPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-20">
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <h1 className="mb-6" data-aos="fade-up" data-aos-duration="600">
            {t('projectForm.title')}
          </h1>
          <p className="text-xl max-w-2xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            {t('projectForm.intro')}
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom max-w-4xl">
          <ProjectForm />
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;