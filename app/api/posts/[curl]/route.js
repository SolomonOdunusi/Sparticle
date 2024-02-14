import prisma from "@/utils/connect";
import { NextResponse } from "next/server"


// Posts
export const GET = async (req, {params}) => {

    const {curl} = params

    try {
        const post = await prisma.post.update({
            where: {curl},
            data: { views: { increment: 1 } },
            include: {user: true}
        })
        return new NextResponse(JSON.stringify(post, { status: 200}));
        // return the post and count

    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ message: "Internal Server Error" }, { status: 500})
        );
    }
}