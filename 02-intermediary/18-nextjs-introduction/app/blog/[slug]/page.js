import * as React from 'react'

export default function BlogPostPage({ params }) {
    // The name of the subfolder, the one between the [ ]
    const { slug } = React.use(params)

    return (
        <main>
            <h1>Blog Post</h1>
            <p>{slug}</p>
        </main>
    )
}