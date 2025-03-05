import { NextResponse } from "next/server";
import { db } from "@/configs/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function POST(req) {
    try {
        const { userEmail, userName } = await req.json();
        
        // Check if user exists
        const docRef = doc(db, "users", userEmail);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // Return existing user data
            return NextResponse.json({
                success: true,
                message: "User exists",
                data: docSnap.data()
            });
        } else {
            // Create new user data
            const userData = {
                name: userName,
                email: userEmail,
                credits: 5,
                createdAt: new Date().toISOString()
            };

            // Save new user
            await setDoc(docRef, userData);

            return NextResponse.json({
                success: true,
                message: "User created successfully",
                data: userData
            });
        }
    } catch (error) {
        console.error("Error in users route:", error);
        return NextResponse.json(
            { 
                success: false, 
                message: error.message 
            }, 
            { status: 500 }
        );
    }
}