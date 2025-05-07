import type { NextConfig } from "next";
import withVercelToolbar from "@vercel/toolbar/plugins/next";

const toolbar = withVercelToolbar();
/* config options here */

const nextConfig: NextConfig = {};

export default toolbar(nextConfig);
