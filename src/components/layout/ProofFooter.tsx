import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckSquare, Square } from 'lucide-react';

export function ProofFooter() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    ui: true,
    logic: false,
    test: false,
    deployed: false,
  });

  const toggle = (key: string) => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const proofItems = [
    { key: 'ui', label: 'UI Built' },
    { key: 'logic', label: 'Logic Working' },
    { key: 'test', label: 'Test Passed' },
    { key: 'deployed', label: 'Deployed' },
  ];

  return (
    <div className="h-14 border-t border-gray-200 bg-white flex items-center px-8 shrink-0 relative z-10 w-full justify-center">
      <div className="flex items-center gap-6">
        {proofItems.map((item) => (
          <button 
            key={item.key} 
            className="flex items-center gap-2 group transition-opacity"
            onClick={() => toggle(item.key)}
          >
            {checked[item.key] ? (
              <CheckSquare className="w-4 h-4 text-kod-success transition-all" />
            ) : (
              <Square className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-all" />
            )}
            <span className={cn(
              "text-sm font-medium",
              checked[item.key] ? "text-[#111111]" : "text-gray-500"
            )}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
