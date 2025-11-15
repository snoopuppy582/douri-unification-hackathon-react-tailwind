import { useAppState } from '../../context/AppState.jsx';
import DiaryCard from './DiaryCard.jsx';
import DmButton from './DmButton.jsx';

export default function DiaryFeed() {
  const { diaries } = useAppState();
  return (
    <section className="grid gap-4 mt-6">
      <div className="flex items-center justify-between bg-gradient-to-r from-[#FFF5E8] to-[#F5EDE0] rounded-2xl px-5 py-4 border-2 border-[#E8DDD0]">
        <h3 className="m-0 text-xl font-bold text-[#2C2C2C] flex items-center gap-2">
          <span className="text-2xl">📔</span>
          <span>육아일기</span>
        </h3>
        <DmButton />
      </div>
      <div className="grid gap-4">
        {diaries.map((d) => (
          <DiaryCard key={d.id} {...d} />
        ))}
      </div>
    </section>
  );
}