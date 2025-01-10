import { NextResponse } from "next/server";
import PhraseService from "@/app/api/services/phrase_service";


export async function GET(){
    const phraseGet = PhraseService.getPhrase();
    return NextResponse.json({
        message: "Phrase generated",
        phrase: phraseGet
    });
};