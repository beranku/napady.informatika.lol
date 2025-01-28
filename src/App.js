import React, { useState } from 'react';
import ProjectTable from './components/ProjectTable';
import UserMenu from './components/UserMenu';
import { useProjects } from './hooks/useProjects';
import { useAuth } from './contexts/AuthContext';
import { api } from './services/api';
import styles from './App.module.css';

const App = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { user, loading: authLoading } = useAuth();
  const [submitMessage, setSubmitMessage] = useState('');

  if (authLoading || projectsLoading) {
    return <p>Načítání informací...</p>;
  }

  const handleRatingSubmit = async (projectData) => {
    try {
      const ratingData = {
        ...projectData
      };
      await api.submitRating(ratingData);
      setSubmitMessage('Hodnocení bylo úspěšně uloženo');
    } catch (error) {
      setSubmitMessage('Chyba při ukládání hodnocení');
    }
  };

  return (
    <div className={styles.container}>
      <UserMenu nickname={user?.nickname} />
      <h1>Seznam nápadů | <a href='https://forms.gle/NYjJ4MjJJ4UG7FkB8'>Přidat nový</a></h1>
      
      <ProjectTable 
        projects={projects} 
        onRate={handleRatingSubmit}
        isLoggedIn={!!user?.nickname} 
      />

      {submitMessage && (
        <p className={styles.message}>{submitMessage}</p>
      )}
    </div>
  );
};

export default App;