import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Landing } from '@/pages/Landing';
import { Dashboard } from '@/pages/Dashboard';
import { Analyze } from '@/pages/Analyze';
import { Results } from '@/pages/Results';
import { History } from '@/pages/History';
import { TestChecklist } from '@/pages/TestChecklist';
import { Ship } from '@/pages/Ship';
import { Practice } from '@/pages/Practice';
import { Assessments } from '@/pages/Assessments';
import { Resources } from '@/pages/Resources';
import { Profile } from '@/pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* App Shell Routes */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/results" element={<Results />} />
          <Route path="/history" element={<History />} />
          <Route path="/prp/07-test" element={<TestChecklist />} />
          <Route path="/prp/08-ship" element={<Ship />} />
          
          {/* Valid routes mapped to Placeholders */}
          <Route path="/practice" element={<Practice />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
