import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { BookOpen } from 'lucide-react';

export function Resources() {
  return (
    <PageLayout
      title="Resources library"
      subtitle="Coming soon. Browse curated guides, interview experiences, and templates."
      primary={
        <Card className="min-h-[400px] flex flex-col items-center justify-center bg-gray-50/50">
          <CardContent className="flex flex-col items-center justify-center text-gray-400 space-y-4">
            <BookOpen className="w-16 h-16" />
            <p className="font-serif text-xl font-bold">Resources in Development</p>
            <p className="text-sm font-medium">Check back after shipping sprint!</p>
          </CardContent>
        </Card>
      }
    />
  );
}
