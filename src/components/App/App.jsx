import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import WeatherPage from '../WeatherPage/WeatherPage';
import GuidesGrid from '../GuidesGrid/GuidesGrid';
import GuideChapada from '../GuideChapada/GuideChapada';
import GuideSardegna from '../GuideSardegna/GuideSardegna';
import GuideNomadismo from '../GuideNomadismo/GuideNomadismo';
import NotFound from '../NotFound/NotFound';
import AuthModal from '../AuthModal/AuthModal';
import Preloader from '../Preloader/Preloader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenAuthModal = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = () => setIsAuthModalOpen(false);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="sn-app">
      <Header onCommunityClick={handleOpenAuthModal} />
      <Routes>
        <Route path="/" element={<Main onJoinClick={handleOpenAuthModal} />} />
        <Route path="/clima" element={<WeatherPage />} />
        <Route path="/guias" element={<GuidesGrid />} />
        <Route path="/guias/chapada" element={<GuideChapada />} />
        <Route path="/guias/sardegna" element={<GuideSardegna />} />
        <Route path="/guias/nomadismo" element={<GuideNomadismo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {isAuthModalOpen && <AuthModal onClose={handleCloseAuthModal} />}
    </div>
  );
}

export default App;
