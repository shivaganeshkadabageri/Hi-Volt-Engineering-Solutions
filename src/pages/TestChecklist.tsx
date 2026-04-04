import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const CHECKLIST_KEY = 'prp_test_checklist';

const TESTS = [
  { id: '1', title: 'JD required validation works', hint: 'Go to /analyze, click analyze with empty JD.' },
  { id: '2', title: 'Short JD warning shows for <200 chars', hint: 'Paste <200 chars and verify warning.' },
  { id: '3', title: 'Skills extraction groups correctly', hint: 'Check Results page for categorized tags.' },
  { id: '4', title: 'Round mapping changes based on company + skills', hint: 'Test with "Amazon" vs empty.' },
  { id: '5', title: 'Score calculation is deterministic', hint: 'Run same JD twice, score should be identical.' },
  { id: '6', title: 'Skill toggles update score live', hint: 'Click Practice/Know and observe score change.' },
  { id: '7', title: 'Changes persist after refresh', hint: 'Toggle skill, refresh, verify toggle and score.' },
  { id: '8', title: 'History saves and loads correctly', hint: 'Check /history and ensure clicking loads entry.' },
  { id: '9', title: 'Export buttons copy the correct content', hint: 'Use Copy Plan and paste in notepad.' },
  { id: '10', title: 'No console errors on core pages', hint: 'Open DevTools and check for React errors.' },
];

export function TestChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem(CHECKLIST_KEY);
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  const handleToggle = (id: string) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(next));
  };

  const handleReset = () => {
    setChecked({});
    localStorage.removeItem(CHECKLIST_KEY);
  };

  const passedCount = Object.values(checked).filter(Boolean).length;
  const isAllPassed = passedCount === TESTS.length;

  return (
    <PageLayout
      title="Test Checklist"
      subtitle="Verify core application functionality before shipping."
      actions={
        <div className="flex bg-white rounded-md border border-gray-200 overflow-hidden text-sm">
           <div className="px-4 py-2 bg-kod-bg font-medium border-r border-gray-200 text-gray-700">Tests Passed</div>
           <div className={`px-4 py-2 font-bold ${isAllPassed ? 'text-kod-success' : 'text-kod-warning'}`}>
             {passedCount} / {TESTS.length}
           </div>
        </div>
      }
      primary={
        <Card>
          <CardHeader className="p-6 border-b border-gray-100 flex flex-row items-center justify-between">
             <div>
               <CardTitle>Pre-Shipping Verification</CardTitle>
               {!isAllPassed && <p className="text-sm font-medium text-kod-warning mt-1">Fix issues before shipping.</p>}
             </div>
             <Button variant="outline" size="sm" onClick={handleReset}>Reset checklist</Button>
          </CardHeader>
          <CardContent className="p-0">
             <div className="divide-y divide-gray-100">
                {TESTS.map(test => (
                  <div key={test.id} className="p-6 py-4 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                     <input 
                       type="checkbox" 
                       className="mt-1 w-4 h-4 text-kod-indigo border-gray-300 rounded focus:ring-kod-indigo cursor-pointer"
                       checked={checked[test.id] || false}
                       onChange={() => handleToggle(test.id)}
                     />
                     <div>
                       <p className="font-semibold text-gray-800">{test.title}</p>
                       <p className="text-sm text-gray-500 italic mt-0.5">How to test: {test.hint}</p>
                     </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>
      }
      secondary={
        <div className="space-y-4">
           <Card className="bg-gray-50 border-none">
             <CardContent className="p-5">
               <h3 className="font-serif font-bold text-lg mb-2">Shipping Lock</h3>
               <p className="text-sm text-gray-600 mb-4">You cannot access the Ship Route until all {TESTS.length} tests have been verified locally.</p>
               <Button 
                 className="w-full" 
                 disabled={!isAllPassed}
                 onClick={() => navigate('/prp/08-ship')}
               >
                 Proceed to Ship Route
               </Button>
             </CardContent>
           </Card>
        </div>
      }
    />
  );
}
