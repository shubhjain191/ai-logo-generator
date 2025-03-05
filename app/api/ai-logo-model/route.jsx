import { AILogoPrompt } from "@/configs/AIModel";
import { NextResponse } from "next/server";
import axios from "axios";
import { db } from "@/configs/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function POST(req) {
    const { prompt, email, title, desc } = await req.json();

    try {
        // Generate AI text prompt for logo

        const AiPromptResult = await AILogoPrompt.sendMessage(prompt);
        console.log(JSON.parse(AiPromptResult.response.text()))
        const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt

        const response = await axios.post('https://router.huggingface.co/hf-inference/models/strangerzonehf/Flux-Midjourney-Mix-LoRA',
            AIPrompt,
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    "Content-Type": "application/json",
                },

                responseType: 'arraybuffer'
            }
        )

        //Convert to BASE64 Image

        const buffer = Buffer.from(response.data, "binary")
        const base64Image = buffer.toString("base64")

        const base64ImageWithMime = `data:image/png;base64,${base64Image}`

        console.log(base64ImageWithMime)

        //Save to Firebase Storage
        try {
            await setDoc(doc(db, "users", email, "logos", Date.now().toString()), {
                image: base64ImageWithMime,
                title: title,
                desc: desc,
            })
        } catch (error) {
            
        }


        return NextResponse.json({ image: base64ImageWithMime })




        //AI logo Image Modal


    } catch (error) {
        return NextResponse.json({ error: error.message })
    }
}