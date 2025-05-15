import { NextResponse } from "next/server";
// import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and Email are required" },
        { status: 400 }
      );
    }

    // No database insertion here, just respond
    return NextResponse.json({
      message: `Hello ${name}, your form has been submitted successfully!`,
    });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
