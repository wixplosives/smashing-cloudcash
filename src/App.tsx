import { Balance } from './components/balance/balance';
import { DashboardLayout } from './components/dashboard-layout/dashboard-layout';
import { Goals } from './components/goals/goals';
import { OutcomeStatistics } from './components/outcome-statistics/outcome-statistics';
import { Section } from './components/section/section';
import { TransactionHistory } from './components/transaction-history/transaction-history';
import PageHeader from './components/page-header/page-header';
import { NewTransaction } from './components/new-transaction/new-transaction';
import { GetLoanBanner } from './components/get-loan-banner/get-loan-banner';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.root}>
            <DashboardLayout>
                <Section>
                    <Section.Content>
                        <PageHeader className={styles.header}>
                            <PageHeader.Title>Weekly Summary</PageHeader.Title>
                        </PageHeader>
                    </Section.Content>
                </Section>

                <Section>
                    <Section.Content className={styles.dashboardGrid}>
                        <div className={styles.mainColumn}>
                            <Balance />
                            <TransactionHistory />
                        </div>
                        <div className={styles.secondaryColumn}>
                            <Goals />
                            <OutcomeStatistics />
                            <div className={styles.userActionsSection}>
                                <NewTransaction />
                                <GetLoanBanner />
                            </div>
                        </div>
                    </Section.Content>
                </Section>
            </DashboardLayout>
        </div>
    );
}

export default App;
