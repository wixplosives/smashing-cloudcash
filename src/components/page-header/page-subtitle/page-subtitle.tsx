import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './page-subtitle.module.scss';

export interface PageSubtitleProps {
    text: string;
    className?: string;
}

export const PageSubtitle = ({
    className,
    text = 'Default Text',
}: PageSubtitleProps) => {
    return <span className={classNames(styles.root, className)}>{text}</span>;
};
