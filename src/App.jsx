// Tailwind handles global styles via index.css
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import styled from 'styled-components'
import InvestorDashboard from './components/investor/InvestorDashboard.jsx'
import FarmerDashboard from './components/farmer/FarmerDashboard.jsx'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ProjectList from './components/projects/ProjectList.jsx'
import ProjectDetail from './components/projects/ProjectDetail.jsx'
import Chat from './components/chat/Chat.jsx'

const Page = styled.main`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px 16px;
  background: linear-gradient(to bottom, #FFF8F0 0%, #FFFFFF 100%);
  min-height: calc(100vh - 64px);
`;

function App() {
  const location = useLocation();
  useEffect(() => {
    // Scroll to top on route change for mobile UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Navigate to="/projects" replace />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/investor" element={<InvestorDashboard />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/investor" replace />} />
        </Routes>
      </Page>
    </>
  )
}

export default App
