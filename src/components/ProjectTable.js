import React, { useState } from 'react';
import styles from './ProjectTable.module.css';

const ProjectTable = ({ projects, onRate, isLoggedIn }) => {
  const [ratings, setRatings] = useState({});

  const handleSubmit = (e, project) => {
    e.preventDefault();
    const rating = ratings[project.row_number];
    if (rating) {
      onRate({
        projectId: project.row_number,
        emojis: rating,
        name: project["Název"]
      });
      setRatings(prev => ({ ...prev, [project.row_number]: '' }));
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Datum</th>
          <th>Název</th>
          <th>Popis problému</th>
          <th>Popis řešení</th>
          {isLoggedIn && <th>Akce</th>}
        </tr>
      </thead>
      <tbody>
        {projects.length > 0 ? (
          projects.map((project) => (
            <tr key={project.row_number || Math.random()}>
              <td>{project.row_number || '-'}</td>
              <td>{project["Časová značka"] || '-'}</td>
              <td>{project["Název"] || '-'}</td>
              <td>{project["Popis problému"] || '-'}</td>
              <td>{project["Popis řešení"] || '-'}</td>
              {isLoggedIn && (
                <td>
                  <form onSubmit={(e) => handleSubmit(e, project)} style={{ display: 'flex', gap: '4px' }}>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      value={ratings[project.row_number] || ''}
                      onChange={(e) => setRatings(prev => ({ 
                        ...prev, 
                        [project.row_number]: e.target.value 
                      }))}
                      style={{ width: '50px' }}
                    /><span>⭐️</span>
                    <button type="submit">OK</button>
                  </form>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={isLoggedIn ? 6 : 5}>Žádné nápady k zobrazení</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProjectTable;
