import { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';

export const useRatings = (isLoggedIn) => {
  const [ratings, setRatings] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRatings = useCallback(async () => {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }

    try {
      const response = await api.getRatings();
      const ratingsMap = response.data.reduce((acc, rating) => {
        acc[rating.projectId] = {
          votes: rating.votes?.toString() || '',
          interest: rating.interest?.toString() || '',
          comment: rating.comment || ''
        };
        return acc;
      }, {});
      setRatings(ratingsMap);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);

  return { ratings, loading, refresh: fetchRatings };
};
