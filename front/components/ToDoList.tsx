'use client'

import {trpc} from "@app/_trpc/client";
import {useState} from "react";

export const ToDoList = () => {
    const getTodos = trpc.getBuckets.useQuery();
    const addBucket = trpc.addBucket.useMutation({
        onSettled:async () => {
            await getTodos.refetch()
        }
    });
    const [bucket, setBucket] = useState<{ name: string }>({
        name: ''
    })

    return (
        <div>
            <div className="text-black my-5 text-3xl">
                {getTodos?.data?.map((todo) => (
                    <div key={todo._id} className="flex gap-3 items-center">
                        <input
                            id={`check-${todo._id}`}
                            type="checkbox"
                            checked={!!todo.done}
                            style={{ zoom: 1.5 }}
                            // onChange={async () => {
                            //     setDone.mutate({
                            //         id: todo.id,
                            //         done: todo.done ? 0 : 1,
                            //     });
                            // }}
                        />
                        <label htmlFor={`check-${todo._id}`}>{todo.name}</label>
                    </div>
                ))}
            </div>
            <div className="flex gap-3 items-center">
                <label htmlFor="content">Content</label>
                <input
                    id="content"
                    value={bucket.name}
                    onChange={(e) => setBucket({name: e.target.value})}
                    className="flex-grow text-black bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2"
                />
                <button
                    onClick={async () => {
                        if (bucket.name.length) {
                            addBucket.mutate(bucket.name);
                            setBucket({name: ''});
                        }
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
}