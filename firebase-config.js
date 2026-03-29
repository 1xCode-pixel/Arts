// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC_ztsyKmGRriSJ_iJlgTJCUq_AvxOqHOM",
    authDomain: "lilyshelte.firebaseapp.com",
    projectId: "lilyshelte",
    storageBucket: "lilyshelte.firebasestorage.app",
    messagingSenderId: "778800933672",
    appId: "1:778800933672:web:c8be45ac174157254bfe1d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
