import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { FileText } from 'lucide-react';

export function Assessments() {
  return (
    <PageLayout
      title="Assessments"
      subtitle="Coming soon. Participate in timed mock tests based on company filters."
      primary={
        <Card className="min-h-[400px] flex flex-col items-center justify-center bg-gray-50/50">
          <CardContent className="flex flex-col items-center justify-center text-gray-400 space-y-4">
            <FileText className="w-16 h-16" />
            <p className="font-serif text-xl font-bold">Assessments in Development</p>
            <p className="text-sm font-medium">Check back after shipping sprint!</p>
          </CardContent>
        </Card>
      }
    />
  );
}
