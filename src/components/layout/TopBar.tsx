import { BadgeCheck } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-16 border-b border-gray-200 bg-[#F7F6F3] flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-kod-red rounded-sm" />
        <span className="font-serif font-bold text-lg">KodNest Premium</span>
      </div>
      
      <div className="text-sm font-medium text-gray-500">
        Workspace Context: Placement Prep
      </div>

      <div className="flex items-center gap-3 relative group">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
          <BadgeCheck className="w-4 h-4 text-kod-success" />
          <span className="text-sm font-semibold">Active Session</span>
        </div>
      </div>
    </header>
  );
}
