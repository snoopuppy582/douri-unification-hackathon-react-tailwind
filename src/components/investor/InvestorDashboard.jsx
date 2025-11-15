import CowStatusCard from './CowStatusCard.jsx';
import ActionButtons from './ActionButtons.jsx';
import DiaryFeed from './DiaryFeed.jsx';
import InvestmentSummary from './InvestmentSummary.jsx';

export default function InvestorDashboard() {
  return (
    <section className="grid gap-4">
      <InvestmentSummary />
      <CowStatusCard />
      <ActionButtons />
      <DiaryFeed />
    </section>
  );
}