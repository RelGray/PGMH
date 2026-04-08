import { ComponentProps, JSX } from 'react';
import { clsx } from 'clsx';

import classes from '~features/resume/components/SectionHeader/SectionHeader.module.css'

export interface SectionParams extends ComponentProps<'div'> {
  label: string,
}

const Section = ({label, className, children, ...params}: SectionParams): JSX.Element  => (
  <div
    {...params}
    className={clsx(classes['section'], className)}
  >
    <div
      {...params}
      className={clsx(classes['section__header'], className)}
    >
      <h3
        className={classes['section__header-label']}
      >
        {label}
      </h3>

      <hr className={classes['section__header-line']} />
    </div>

    {children}
  </div>
);



export default Section;
