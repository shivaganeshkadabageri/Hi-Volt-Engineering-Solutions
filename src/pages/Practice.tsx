import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Dumbbell } from 'lucide-react';

export function Practice() {
  return (
    <PageLayout
      title="Practice Area"
      subtitle="Coming soon. This module will hold interactive DSA & Core CS problems."
      primary={
        <Card className="min-h-[400px] flex flex-col items-center justify-center bg-gray-50/50">
          <CardContent className="flex flex-col items-center justify-center text-gray-400 space-y-4">
            <Dumbbell className="w-16 h-16" />
            <p className="font-serif text-xl font-bold">Practice Module in Development</p>
            <p className="text-sm font-medium">Check back after shipping sprint!</p>
          </CardContent>
        </Card>
      }
    />
  );
}
