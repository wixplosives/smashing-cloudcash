import { createBoard } from '@wixc3/react-board';
import { BalanceDetail } from '../../../components/balance/balance-detail/balance-detail';
import { Doc } from '../../../util-components/documentation/doc';
import { DocHeader } from '../../../util-components/documentation/doc-header';
import { DocSection } from '../../../util-components/documentation/doc-section';

export default createBoard({
    name: '📒 Balance Detail',
    Board: () => (
        <Doc>
            <DocHeader title="Balance Detail" />
            <DocSection
                title="Required Properties"
                description={
                    <div>
                        <ul>
                            <li>
                                <code>label</code>
                            </li>
                            <li>
                                <code>currency</code> – Currency symbol to be
                                displayed in UI
                            </li>
                            <li>
                                <code>amount</code> – Will be formatted
                                according to number format, e.g.{' '}
                                <code>1000</code> will be displayed as{' '}
                                <code>1,000.00</code>
                            </li>
                        </ul>
                    </div>
                }
                contentLayout="grid3"
            >
                <BalanceDetail label="Income" currency="$" amount={20} />
                <BalanceDetail label="Income" currency="$" amount={1300} />
                <BalanceDetail label="Income" currency="$" amount={1300000} />
            </DocSection>
            <DocSection
                title="Trend"
                description={
                    <ol>
                        <li>
                            <code>{`trend="neutral"`}</code> – default
                        </li>
                        <li>
                            <code>{`trend="positive"`}</code>
                        </li>
                        <li>
                            <code>{`trend="negative"`}</code>
                        </li>
                    </ol>
                }
                contentLayout="grid3"
            >
                <BalanceDetail
                    trend="neutral"
                    label="Income"
                    currency="$"
                    amount={1300.0}
                />
                <BalanceDetail
                    trend="positive"
                    label="Income"
                    currency="$"
                    amount={1300.0}
                />
                <BalanceDetail
                    trend="negative"
                    label="Income"
                    currency="$"
                    amount={1300.0}
                />
            </DocSection>
            <DocSection
                title="Emphasis"
                description={
                    <div>
                        Use emphasized <code>BalanceDetail</code> to create
                        hierarchy
                        <ol>
                            <li>
                                <code>{`emphasized=true`}</code>
                            </li>
                            <li>
                                <code>{`emphasized=false`}</code> – default
                            </li>
                        </ol>
                    </div>
                }
                contentLayout="grid3"
            >
                <BalanceDetail
                    label="Income"
                    currency="$"
                    amount={1300.0}
                    emphasized
                />
                <BalanceDetail label="Income" currency="$" amount={1300.0} />
            </DocSection>
        </Doc>
    ),
    environmentProps: {
        canvasWidth: 874,
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
    },
    isSnippet: true,
});
