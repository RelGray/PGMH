import { ComponentProps, JSX } from 'react';
import { clsx } from 'clsx';
import { Trans, useTranslation } from 'react-i18next';

import classes from '~features/resume/components/Resume/Resume.module.css';
import ResumeSection from '~features/resume/components/ResumeSection';

const Resume = ({ className, ...params }: ComponentProps<'div'>): JSX.Element => {
  const { t } = useTranslation('resume');

  return (
    <div
      {...params}
      className={clsx(className, classes['resume'])}
    >
      <header className={classes['resume__header']}>
        <div>
          <h1 className={classes['resume__name']}>
            {t('name')}
          </h1>
          <h3>
            {t('job_title')}
          </h3>
        </div>

        <div>
          <div>
            {t('location')}
          </div>
        </div>
      </header>

      <div className={classes['resume__body']}>
        <ResumeSection
          className={classes['resume__section']}
        >
          <ResumeSection.Header
            className={classes['resume__sectionHeader']}
            label={t('summary.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <ul className={classes['resume__list']}>
              <li>
                {t('summary.overview')}
              </li>

              <li>
                {t('summary.experience')}
              </li>

              <li>
                {t('summary.adaptive')}
              </li>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection
          className={classes['resume__section']}
        >
          <ResumeSection.Header
            className={classes['resume__sectionHeader']}
            label={t('experience.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <span className={classes['resume__sectionSubLabel']}>
                  {t('experience.leadr.job_title')}
                </span>

                <span>
                  {t('experience.leadr.information')}
                </span>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('experience.leadr.summary.soc')}
                </li>

                <li>
                  {t('experience.leadr.summary.improvements')}
                </li>

                <li>
                  {t('experience.leadr.summary.departments')}
                </li>

                <li>
                  {t('experience.leadr.summary.mentoring')}
                </li>

                <li>
                  {t('experience.leadr.summary.customers')}
                </li>
              </ul>
            </div>

            <div className={classes['resume__sectionSubHeader']}>
              <span className={classes['resume__sectionSubLabel']}>
                {t('experience.turning.job_title')}
              </span>

              <span>
                {t('experience.turning.information')}
              </span>
            </div>

            <ul className={classes['resume__list']}>
              <li>
                {t('experience.turning.summary.overview')}
              </li>

              <li>
                {t('experience.turning.summary.focus')}
              </li>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection
          className={classes['resume__section']}
        >
          <ResumeSection.Header
            className={classes['resume__sectionHeader']}
            label={t('projects.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <div className={classes['resume__sectionSubLabel']}>
                  {t('projects.build_improvements.header')}
                </div>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('projects.build_improvements.summary.cra_ejection')}
                </li>

                <li>
                  {t('projects.build_improvements.summary.typescript_conversion')}
                </li>
              </ul>
            </div>

            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <div className={classes['resume__sectionSubLabel']}>
                  {t('projects.real_time_meetings.header')}
                </div>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('projects.real_time_meetings.summary.description')}
                </li>

                <li>
                  {t('projects.real_time_meetings.summary.planning')}
                </li>
              </ul>
            </div>

            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <div className={classes['resume__sectionSubLabel']}>
                  {t('projects.real_time_scoring.header')}
                </div>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('projects.real_time_scoring.summary.description')}
                </li>

                <li>
                  {t('projects.real_time_scoring.summary.features')}
                </li>
              </ul>
            </div>

            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <div className={classes['resume__sectionSubLabel']}>
                  {t('projects.hot_spot.header')}
                </div>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('projects.hot_spot.summary.description')}
                </li>

                <li>
                  {t('projects.hot_spot.summary.features')}
                </li>
              </ul>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection
          className={classes['resume__section']}
        >
          <ResumeSection.Header
            className={classes['resume__sectionHeader']}
            label={t('skills.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <div className={classes['resume__list']}>
              <Trans
                t={t}
                i18nKey="skills.code.list"
                values={{ label: t('skills.code.label') }}
                components={{ banana: <span className={classes['resume__sectionSubLabel']} /> }}
              />
            </div>

            <div>
              <Trans
                t={t}
                i18nKey="skills.tools.list"
                values={{ label: t('skills.tools.label') }}
                components={{ banana: <span className={classes['resume__sectionSubLabel']} /> }}
              />
            </div>
          </div>
        </ResumeSection>

        <ResumeSection
          className={classes['resume__section']}
        >
          <ResumeSection.Header
            className={classes['resume__sectionHeader']}
            label={t('education.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <div className={classes['resume__sectionSubHeader']}>
              <span className={classes['resume__sectionSubLabel']}>
                {t('education.ysu.degree')}
              </span>

              <span>
                {t('education.ysu.information')}
              </span>
            </div>
          </div>
        </ResumeSection>
      </div>
    </div>
  );
};

export default Resume;
