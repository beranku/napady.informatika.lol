import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../validation/ratingSchema';
import styles from './RatingForm.module.css';

const RatingForm = ({ project, userData, onSubmit, onClose }) => (
  <>
    <div className={styles.modal}>
      <h2>Hodnotit projekt: {project["Název"]}</h2>
      <Formik
        initialValues={{
          emojis: "",
          name: userData.name || "",
          projectId: project.id,
        }}
        validationSchema={validationSchema(userData.emojiLimit)}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Form fields */}
          </Form>
        )}
      </Formik>
    </div>
    <div className={styles.overlay} onClick={onClose} />
  </>
);

export default RatingForm;
