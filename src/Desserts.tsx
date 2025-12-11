"use client";

import { use } from "react"

export default function Desserts({ dessertsPromise }: { dessertsPromise: Promise<Data[]> }) {

    const desserts = use(dessertsPromise)

    return <ul>
        {desserts.map((item => <li key={item.name}>{item.name}</li>))}
    </ul>
}