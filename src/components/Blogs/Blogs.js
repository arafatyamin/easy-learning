import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="collapse">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-gray-600 text-primary-content peer-checked:bg-gray-600 peer-checked:text-secondary-content link-hover">
            1.what is cors?
            </div>
            <div className="collapse-content bg-gray-600 text-primary-content peer-checked:bg-gray-500 peer-checked:text-secondary-content"> 
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
            </div>
            </div>
            <br />
            <div className="collapse">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-gray-600 text-primary-content peer-checked:bg-gray-600 peer-checked:text-secondary-content link-hover">
            2.Why are you using firebase? What other options do you have to implement authentication?
            </div>
            <div className="collapse-content bg-gray-600 text-primary-content peer-checked:bg-gray-500 peer-checked:text-secondary-content"> 
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            </div>
            <br />
            <div className="collapse">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-gray-600 text-primary-content peer-checked:bg-gray-600 peer-checked:text-secondary-content link-hover">
            3.How does the private route work?
            </div>
            <div className="collapse-content bg-gray-600 text-primary-content peer-checked:bg-gray-500 peer-checked:text-secondary-content"> 
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            </div>
            <br />
            <div className="collapse">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-gray-600 text-primary-content peer-checked:bg-gray-600 peer-checked:text-secondary-content link-hover">
            4.What is Node? How does Node work?
            </div>
            <div className="collapse-content bg-gray-600 text-primary-content peer-checked:bg-gray-500 peer-checked:text-secondary-content"> 
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;