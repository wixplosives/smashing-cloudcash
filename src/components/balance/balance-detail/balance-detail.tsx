import classNames from 'classnames';
import styles from './balance-detail.module.scss';

interface BalanceDetailProps {
    className?: string;
    label: string;
    currency: string; //should be enum or from intl
    amount: number;
    trend?: 'positive' | 'negative' | 'neutral';
    emphasized?: boolean;
}

export const BalanceDetail = ({
    label,
    currency,
    amount,
    trend = 'neutral',
    emphasized = false,
    className,
}: BalanceDetailProps) => {
    const formattedAmount = new Intl.NumberFormat(undefined, {
        style: 'decimal',
        minimumFractionDigits: 2,
    }).format(amount);

    return (
        <div className={classNames(styles.root, className)}>
            <h6 className={styles.label}>{label}</h6>
            <span
                className={classNames(styles.amount, styles[trend], {
                    [styles.emphasized]: emphasized,
                })}
            >
                <span className={styles.currency}>{currency}</span>
                {formattedAmount}
            </span>
        </div>
    );
};
