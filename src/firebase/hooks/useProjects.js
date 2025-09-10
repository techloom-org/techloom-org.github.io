import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { db, storage } from '../config';

// Hook to fetch all projects
export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsRef = collection(db, 'projects');
        const q = query(projectsRef, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);

        const projectsData = [];
        for (const docSnap of querySnapshot.docs) {
          const projectData = { id: docSnap.id, ...docSnap.data() };

          projectsData.push(projectData);
        }

        setProjects(projectsData);
        setError(null);
      } catch (err) {
        console.log('Error fetching projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

// Hook to fetch featured projects only
export const useFeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        setLoading(true);
        const projectsRef = collection(db, 'projects');
        const q = query(projectsRef, where('featured', '==', true), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);

        const projectsData = [];
        for (const docSnap of querySnapshot.docs) {
          const projectData = { id: docSnap.id, ...docSnap.data() };

          projectsData.push(projectData);
        }

        setProjects(projectsData);
        setError(null);
      } catch (err) {
        console.log('Error fetching featured projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return { projects, loading, error };
};

// Hook to fetch a single project by ID
export const useProject = (projectId) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!projectId) {
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      try {
        setLoading(true);
        const projectRef = doc(db, 'projects', projectId);
        const docSnap = await getDoc(projectRef);

        if (docSnap.exists()) {
          const projectData = { id: docSnap.id, ...docSnap.data() };

          // Since images array contains direct links, no need to process them
          // The images array is already available as projectData.images

          setProject(projectData);
          setError(null);
        } else {
          setError('Project not found');
          setProject(null);
        }
      } catch (err) {
        console.log('Error fetching project:', err);
        setError(err.message);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  return { project, loading, error };
};

// Hook to fetch project images/media
export const useProjectMedia = (projectId) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!projectId) {
      setLoading(false);
      return;
    }

    const fetchProjectMedia = async () => {
      try {
        setLoading(true);
        const mediaRef = collection(db, 'projects', projectId, 'media');
        const querySnapshot = await getDocs(mediaRef);

        const mediaData = [];
        for (const docSnap of querySnapshot.docs) {
          const mediaItem = { id: docSnap.id, ...docSnap.data() };

          // Fetch media URL
          if (mediaItem.path) {
            try {
              const mediaFileRef = ref(storage, mediaItem.path);
              mediaItem.url = await getDownloadURL(mediaFileRef);
            } catch (err) {
              console.log(`Failed to load media ${mediaItem.path}:`, err);
              mediaItem.url = null;
            }
          }

          mediaData.push(mediaItem);
        }

        // Sort by order if available, otherwise by creation date
        mediaData.sort((a, b) => {
          if (a.order !== undefined && b.order !== undefined) {
            return a.order - b.order;
          }
          return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
        });

        setMedia(mediaData);
        setError(null);
      } catch (err) {
        console.log('Error fetching project media:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectMedia();
  }, [projectId]);

  return { media, loading, error };
};
