import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const mockChartData = [
  { subject: 'DSA', A: 75, fullMark: 100 },
  { subject: 'System Design', A: 60, fullMark: 100 },
  { subject: 'Communication', A: 80, fullMark: 100 },
  { subject: 'Resume', A: 85, fullMark: 100 },
  { subject: 'Aptitude', A: 70, fullMark: 100 },
];

export function Dashboard() {
  const readinessScore = 72;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (readinessScore / 100) * circumference;

  return (
    <PageLayout
      title="Dashboard Overview"
      subtitle="Track your overall readiness and performance metrics before navigating to specific tasks."
      actions={
        <Link to="/analyze">
          <Button>Analyze New JD</Button>
        </Link>
      }
      primary={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
          {/* Circular Progress Indicator */}
          <Card className="flex flex-col items-center justify-center p-8 border-t-4 border-t-kod-indigo">
            <h3 className="font-serif text-lg font-bold mb-6 w-full text-center">Overall Readiness</h3>
            <div className="relative w-40 h-40 flex items-center justify-center mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r={radius} stroke="#e5e7eb" strokeWidth="12" fill="transparent" />
                <circle 
                  cx="80" 
                  cy="80" 
                  r={radius} 
                  stroke="hsl(245, 58%, 51%)" 
                  strokeWidth="12" 
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="transition-all duration-1000 ease-in-out"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center inset-0">
                <span className="text-4xl font-bold font-serif">{readinessScore}</span>
                <span className="text-sm text-gray-500 font-medium">/ 100</span>
              </div>
            </div>
            <p className="text-center font-medium text-kod-text text-sm uppercase tracking-wider">Readiness Score</p>
          </Card>

          {/* Radar Chart */}
          <Card className="flex flex-col p-6 min-h-[300px]">
            <CardHeader>
              <CardTitle>Skill Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ResponsiveContainer width="100%" height="100%" minHeight={200}>
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mockChartData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 500 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Student" dataKey="A" stroke="hsl(245, 58%, 51%)" fill="hsl(245, 58%, 51%)" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Activity grid area */}
          <Card className="md:col-span-2">
            <CardHeader className="p-6 pb-2 border-b border-gray-100">
              <CardTitle>Weekly Goals</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-medium text-gray-700">Problems Solved</span>
                    <span className="font-bold text-kod-indigo">12 / 20 <span className="font-normal text-gray-500 text-sm">this week</span></span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-kod-indigo" style={{ width: '60%' }} />
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 lg:pt-0">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((day, i) => (
                    <div key={day} className="flex flex-col items-center gap-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs font-semibold
                        ${[0, 1, 3].includes(i) ? 'bg-kod-indigo text-white border-kod-indigo' : 'border-gray-300 text-gray-400 bg-gray-50'}
                      `}>
                        {day[0]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      }
      secondary={
        <div className="space-y-6">
          <Card>
            <CardHeader className="p-5 pb-0">
              <CardTitle className="text-base text-gray-700">Continue Practice</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-4 space-y-4">
              <p className="font-serif font-bold text-lg leading-snug">Dynamic Programming</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>Progress</span>
                  <span>3 / 10 completed</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-kod-success" style={{ width: '30%' }} />
                </div>
              </div>
              <Button className="w-full mt-2" variant="outline">Continue</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-5 pb-3 border-b border-gray-100">
              <CardTitle className="text-base">Upcoming Assessments</CardTitle>
            </CardHeader>
            <div className="flex flex-col">
              {[
                { title: 'DSA Mock Test', time: 'Tomorrow, 10:00 AM' },
                { title: 'System Design Review', time: 'Wed, 2:00 PM' },
                { title: 'HR Interview Prep', time: 'Friday, 11:00 AM' },
              ].map((item, i) => (
                <div key={i} className="px-5 py-4 border-b border-gray-100 last:border-b-0 space-y-1 hover:bg-gray-50 transition-colors">
                  <p className="font-medium text-[#111111]">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      }
    />
  );
}
