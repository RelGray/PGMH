import { TFunction } from 'i18next';
import { ReactElement, ComponentProps, JSX } from 'react';
import { clsx } from 'clsx';

import { useTranslation } from "react-i18next";
import SectionHeader from '~features/resume/components/SectionHeader';

import classes from '~features/resume/components/Resume/Resume.module.css'

interface ResumeViewParams extends ComponentProps<"div"> {
  t: TFunction
}

const View = ({t, className, ...params}: ResumeViewParams): JSX.Element  => (
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
      <section className={classes['resume__section']}>
        <SectionHeader
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
      </section>

      <section className={classes['resume__section']}>
        <SectionHeader
          className={classes['resume__sectionHeader']}
          label={t('resume.experience.header')}
        />

        <div className={classes['resume__sectionBody']}>
          <div>
            <div className={classes['resume__sectionSubHeader']}>
              <span className={classes['resume__sectionSubHeaderLabel']}>
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
            <span className={classes['resume__sectionSubHeaderLabel']}>
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
      </section>

      <section className={classes['resume__section']}>
        <SectionHeader
          className={classes['resume__sectionHeader']}
          label={t('resume.projects.header')}
        />

        <div className={classes['resume__sectionBody']}>
          <div>
            <div className={classes['resume__sectionSubHeaderLabel']}>
              {t('resume.projects.build_improvements.header')}
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
            <div className={classes['resume__sectionSubHeaderLabel']}>
              {t('resume.projects.real_time_meetings.header')}
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
            <div className={classes['resume__sectionSubHeaderLabel']}>
              {t('resume.projects.real_time_scoring.header')}
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
            <div className={classes['resume__sectionSubHeaderLabel']}>
              {t('resume.projects.hot_spot.header')}
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
      </section>

      <section className={classes['resume__section']}>
        <SectionHeader
          className={classes['resume__sectionHeader']}
          label={t('resume.skills.header')}
        />

        <div className={classes['resume__sectionBody']}>
          <div>
            {/* ToDo: Bolding */}
            {t('resume.skills.code.list', {label: t('resume.skills.code.label')})}
          </div>

          <div>
            {/* ToDo: Bolding */}
            {t('resume.skills.tools.list', {label: t('resume.skills.tools.label')})}
          </div>
        </div>
      </section>

      <section className={classes['resume__section']}>
        <SectionHeader
          className={classes['resume__sectionHeader']}
          label={t('resume.education.header')}
        />

        <div className={classes['resume__sectionBody']}>
          <div className={classes['resume__sectionSubHeader']}>
            <span className={classes['resume__sectionSubHeaderLabel']}>
              {t('resume.education.ysu.degree')}
            </span>

            <span>
              {t('resume.education.ysu.information')}
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
);


const Resume = (params: ResumeParams): ReactElement => {
  const { t } = useTranslation();

  const internalParams = {
    t,
  };

  return (
    <View
      {...params}
      {...internalParams}
    />
  );
};

export interface ResumeParams extends ComponentProps<'div'> {

}

export default Resume;

export {
  View,
};
