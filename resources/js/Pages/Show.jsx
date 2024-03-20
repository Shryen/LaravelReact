import React from "react";
import Layout from "../Layouts/Layout";

export default function Show({ post }) {
    return (
        <Layout>
            <div className="min-h-96">
                <h1 className="flex justify-center text-3xl font-bold pb-4">
                    {post.title}
                </h1>
                <hr />
                <p>{post.body}</p>
            </div>
        </Layout>
    );
}
