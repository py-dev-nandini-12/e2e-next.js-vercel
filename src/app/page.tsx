import Link from "next/link";
import { neon } from "@neondatabase/serverless";

export default function Home() {
  async function create(formData: FormData) {
    "use server";
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get("comment");
    // Insert the comment from the form into the Postgres database using tagged template literal
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
  }

  return (
    <div className="container">
      <h1>Welcome to Next.js + Playwright</h1>
      <Link href="/form">Go to Form</Link>
      <form action={create} style={{ marginTop: "2rem" }}>
        <input
          type="text"
          placeholder="write a comment"
          name="comment"
          required
          style={{ marginRight: "0.5rem" }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
