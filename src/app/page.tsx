import { weatherWidgetFlag } from "./flags";

export default async function Page() {
  const weather = await weatherWidgetFlag();

  return <div>{weather ? "Flag is on" : "Flag is off"}</div>;
}
