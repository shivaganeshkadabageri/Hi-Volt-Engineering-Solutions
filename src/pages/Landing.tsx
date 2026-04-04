import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Code, Video, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-kod-bg py-24 px-8 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto text-center space-y-6">
            <h1 className="text-5xl font-serif font-bold text-kod-text">Ace Your Placement</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
              Practice, assess, and prepare for your dream job with KodNest Premium's rigorous placement readiness system.
            </p>
            <div className="pt-4">
              <Link to="/dashboard">
                <Button size="lg" className="text-lg">Get Started</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-kod-bg rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-kod-indigo" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">Practice Problems</h3>
                  <p className="text-gray-600 font-sans">Sharpen your DSA and standard interview questions daily.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-kod-bg rounded-lg flex items-center justify-center">
                    <Video className="w-6 h-6 text-kod-indigo" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">Mock Interviews</h3>
                  <p className="text-gray-600 font-sans">Simulate real environments and ace behavioral rounds.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-kod-bg rounded-lg flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-kod-indigo" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">Track Progress</h3>
                  <p className="text-gray-600 font-sans">Visualize readiness scores based on local JD analysis.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8 px-8 text-center text-gray-500 bg-white border-b-2 border-b-kod-red max-h-min">
        <p>© 2026 KodNest. All rights reserved.</p>
      </footer>
    </div>
  );
}
