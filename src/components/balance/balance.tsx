import Card from '../card/card';
import { BalanceDetail } from './balance-detail/balance-detail';
import styles from './balance.module.scss';

interface BalanceProps {
    className?: string;
}

export const Balance = ({ className }: BalanceProps) => {
    return (
        <Card className={className}>
            <Card.Title>Balance</Card.Title>
            <div className={styles.details}>
                <BalanceDetail
                    currency="$"
                    label="Current Balance"
                    amount={12000}
                    emphasized
                />
                <BalanceDetail
                    currency="$"
                    label="Income"
                    amount={1500}
                    trend="positive"
                />
                <BalanceDetail
                    currency="$"
                    label="Outcome"
                    amount={350.2}
                    trend="negative"
                />
            </div>
        </Card>
    );
};
