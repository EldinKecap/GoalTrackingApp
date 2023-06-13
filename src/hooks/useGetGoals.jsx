import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../firebase/firebaseDB';

export default function useGetGoals() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [goals, setGoals] = useState([]);
    const [goalsLoading, setGoalsLoading] = useState(false);
    useEffect(() => {
        try {
            setGoalsLoading(true);
            getAuth();
            const goalsList = [];
            const q = query(collection(db, "goals"), where("author", "==", user.email));
            getDocs(q).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.data());
                    goalsList.push({ id: doc.id, ...doc.data() })
                }
                );
                setGoals(goalsList);
            });
        } catch (error) {
            console.log(error);
        }
        setGoalsLoading(false);
    }, []);
    // console.log(goals);

    return [goals , goalsLoading]
    
}
