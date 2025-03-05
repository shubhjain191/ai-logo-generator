import { AIDesignIdea } from "@/configs/AIModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {prompt} = await req.json();

    try {
         const result = await AIDesignIdea.sendMessage(prompt)
         return NextResponse.json(JSON.parse(result.response.text())) 
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}
