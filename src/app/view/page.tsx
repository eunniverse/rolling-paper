import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ViewPage() {
    const { data: messages, error } = useSWR('/api/messages', fetcher);

    if (error) return <div>Error loading messages.</div>;
    if (!messages) return <div>Loading...</div>;

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">View Rolling Paper</h1>
            {messages.map((msg: { id: string; text: string }) => (
                <div key={msg.id} className="p-2 bg-white border rounded mb-2">
                    {msg.text}
                </div>
            ))}
        </div>
    );
}
