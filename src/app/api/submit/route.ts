import { NextResponse } from "next/server";
import { weatherWidgetFlag } from "../../flags";
import { getProviderData, createFlagsDiscoveryEndpoint } from "flags/next";
import * as flags from "../../flags";

export const GET = createFlagsDiscoveryEndpoint(() => getProviderData(flags));

export async function POST(req: Request) {
  const isFeatureXEnabled =
    process.env.NEXT_PUBLIC_FEATURE_X_ENABLED === "true";
  const isWeatherWidgetEnabled = await weatherWidgetFlag();

  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and Email are required." },
        { status: 400 }
      );
    }

    if (!isFeatureXEnabled) {
      return NextResponse.json(
        { message: "Feature X is disabled" },
        { status: 403 }
      );
    }

    if (!isWeatherWidgetEnabled) {
      return NextResponse.json(
        { message: "Weather Widget feature is disabled" },
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
