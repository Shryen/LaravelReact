import React from "react";
import { router } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
export default function Edit({ post }) {
    const [values, setValuse] = React.useState({
        title: post.title,
        body: post.body,
    });

    function handleChange(e) {
        const key = e.target.id; //set key
        const value = e.target.value; //set value
        setValuse({
            //store it in the state
            ...values,
            [key]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.put(`/post/${post.id}`, values); // edit the correct post
    }

    return (
        <Layout>
            <h1 className="flex justify-center font-bold text-3xl">
                Create Post
            </h1>
            <hr />
            <form
                onSubmit={handleSubmit}
                method="post"
                className="flex flex-col"
            >
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="Title"
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                />
                <label htmlFor="body">Body</label>
                <textarea
                    name="body"
                    id="body"
                    value={values.body}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                ></textarea>
                <button
                    className="bg-blue-500 w-fit px-4 py-2 text-xl text-white rounded-md shadow-md mx-auto mt-5 hover:bg-blue-700 transition-colors duration-300"
                    type="submit"
                >
                    Update
                </button>
            </form>
        </Layout>
    );
}
