import fetch from 'cross-fetch';
import dotenv from 'dotenv';
import type { About } from '../common/types';

dotenv.config();

function hello(n: string): string {
    return `Hello ${n}!`;
}

function api<T>(url: string): Promise<T> {
    return fetch(url)
        .then(res => res.json())
        .then(data => data as T)
        .catch(err => { throw new Error(err); });
}

async function main() {
    console.log(hello("world"));
    const port = process.env.PORT ?? 4000;
    const data = await api<About>(`http://localhost:${port}/api/v1/about`);
    console.log(`${data.name} ${data.version}`);
}

main().catch(console.error);