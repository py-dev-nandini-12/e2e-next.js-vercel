import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const isFeatureXEnabled =
    process.env.NEXT_PUBLIC_FEATURE_X_ENABLED === "true";

  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and Email are required" },
        { status: 400 }
      );
    }

    if (!isFeatureXEnabled) {
      return NextResponse.json(
        { message: "Feature X is disabled" },
        { status: 403 }
      );
    }

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
