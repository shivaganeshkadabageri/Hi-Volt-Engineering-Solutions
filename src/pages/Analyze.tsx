import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { analyzeJD, type AnalysisEntry } from '@/lib/engine';
import { saveAnalysis } from '@/lib/store';
import { AlertCircle } from 'lucide-react';

export function Analyze() {
  const [jdText, setJdText] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (!jdText.trim()) {
      setError('Job Description is required.');
      return;
    }
    if (jdText.length < 200) {
      setError('This JD is too short to analyze deeply. Paste full JD for better output.');
      return;
    }
    setError('');

    const analysis = analyzeJD(jdText, company, role) as AnalysisEntry;
    
    // Construct full entry
    const newEntry: AnalysisEntry = {
      ...analysis,
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      company: company.trim(),
      role: role.trim(),
      jdText: jdText,
    };

    saveAnalysis(newEntry);
    navigate(`/results?id=${newEntry.id}`);
  };

  return (
    <PageLayout
      title="Analyze New JD"
      subtitle="Paste a job description below to generate a tailored preparation plan and extract key skills."
      primary={
        <Card>
          <CardContent className="p-6 space-y-6">
            {error && (
              <div className="bg-kod-warning/10 border border-kod-warning text-kod-warning px-4 py-3 rounded-md flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
                <textarea 
                  className="kod-input min-h-[300px] resize-y"
                  placeholder="Paste the full job description here..."
                  value={jdText}
                  onChange={(e) => setJdText(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                  <input 
                    type="text" 
                    className="kod-input" 
                    placeholder="e.g. KodNest"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role (Optional)</label>
                  <input 
                    type="text" 
                    className="kod-input" 
                    placeholder="e.g. Frontend Developer"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button size="lg" onClick={handleAnalyze}>Analyze & Generate Plan</Button>
            </div>
          </CardContent>
        </Card>
      }
      secondary={
        <div className="space-y-4">
           <Card className="bg-gray-50 border-none">
             <CardContent className="p-5">
               <h3 className="font-serif font-bold text-lg mb-2">How it works</h3>
               <p className="text-sm text-gray-600 mb-4">Our local heuristic engine scans your text to detect core competencies, maps expected interview rounds, and prepares a custom 7-day checklist.</p>
               <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4">
                 <li>No data leaves your browser</li>
                 <li>Extracts tech stack automatically</li>
                 <li>Generates likely interview questions</li>
               </ul>
             </CardContent>
           </Card>
        </div>
      }
    />
  );
}
