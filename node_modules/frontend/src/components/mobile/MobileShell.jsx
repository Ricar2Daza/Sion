import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function MobileShell() {
  return (
    <div className="mobile-app-root">
      <div className="mobile-app-scroll">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
