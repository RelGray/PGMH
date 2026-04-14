import { ComponentProps, JSX } from 'react';
import { clsx } from 'clsx';
import { Trans, useTranslation } from "react-i18next";

import classes from '~features/resume/components/Resume/Resume.module.css'
import ResumeSection from '~features/resume/components/ResumeSection';

const Resume = ({className, ...params}: ComponentProps<"div">): JSX.Element  => {
  const { t } = useTranslation();

  return (
    <div
      {...params}
      className={clsx(className, classes['resume'])}
    >
      <header className={classes['resume__header']}>
        <div>
          <h1 className={classes['resume__name']}>
            {t('resume.name')}
          </h1>
          <h3>
            {t('resume.job_title')}
          </h3>
        </div>

        <div>
          <div>
            {t('resume.location')}
          </div>
        </div>
      </header>

      <div className={classes['resume__body']}>
        <ResumeSection
          className={classes['resume__section']}
        >
          <ResumeSection.Header
            className={classes['resume__sectionHeader']}
            label={t('resume.summary.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <ul className={classes['resume__list']}>
              <li>
                {t('resume.summary.overview')}
              </li>

              <li>
                {t('resume.summary.experience')}
              </li>

              <li>
                {t('resume.summary.adaptive')}
              </li>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection
          className={classes['resume__section']}
        >
          <ResumeSection.Header
            className={classes['resume__sectionHeader']}
            label={t('resume.experience.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <span className={classes['resume__sectionSubLabel']}>
                  {t('resume.experience.leadr.job_title')}
                </span>

                <span>
                  {t('resume.experience.leadr.information')}
                </span>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('resume.experience.leadr.summary.soc')}
                </li>

                <li>
                  {t('resume.experience.leadr.summary.improvements')}
                </li>

                <li>
                  {t('resume.experience.leadr.summary.departments')}
                </li>

                <li>
                  {t('resume.experience.leadr.summary.mentoring')}
                </li>

                <li>
                  {t('resume.experience.leadr.summary.customers')}
                </li>
              </ul>
            </div>

            <div className={classes['resume__sectionSubHeader']}>
              <span className={classes['resume__sectionSubLabel']}>
                {t('resume.experience.turning.job_title')}
              </span>

              <span>
                {t('resume.experience.turning.information')}
              </span>
            </div>

            <ul className={classes['resume__list']}>
              <li>
                {t('resume.experience.turning.summary.overview')}
              </li>

              <li>
                {t('resume.experience.turning.summary.focus')}
              </li>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection
          className={classes['resume__section']}
        >
          <ResumeSection.Header
            className={classes['resume__sectionHeader']}
            label={t('resume.projects.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <div className={classes['resume__sectionSubLabel']}>
                  {t('resume.projects.build_improvements.header')}
                </div>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('resume.projects.build_improvements.summary.cra_ejection')}
                </li>

                <li>
                  {t('resume.projects.build_improvements.summary.typescript_conversion')}
                </li>
              </ul>
            </div>

            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <div className={classes['resume__sectionSubLabel']}>
                  {t('resume.projects.real_time_meetings.header')}
                </div>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('resume.projects.real_time_meetings.summary.description')}
                </li>

                <li>
                  {t('resume.projects.real_time_meetings.summary.planning')}
                </li>
              </ul>
            </div>

            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <div className={classes['resume__sectionSubLabel']}>
                  {t('resume.projects.real_time_scoring.header')}
                </div>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('resume.projects.real_time_scoring.summary.description')}
                </li>

                <li>
                  {t('resume.projects.real_time_scoring.summary.features')}
                </li>
              </ul>
            </div>

            <div>
              <div className={classes['resume__sectionSubHeader']}>
                <div className={classes['resume__sectionSubLabel']}>
                  {t('resume.projects.hot_spot.header')}
                </div>
              </div>

              <ul className={classes['resume__list']}>
                <li>
                  {t('resume.projects.hot_spot.summary.description')}
                </li>

                <li>
                  {t('resume.projects.hot_spot.summary.features')}
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
            label={t('resume.skills.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <div className={classes['resume__list']}>
              <Trans
                i18nKey="resume.skills.code.list"
                values={{label: t('resume.skills.code.label')}}
                components={{ banana: <span className={classes['resume__sectionSubLabel']} /> }}
              />
            </div>

            <div>
              <Trans
                i18nKey="resume.skills.tools.list"
                values={{label: t('resume.skills.tools.label')}}
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
            label={t('resume.education.header')}
          />

          <div className={classes['resume__sectionBody']}>
            <div className={classes['resume__sectionSubHeader']}>
              <span className={classes['resume__sectionSubLabel']}>
                {t('resume.education.ysu.degree')}
              </span>

              <span>
                {t('resume.education.ysu.information')}
              </span>
            </div>
          </div>
        </ResumeSection>
      </div>
    </div>
  );
};

export default Resume;
