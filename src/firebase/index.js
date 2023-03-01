import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgJbltHZWjQfPuGPjy99_IqPbKKFPRh-k",
    authDomain: "mytodolist-c8819.firebaseapp.com",
    projectId: "mytodolist-c8819",
    storageBucket: "mytodolist-c8819.appspot.com",
    messagingSenderId: "993897420093",
    appId: "1:993897420093:web:3e62c7e4635d4665496154"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}