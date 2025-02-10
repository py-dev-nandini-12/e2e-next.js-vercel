import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(req) {
  const payload = await req.json();

  if (payload.type === "deployment-ready") {
    const deploymentUrl = payload.payload.url;
    console.log(`✅ Deployment Ready: ${deploymentUrl}`);

    exec(`./run-tests.sh ${deploymentUrl}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`❌ Tests Failed for ${deploymentUrl}`);
        console.error(stderr);
        return NextResponse.json(
          { message: "Tests failed", error: stderr },
          { status: 500 }
        );
      }

      console.log(`✅ Tests Passed for ${deploymentUrl}`);
      console.log(stdout);
      return NextResponse.json(
        { message: "Tests passed", output: stdout },
        { status: 200 }
      );
    });
  } else {
    return NextResponse.json(
      { message: "Unsupported event type" },
      { status: 400 }
    );
  }
}
