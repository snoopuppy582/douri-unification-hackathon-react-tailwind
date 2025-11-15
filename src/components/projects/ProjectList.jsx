import { useAppState } from '../../context/AppState.jsx';
import ProjectCard from './ProjectCard.jsx';
import { useNavigate } from 'react-router-dom';
import ConceptCaption from './ConceptCaption.jsx';

export default function ProjectList() {
  const { projects } = useAppState();
  const navigate = useNavigate();
  return (
    <section className="grid gap-6 max-w-[900px] mx-auto px-4">
      <ConceptCaption />

      {/* Cards list on gray background */}
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          title={`${p.title} (${p.farmerName} 농가)`}
          imageUrl={p.imageUrl}
          fundingProgress={p.fundingProgress}
          pricePerPiece={p.pricePerPiece}
          onClick={() => navigate(`/projects/${p.id}`)}
        />
      ))}
    </section>
  );
}