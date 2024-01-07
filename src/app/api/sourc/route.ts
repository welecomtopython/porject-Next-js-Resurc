import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import creatRusorc from "@/app/validtionSchema";

export async function POST(request:NextRequest){
    const body =await request.json()
    const validtion=creatRusorc.safeParse(body)
    // console.log(validtion.success)
    if (!validtion.success)
        // console.log('erorrrrrrrrrrrrr')
        return NextResponse.json(validtion.error.errors,{status:400})

    const newresors=await prisma.src.create({
        data :{ name :body.name ,link:body.link,description:body.description,}
        
    })
    

}