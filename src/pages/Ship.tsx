import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Rocket } from 'lucide-react';

export function Ship() {
  const navigate = useNavigate();
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('prp_test_checklist');
    if (saved) {
      const checked = JSON.parse(saved);
      const passedCount = Object.values(checked).filter(Boolean).length;
      if (passedCount === 10) {
        setLocked(false);
        return;
      }
    }
    // redirect if locked
    navigate('/prp/07-test');
  }, [navigate]);

  if (locked) return null;

  return (
    <PageLayout
      title="Ready to Ship"
      subtitle="KodNest Placement Readiness Platform is fully verified."
      primary={
        <Card className="border-t-4 border-t-kod-success">
          <CardContent className="p-16 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-2">
              <Rocket className="w-10 h-10 text-kod-success" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#111111]">Platform Shipped</h2>
            <p className="text-lg text-gray-600 max-w-lg">
              All 10 tests have passed. The premium experience is solid, offline-capable, and properly handles edge cases. 
            </p>
          </CardContent>
        </Card>
      }
    />
  );
}
