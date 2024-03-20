import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { router } from "@inertiajs/react";

export default function Index({ posts }) {
    //passed prop (getting it from controller)

    function deletePost(id) {
        router.delete(`/post/${id}`);
    }

    return (
        <Layout>
            <div className="flex justify-center text-3xl font-bold py-4">
                <h1>My Blog</h1>
            </div>
            <hr />
            <div className="grid grid-cols-4 px-4 py-2 gap-4">
                {posts && //if exist map over it
                    posts.map((item) => (
                        <div className="border border-black rounded-md shadow-md px-4 py-2 hover:bg-gray-100 transition-colors duration-300 relative">
                            <Link href={`/post/${item.id}`} key={item.id}>
                                <h2 className="font-semibold text-lg border-b border-black leading-8">
                                    {item.title}
                                </h2>
                            </Link>
                            <p className="text-justify mt-3 mb-8 border-b border-black">
                                {item.body}
                            </p>
                            <div className="flex">
                                <button
                                    className="flex text-red-600 font-bold text-2xl absolute bottom-1 right-4"
                                    onClick={() => deletePost(item.id)}
                                >
                                    <DeleteIcon />
                                </button>
                                <button className="flex text-gray-600 font-bold text-2xl absolute bottom-1 left-4">
                                    <Link href={`/post/${item.id}/edit`}>
                                        <EditIcon />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </Layout>
    );
}
