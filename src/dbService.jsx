import { db } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  onSnapshot,
  deleteDoc
} from 'firebase/firestore';

// Function to add a new itinerary
export async function addItinerary(itinerary) {
  await addDoc(collection(db, 'itineraries'), itinerary);
}

// Function to update an existing itinerary step
export async function updateItineraryStep(id, updatedStep) {
  const itineraryDoc = doc(db, 'itineraries', id);
  await updateDoc(itineraryDoc, { itinerary: updatedStep });
}

// Function to fetch itineraries for a user
export function getItineraries(userId, callback) {
  const q = query(collection(db, 'itineraries'), where('userId', '==', userId));
  onSnapshot(q, (querySnapshot) => {
    const itineraries = [];
    querySnapshot.forEach((doc) => {
      itineraries.push({ ...doc.data(), id: doc.id });
    });
    callback(itineraries);
  });
}

// Function to delete an itinerary step
export async function deleteItineraryStep(id) {
  const itineraryDoc = doc(db, 'itineraries', id);
  await deleteDoc(itineraryDoc);
}
export default db;






