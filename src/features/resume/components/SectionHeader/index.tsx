import { ReactElement, ComponentProps, JSX } from 'react';
import { clsx } from 'clsx';

import classes from '~features/resume/components/SectionHeader/SectionHeader.module.css'

interface ResumeViewParams extends ComponentProps<"div"> {
  label: string,
}

const View = ({label, className, ...params}: ResumeViewParams): JSX.Element  => (
  <div
    {...params}
    className={clsx(classes['section-header'], className)}
  >
    <h3
      className={classes['section-header__label']}
    >
      {label}
    </h3>

    <hr className={classes['section-header__line']} />
  </div>
);


const SectionHeader = (params: SectionHeaderParams): ReactElement => {
  return (
    <View
      {...params}
    />
  );
};

export interface SectionHeaderParams extends ComponentProps<'div'> {
  label: string,
}

export default SectionHeader;

export {
  View,
};
