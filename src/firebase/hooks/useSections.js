import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config';

// Hook to fetch sections for a specific project
export const useProjectSections = (projectId) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSections = async () => {
      if (!projectId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const sectionsRef = collection(db, 'projects', projectId, 'sections');
        const q = query(sectionsRef, orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);

        const sectionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSections(sectionsData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [projectId]);

  return { sections, loading, error };
};
