import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getHistory, getAnalysisById, saveAnalysis } from '@/lib/store';
import { type AnalysisEntry } from '@/lib/engine';
import { Copy, Download, Building, Users } from 'lucide-react';

export function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState<AnalysisEntry | null>(null);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const data = getAnalysisById(id);
      if (data) setEntry(data);
      else navigate('/analyze');
    } else {
      const history = getHistory();
      if (history.length > 0) {
        setEntry(history[0]);
      } else {
        navigate('/analyze');
      }
    }
  }, [searchParams, navigate]);

  if (!entry) return null;

  const handleToggle = (skill: string, val: 'know' | 'practice') => {
    const newMap = { ...entry.skillConfidenceMap, [skill]: val };
    
    // recalc score
    let newFinal = entry.baseScore;
    Object.values(newMap).forEach(v => {
      if (v === 'know') newFinal += 2;
      if (v === 'practice') newFinal -= 2;
    });
    
    if (newFinal < 0) newFinal = 0;
    if (newFinal > 100) newFinal = 100;

    const updated = {
      ...entry,
      skillConfidenceMap: newMap,
      finalScore: newFinal,
      updatedAt: new Date().toISOString()
    };
    
    setEntry(updated);
    saveAnalysis(updated);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const downloadTxt = () => {
    const text = `JD Analysis Results\n\nScore: ${entry.finalScore}/100\n\nPLAN:\n${JSON.stringify(entry.plan7Days, null, 2)}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analysis-${entry.id.substring(0,8)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // derived intel
  const isEnterprise = entry.roundMapping.length === 4;
  const industry = entry.company ? "Technology Services" : "Unknown";
  const sizeCategory = isEnterprise ? "Enterprise (2000+)" : "Startup (<200)";

  const weakSkills = Object.keys(entry.skillConfidenceMap).filter(k => entry.skillConfidenceMap[k] === 'practice');

  return (
    <PageLayout
      title="Analysis Results"
      subtitle={entry.company ? `${entry.company} - ${entry.role}` : 'General Analysis'}
      actions={
        <div className="flex bg-white rounded-md border border-gray-200 overflow-hidden text-sm">
           <div className="px-4 py-2 bg-kod-bg font-medium border-r border-gray-200">Score</div>
           <div className="px-4 py-2 font-bold text-kod-indigo">{entry.finalScore}</div>
        </div>
      }
      primary={
        <div className="space-y-6">
          <Card>
            <CardHeader className="p-6 border-b border-gray-100">
              <CardTitle>Key Skills Extracted</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {Object.entries(entry.extractedSkills).map(([cat, skills]) => (
                skills.length > 0 && (
                  <div key={cat}>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{cat.replace(/([A-Z])/g, ' $1')}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.map(skill => {
                         const state = entry.skillConfidenceMap[skill] || 'practice';
                         return (
                           <div key={skill} className="flex items-center gap-0 border border-gray-200 rounded-md overflow-hidden text-sm">
                             <div className="px-3 py-1.5 bg-gray-50 border-r border-gray-200 font-medium">
                               {skill}
                             </div>
                             <button 
                               onClick={() => handleToggle(skill, 'know')}
                               className={`px-3 py-1.5 transition-colors ${state === 'know' ? 'bg-kod-success text-white' : 'hover:bg-gray-100'}`}
                             >
                               Know
                             </button>
                             <button 
                               onClick={() => handleToggle(skill, 'practice')}
                               className={`px-3 py-1.5 transition-colors border-l border-gray-200 ${state === 'practice' ? 'bg-kod-warning text-white' : 'hover:bg-gray-100'}`}
                             >
                               Practice
                             </button>
                           </div>
                         )
                      })}
                    </div>
                  </div>
                )
              ))}
            </CardContent>
          </Card>

          <Card>
             <CardHeader className="p-6 border-b border-gray-100 flex flex-row justify-between items-center">
               <CardTitle>7-Day Preparation Plan</CardTitle>
               <Button variant="outline" size="sm" onClick={() => copyToClipboard(JSON.stringify(entry.plan7Days, null, 2))}>
                 <Copy className="w-4 h-4 mr-2" /> Copy Plan
               </Button>
             </CardHeader>
             <CardContent className="p-0">
               {entry.plan7Days.map((p, i) => (
                 <div key={i} className="p-6 border-b border-gray-100 last:border-0 flex gap-6">
                   <div className="w-24 shrink-0 font-serif font-bold text-kod-indigo">{p.day}</div>
                   <div className="flex-1">
                     <p className="font-semibold mb-2">{p.focus}</p>
                     <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                       {p.tasks.map((t, idx) => <li key={idx}>{t}</li>)}
                     </ul>
                   </div>
                 </div>
               ))}
             </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="p-6 border-b border-gray-100 flex flex-row justify-between items-center">
              <CardTitle>Round-wise Checklist</CardTitle>
               <Button variant="outline" size="sm" onClick={() => copyToClipboard(JSON.stringify(entry.checklist, null, 2))}>
                 <Copy className="w-4 h-4 mr-2" /> Copy Checklist
               </Button>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
               {entry.checklist.map((r, i) => (
                 <div key={i}>
                   <h4 className="font-serif font-bold mb-3">{r.roundTitle}</h4>
                   <div className="space-y-2">
                     {r.items.map((item, idx) => (
                       <label key={idx} className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                         <input type="checkbox" className="mt-1" />
                         <span>{item}</span>
                       </label>
                     ))}
                   </div>
                 </div>
               ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-6 border-b border-gray-100 flex flex-row justify-between items-center">
              <CardTitle>10 Likely Questions</CardTitle>
               <Button variant="outline" size="sm" onClick={() => copyToClipboard(entry.questions.join('\n'))}>
                 <Copy className="w-4 h-4 mr-2" /> Copy Questions
               </Button>
            </CardHeader>
            <CardContent className="p-6">
               <ul className="list-decimal pl-5 space-y-3 text-sm text-gray-700">
                  {entry.questions.map((q, i) => <li key={i}>{q}</li>)}
               </ul>
            </CardContent>
          </Card>
        </div>
      }
      secondary={
        <div className="space-y-6 shrink-0">
          <div className="flex flex-col gap-3">
             <Button className="w-full" onClick={downloadTxt}>
               <Download className="w-4 h-4 mr-2" /> Download as TXT
             </Button>
          </div>

          <Card className="bg-[#111111] text-white">
             <CardContent className="p-6">
               <h3 className="font-serif font-bold text-lg mb-4 text-kod-bg">Action Next</h3>
               <p className="text-sm text-gray-400 mb-4 tracking-wide">Focus on your weak areas:</p>
               <ul className="space-y-2 mb-6 text-sm font-medium">
                  {weakSkills.slice(0, 3).map(s => (
                    <li key={s} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-kod-warning" />
                      {s}
                    </li>
                  ))}
                  {weakSkills.length === 0 && <li className="text-kod-success">No weak areas marked!</li>}
               </ul>
               <Button variant="primary" className="w-full bg-white text-[#111111] hover:bg-gray-100">Start Day 1 Plan Now</Button>
             </CardContent>
          </Card>

          {entry.company && (
            <Card className="border-t-4 border-t-kod-indigo">
              <CardHeader className="p-5 border-b border-gray-100 pb-4">
                <CardTitle className="text-base">Company Intel</CardTitle>
                <div className="text-xs text-kod-indigo font-medium mt-1">Demo Mode: Generated heuristically.</div>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <Building className="w-8 h-8 text-gray-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-bold">{entry.company}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{industry}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-gray-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-bold">{sizeCategory}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase text-gray-500 mb-2">Typical Hiring Focus</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {isEnterprise 
                      ? "Structured DSA + core fundamentals. Heavy focus on algorithmic problem solving." 
                      : "Practical problem solving + stack depth. Can you ship features?"}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader className="p-5 border-b border-gray-100">
               <CardTitle className="text-base">Round Mapping</CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bgGradient before:-z-10">
                 {entry.roundMapping.map((r, i) => (
                   <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-kod-indigo before:rounded-full">
                     <p className="font-bold text-sm text-[#111111]">{r.roundTitle}</p>
                     <p className="text-xs text-gray-500 mt-1 italic">{r.whyItMatters}</p>
                   </div>
                 ))}
              </div>
            </CardContent>
          </Card>
        </div>
      }
    />
  );
}
