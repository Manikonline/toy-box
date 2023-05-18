

import './Blog.css'

const Blog = () => {
    return (
        <div className=''>
        <p className='text-center f-ask-q font-bold text-3xl m-10 '>Here are some frequently asked question</p>
            <div>
                <div className='grid xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
                    <div className="card edit-card w-100  ">
                        <div className="card-body">
                            <h2 className="card-title">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                            <p className='text-gray-400'>
                                An access token is a credential that represents the authorization granted to a client application to access specific resources on behalf of a user. A refresh token is used to obtain a new access token without requiring the user to re-authenticate. Both tokens should be securely stored on the client-side, such as in an HTTP-only cookie or secure storage mechanisms like the browser's localStorage or mobile keychain. </p>

                        </div>
                    </div>
                </div>

                <div className='grid xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
                    <div className="card edit-card w-100  ">
                        <div className="card-body">
                            <h2 className="card-title">2. Compare SQL and NoSQL databases?</h2>
                            <p className='text-gray-400'>
                                SQL databases are table-based, enforce strict schema, and are suitable for complex queries. NoSQL databases are schema-less, flexible, and designed for horizontal scalability, handling unstructured data, and providing eventual consistency with CAP theorem trade-offs.</p>

                        </div>
                    </div>
                </div>

                <div className='grid xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
                    <div className="card edit-card w-100  ">
                        <div className="card-body">
                            <h2 className="card-title">3. What is express js? What is Nest JS ?</h2>
                            <p className='text-gray-400'>
                                Express.js is a minimalistic web application framework for Node.js, providing a lightweight set of features for building web applications and APIs.

                                Nest.js is a TypeScript-based framework built on Express.js, offering a modular and structured approach to building scalable server-side applications. It provides features like dependency injection and powerful modules, suitable for complex and enterprise-level applications. </p>

                        </div>
                    </div>
                </div>

                <div className='grid xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
                    <div className="card edit-card w-100  ">
                        <div className="card-body">
                            <h2 className="card-title">4. What is MongoDB aggregate and how does it work ?</h2>
                            <p className='text-gray-400'>
                            In MongoDB, the aggregate function is used for performing advanced data aggregation operations. It allows  to process and transform documents within a collection using a pipeline of stages. Each stage performs a specific operation, such as filtering, grouping, sorting, or computing aggregates. The pipeline consists of multiple stages that are applied sequentially to the input documents, resulting in a computed output based on the specified operations. It enables complex data manipulations and allows for efficient aggregation of large datasets. </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;