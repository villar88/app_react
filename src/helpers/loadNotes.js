import { app } from "../firebase/firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export const loadNotes = async ( uid ) => {
    const querySnapshot = await getDocs(collection(db, `${uid}/journal/notes`));
    const notes = [];

    querySnapshot.forEach((doc) => {
        notes.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return notes;
      
}