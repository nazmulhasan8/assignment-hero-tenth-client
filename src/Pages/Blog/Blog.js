import 'bootstrap/dist/css/bootstrap.css';

const Blog = () => {
    return (
        <div>
        <div className="w-100 my-5 mt-6">
        {/* <!-- blogs start --> */}
        <div className="courses-all w-100 my-5 py-5">
          <div className="container text-center my-5" id="courses">
            <h2 className="py-2">All The Blog Post</h2>
            <div className="course row g-4 categories">
              {/* <!-- single blog1 --> */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className="border rounded-3 d-lg-flex d-md-flex align-items-center justify-content-around"
                >
                  <div className="card-body text-start px-3">
                    <h4 className="title">
                    1. what is cors in express?
                    </h4>
                    <p className="card-text">
                    CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.This module supports validating the origin dynamically using a function provided to the origin option. This function will be passed a string that is the origin (or undefined if the request has no origin), and a callback with the signature callback(error, origin).The origin argument to the callback can be any value allowed for the origin option of the middleware, except a function. See the configuration options section for more information on all the possible value types.This function is designed to allow the dynamic loading of allowed origin(s) from a backing datasource, like a database.Certain CORS requests are considered ‘complex’ and require an initial OPTIONS request (called the “pre-flight request”). An example of a ‘complex’ CORS request is one that uses an HTTP verb other than GET/HEAD/POST (such as DELETE) or that uses custom headers. To enable pre-flighting, you must add a new OPTIONS handler for the route you want to support.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- single blog2 --> */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className="border rounded-3 d-lg-flex d-md-flex align-items-center justify-content-around"
                >
                  <div className="card-body text-start px-3">
                    <h4 className="title">
                      2. Why are you using firebase? What other options do you have to implement authentication?
                    </h4>
                    <p className="card-text">
                    Most appsneed to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- single blog3 --> */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className="border rounded-3 d-lg-flex d-md-flex align-items-center justify-content-around"
                >
                  <div className="card-body text-start px-3">
                    <h4 className="title">
                      3. How does the private route work?
                    </h4>
                    <p className="card-text">
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).Here we have wrapped non authenticated routes with PublicRoute component and authenticated routes with PrivateRoute component.We have used suspense to add lazy loading to components. 
Now we have configured Private and Public Routes. If there is no match NoFoundComponent will be rendered.Public and Private routes will also restrict accessing the previously visited routes using the browser back button after logout. I hope you have found this useful. Thank you for reading.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- single blog4 --> */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className="border rounded-3 d-lg-flex d-md-flex align-items-center justify-content-around"
                >
                  <div className="card-body text-start px-3">
                    <h4 className="title">
                    4. What is Node? How does Node work?
                    </h4>
                    <p className="card-text">
                    Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.module is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.require is a function used to import modules from other files or Node packages.process is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- blog end --> */}
      </div>
      <div id="no-found-message" className="mt-4 d-none">
        <h3 className="text-warning">Not Found. Please try again</h3>
      </div>
    </div>
    );
};

export default Blog;