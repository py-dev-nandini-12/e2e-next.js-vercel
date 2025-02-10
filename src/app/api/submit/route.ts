import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ message: 'Name and Email are required' }, { status: 400 });
    }

    return NextResponse.json({ message: `Thank you, ${name}!` });
  } catch {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
