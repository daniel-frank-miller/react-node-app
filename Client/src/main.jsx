//  import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App.jsx";
import "/src/index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(<GoogleOAuthProvider clientId="98266420320-lqgs1l9f898se9vfm50049q2fs7cli43.apps.googleusercontent.com"><App /></GoogleOAuthProvider>);
