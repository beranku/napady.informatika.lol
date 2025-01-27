import React, { useState } from 'react';
import ProjectTable from './components/ProjectTable';
import RatingForm from './components/RatingForm';
import UserMenu from './components/UserMenu';
import { useProjects } from './hooks/useProjects';
import { useAuth } from './contexts/AuthContext';
import { api } from './services/api';
import styles from './App.module.css';

const App = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { user, loading: authLoading } = useAuth();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  if (authLoading || projectsLoading) {
    return <p>Načítání informací...</p>;
  }

  const handleRatingSubmit = async (values, { setSubmitting }) => {
    try {
      await api.submitRating(values);
      setSubmitMessage('Hodnocení bylo úspěšně uloženo');
      setShowForm(false);
    } catch (error) {
      setSubmitMessage('Chyba při ukládání hodnocení');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <UserMenu nickname={user?.nickname} />
      <h1>Seznam nápadů</h1>
      
      <ProjectTable 
        projects={projects} 
        onRate={project => {
          setSelectedProject(project);
          setShowForm(true);
        }}
        isLoggedIn={!!user?.nickname} 
      />

      {showForm && selectedProject && (
        <RatingForm
          project={selectedProject}
          userData={user}
          onSubmit={handleRatingSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      {submitMessage && (
        <p className={styles.message}>{submitMessage}</p>
      )}
    </div>
  );
};

export default App;