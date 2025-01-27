import React from 'react';
import styles from './ProjectTable.module.css';

const ProjectTable = ({ projects, onRate, isLoggedIn }) => (
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
                <button onClick={() => onRate(project)}>Hodnotit</button>
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

export default ProjectTable;
