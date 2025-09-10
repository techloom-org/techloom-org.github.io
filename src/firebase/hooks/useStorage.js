import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../config';

// Hook to fetch a single image from Firebase Storage
export const useStorageImage = (imagePath) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imagePath) {
      setLoading(false);
      return;
    }

    const fetchImage = async () => {
      try {
        setLoading(true);
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
        setError(null);
      } catch (err) {
        setError(err.message);
        setImageUrl(null);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imagePath]);

  return { imageUrl, loading, error };
};

// Hook to fetch multiple images from Firebase Storage
export const useStorageImages = (imagePaths = []) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imagePaths || imagePaths.length === 0) {
      setLoading(false);
      setImageUrls([]);
      return;
    }

    const fetchImages = async () => {
      try {
        setLoading(true);
        const imagePromises = imagePaths.map(async (imagePath) => {
          try {
            const imageRef = ref(storage, imagePath);
            const url = await getDownloadURL(imageRef);
            return { path: imagePath, url, error: null };
          } catch (err) {
            return { path: imagePath, url: null, error: err.message };
          }
        });

        const results = await Promise.all(imagePromises);
        setImageUrls(results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setImageUrls([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [imagePaths]);

  return { imageUrls, loading, error };
};
