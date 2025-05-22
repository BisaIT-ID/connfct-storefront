interface PersonalizationData {
  productId: string;
  logoFile: File;
  logoName: string;
  previewUrl?: string;
  timestamp: number;
}

// Database configuration
const DB_NAME = "personalization-storage";
const DB_VERSION = 1;
const STORE_NAME = "personalization-data";

/**
 * Opens the IndexedDB database for personalization data
 */
const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        // Create a store with productId as key path
        db.createObjectStore(STORE_NAME, { keyPath: "productId" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/**
 * Stores personalization data for a product
 * @param productId - The ID of the product being personalized
 * @param logoFile - The uploaded logo file
 * @param logoName - The name given to the logo
 * @returns Promise that resolves when data is stored successfully
 */
export const storePersonalizationData = async (
  productId: string,
  logoFile: File,
  logoName: string
): Promise<void> => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    // Create preview URL for the image
    const previewUrl = URL.createObjectURL(logoFile);

    const data: PersonalizationData = {
      productId,
      logoFile,
      logoName,
      previewUrl,
      timestamp: Date.now(),
    };

    return new Promise((resolve, reject) => {
      const request = store.put(data); // put will update if exists, add if not

      request.onsuccess = () => {
        db.close();
        resolve();
      };

      request.onerror = () => {
        db.close();
        reject(request.error);
      };
    });
  } catch (error) {
    console.error("Error storing personalization data:", error);
    throw error;
  }
};

/**
 * Retrieves personalization data for a specific product
 * @param productId - The ID of the product
 * @returns The personalization data or null if not found
 */
export const getPersonalizationData = async (
  productId: string
): Promise<PersonalizationData | null> => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.get(productId);

      request.onsuccess = () => {
        db.close();
        resolve(request.result || null);
      };

      request.onerror = () => {
        db.close();
        reject(request.error);
      };
    });
  } catch (error) {
    console.error("Error retrieving personalization data:", error);
    return null;
  }
};

/**
 * Checks if personalization data exists for a specific product
 * @param productId - The ID of the product
 * @returns Whether personalization data exists for the product
 */
export const hasPersonalizationData = async (
  productId: string
): Promise<boolean> => {
  const data = await getPersonalizationData(productId);
  return data !== null;
};

/**
 * Removes personalization data for a specific product
 * @param productId - The ID of the product
 */
export const removePersonalizationData = async (
  productId: string
): Promise<void> => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.delete(productId);

      request.onsuccess = () => {
        db.close();
        resolve();
      };

      request.onerror = () => {
        db.close();
        reject(request.error);
      };
    });
  } catch (error) {
    console.error("Error removing personalization data:", error);
    throw error;
  }
};

/**
 * Lists all stored product personalization data
 * @returns Array of all personalization data entries
 */
export const getAllPersonalizationData = async (): Promise<
  PersonalizationData[]
> => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.getAll();

      request.onsuccess = () => {
        db.close();
        resolve(request.result || []);
      };

      request.onerror = () => {
        db.close();
        reject(request.error);
      };
    });
  } catch (error) {
    console.error("Error retrieving all personalization data:", error);
    return [];
  }
};
