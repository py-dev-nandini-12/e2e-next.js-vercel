import { verifyAccess, type ApiData } from "flags";
import { createFlagsDiscoveryEndpoint, getProviderData } from "flags/next";
import { type NextRequest } from "next/server";
import * as flags from "../../../../flags";

export const GET = createFlagsDiscoveryEndpoint(
  async (request: NextRequest) => {
    const access = await verifyAccess(request.headers.get("Authorization"));
    if (!access) {
      return null;
    }
    const providerData: ApiData = getProviderData(flags);
    // return the ApiData directly, without a NextResponse.json object.
    return providerData;
  }
);
