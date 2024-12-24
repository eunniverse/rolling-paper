import { v4 as uuidv4 } from 'uuid';

let messages: { id: string; text: string }[] = [];

export async function GET() {
    return new Response(JSON.stringify(messages), { status: 200 });
}

export async function POST(req: Request) {
    const { text } = await req.json();
    const newMessage = { id: uuidv4(), text };
    messages.push(newMessage);
    return new Response(JSON.stringify(newMessage), { status: 201 });
}
