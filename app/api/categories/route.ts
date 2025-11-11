import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const categories = await prisma.categories.findMany();
    return NextResponse.json(categories);
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    const categories = await prisma.categories.create({
        data
    });

    return NextResponse.json(categories)
}