import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { ProofFooter } from './ProofFooter';

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-[#111111]">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full bg-[#F7F6F3]">
        <TopBar />
        <main className="flex-1 overflow-y-auto w-full flex flex-col relative">
          <Outlet />
        </main>
        <ProofFooter />
      </div>
    </div>
  );
}
