import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { getHistory } from '@/lib/store';
import { type AnalysisEntry } from '@/lib/engine';
import { History as HistoryIcon, ArrowRight } from 'lucide-react';

export function History() {
  const [history, setHistory] = useState<AnalysisEntry[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <PageLayout
      title="Analysis History"
      subtitle="Review past job descriptions and track your preparation progress over time."
      primary={
        <div className="space-y-4">
          {history.length === 0 ? (
             <Card className="bg-gray-50 border-dashed">
               <CardContent className="p-12 flex flex-col items-center justify-center text-center space-y-4">
                 <HistoryIcon className="w-12 h-12 text-gray-300" />
                 <p className="text-gray-500 font-medium">No past analysis found. Analyze a JD to get started.</p>
               </CardContent>
             </Card>
          ) : (
             history.map((entry) => (
               <div 
                 key={entry.id}
                 onClick={() => navigate(`/results?id=${entry.id}`)}
                 className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between cursor-pointer hover:border-kod-indigo hover:shadow-sm transition-all group"
               >
                 <div>
                   <h3 className="font-serif font-bold text-lg mb-1 group-hover:text-kod-indigo transition-colors text-[#111111]">{entry.company || 'Unknown Company'}</h3>
                   <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{entry.role || 'General Role'}</span>
                      <span>•</span>
                      <span>{new Date(entry.createdAt).toLocaleDateString()}</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="text-right">
                       <p className="text-xs uppercase font-bold text-gray-400">Score</p>
                       <p className="font-bold text-kod-indigo text-lg">{entry.finalScore}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-kod-indigo transition-colors" />
                 </div>
               </div>
             ))
          )}
        </div>
      }
    />
  );
}
