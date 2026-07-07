import { db } from "../firebase/config";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import {
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function createJourney(journeyData) {
  try {
    const docRef = await addDoc(
      collection(db, "journeys"),
      {
        ...journeyData,
        createdAt: serverTimestamp(),
      }
    );

    return docRef.id;

  } catch (error) {
    throw error;
  }
}

export async function getUserJourneys(uid) {

  const q = query(
    collection(db, "journeys"),
    where("createdBy", "==", uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}