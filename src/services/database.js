import { db } from "../firebase/config";

import {
    doc,
    setDoc,
    getDoc
} from "firebase/firestore";

export async function createUserProfile(user, name) {

    await setDoc(doc(db, "users", user.uid), {

        uid: user.uid,

        name: name,

        username: "",

        email: user.email,

        bio: "",

        avatar: "",

        banner: "",

        followers: [],

        following: [],

        journeys: [],

        achievements: [],

        joinedAt: new Date()

    });

}

export async function getUserProfile(uid){

    const snap = await getDoc(doc(db,"users",uid));

    return snap.data();

}