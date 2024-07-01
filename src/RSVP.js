import React from "react";
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsCeDTLds_RmQFi1adMt_XeHzR_UP4ERQ",
    authDomain: "wedding-website-4ffa5.firebaseapp.com",
    projectId: "wedding-website-4ffa5",
    storageBucket: "wedding-website-4ffa5.appspot.com",
    messagingSenderId: "659690263684",
    appId: "1:659690263684:web:8e47f637fa8e7600c31ed1",
    measurementId: "G-NLB172MZ88"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

function RSVP() {
    return (
        <>
            <div className="header">
                <h1>RSVP</h1>
            </div>
        </>
    );
}

export default RSVP;