// Canvas-style sidebar for main pages
function MainSidebar() {
  return (
    <aside className="main-sidebar">
      <nav>
        <ul>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/assignments">Assignments</Link></li>
          <li><Link to="/discussions">Discussions</Link></li>
          <li><Link to="/office-hours">Office Hours</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

function CoursesPage() {
  return (
    <div className="main-page-layout">
      <MainSidebar />
      <div className="main-page-content"><h2>Courses</h2><p>List of courses will appear here.</p></div>
    </div>
  );
}

function AssignmentsPage() {
  return (
    <div className="main-page-layout">
      <MainSidebar />
      <div className="main-page-content"><h2>Assignments</h2><p>Assignments will be shown here.</p></div>
    </div>
  );
}

function DiscussionsPage() {
  return (
    <div className="main-page-layout">
      <MainSidebar />
      <div className="main-page-content"><h2>Discussions</h2><p>Discussion threads will be shown here.</p></div>
    </div>
  );
}

function OfficeHoursPage() {
  return (
    <div className="main-page-layout">
      <MainSidebar />
      <div className="main-page-content"><h2>Office Hours</h2><p>Office hours and scheduling will be shown here.</p></div>
    </div>
  );
}
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="site-title">Physassist</h1>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/discussions">Discussions</Link>
        <Link to="/office-hours">Office Hours</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="home-container dark-bg">
      <div className="sci-hero">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="38" stroke="#4fc3f7" strokeWidth="3" fill="#23263a" />
          <path d="M20 60 Q40 20 60 60" stroke="#fff" strokeWidth="2" fill="none" />
          <circle cx="40" cy="40" r="6" fill="#4fc3f7" />
        </svg>
        <h2 className="sci-title">Welcome to Physassist</h2>
        <p className="sci-desc">A modern platform for learning physics and mathematics.<br/>Select a module to begin.</p>
      </div>
      <div className="module-cards">
        <ModuleCard
          title="Classical Mechanics"
          description="Explore Newtonian mechanics, motion, forces, and energy."
          to="/classical-mechanics"
        />
        <ModuleCard
          title="Calculus"
          description="Learn about limits, derivatives, integrals, and their applications."
          to="/calculus"
        />
      </div>
    </div>
  );
}

function ModuleCard({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <Link to={to} className="module-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Enter</button>
    </Link>
  );
}

function ModuleLayout({ title, children }: { title: string; children: React.ReactNode }) {
  const location = useLocation();
  const basePath = location.pathname.split("/")[1];
  return (
    <div className="module-layout">
      <aside className="sidebar">
        <h2>{title}</h2>
        <nav>
          <ul>
            <li><Link to={`/${basePath}/courses`}>Courses</Link></li>
            <li><Link to={`/${basePath}/assignments`}>Assignments</Link></li>
            <li><Link to={`/${basePath}/discussions`}>Discussions</Link></li>
            <li><Link to={`/${basePath}/office-hours`}>Office Hours</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="module-content">{children}</main>
    </div>
  );
}

function ClassicalMechanics() {
  return (
    <ModuleLayout title="Classical Mechanics">
      <p>Content for the Classical Mechanics module will go here.</p>
    </ModuleLayout>
  );
}

function Calculus() {
  return (
    <ModuleLayout title="Calculus">
      <p>Content for the Calculus module will go here.</p>
    </ModuleLayout>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/discussions" element={<DiscussionsPage />} />
        <Route path="/office-hours" element={<OfficeHoursPage />} />
        <Route path="/classical-mechanics/*" element={<ClassicalMechanics />} />
        <Route path="/calculus/*" element={<Calculus />} />
      </Routes>
    </Router>
  );
}

export default App;
