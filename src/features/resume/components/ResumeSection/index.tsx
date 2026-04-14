import { ComponentProps, JSX } from 'react';
import { clsx } from 'clsx';

import classes from '~features/resume/components/ResumeSection/ResumeSection.module.css'

const ResumeSection = ({className, children, ...params}: ComponentProps<'section'>): JSX.Element  => (
  <section
    {...params}
    className={clsx(classes['section'], className)}
  >
    {children}
  </section>
);

export interface ResumeSectionHeaderParams extends ComponentProps<'header'> {
  label: string,
}

const ResumeSectionHeader = ({label, className, ...params}: ResumeSectionHeaderParams): JSX.Element => (
  <header
    {...params}
    className={clsx(classes['section__header'], className)}
  >
    <h3
      className={classes['section__headerLabel']}
    >
      {label}
    </h3>

    <hr className={classes['section__headerLine']} />
  </header>
);

ResumeSection.Header = ResumeSectionHeader;


export default ResumeSection;
