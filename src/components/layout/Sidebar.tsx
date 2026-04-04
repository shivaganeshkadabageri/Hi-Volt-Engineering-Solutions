import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Dumbbell, 
  FileText, 
  BookOpen, 
  UserCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Practice', path: '/practice', icon: Dumbbell },
    { name: 'Assessments', path: '/assessments', icon: FileText },
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'Profile', path: '/profile', icon: UserCircle },
  ];

  return (
    <aside className="w-64 bg-[#F7F6F3] border-r border-gray-200 h-full flex flex-col shrink-0">
      <div className="p-6">
        <h1 className="font-serif text-2xl font-bold text-[#111111]">Placement Prep</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
                isActive 
                  ? 'bg-kod-indigo text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-[#111111]'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
          <UserCircle className="text-gray-500 w-6 h-6" />
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-semibold truncate">Candidate User</p>
          <p className="text-xs text-gray-500 truncate">demo@student.com</p>
        </div>
      </div>
    </aside>
  );
}
