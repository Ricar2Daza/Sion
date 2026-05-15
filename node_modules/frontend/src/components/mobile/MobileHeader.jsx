import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function MobileHeader({ title, right }) {
  const navigate = useNavigate();

  return (
    <header className="mobile-topbar">
      <button type="button" className="mobile-icon-btn" onClick={() => navigate(-1)} aria-label="Volver">
        <ChevronLeft size={22} />
      </button>
      <span className="mobile-topbar-title">{title}</span>
      <div style={{ width: 40, display: 'flex', justifyContent: 'flex-end' }}>{right}</div>
    </header>
  );
}
