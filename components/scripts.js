import { Fragment } from "react"
import Script from "next/script";

//FB stands for firebase
const FBScripts = () => {
    return (
        <Fragment>

            {/* update the version number as needed */}
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-app-compat.js"
            />
            {/* include only the Firebase features as you need */}
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-auth-compat.js"
            />
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-database-compat.js"
            />
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-firestore-compat.js"
            />
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-functions-compat.js"
            />
            <Script
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-messaging-compat.js"
            />
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-storage-compat.js"
            />
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-analytics-compat.js"
            />
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-remote-config-compat.js"
            />
            <Script 
                strategy="defer" 
                src="/__/firebase/9.6.6/firebase-performance-compat.js"
            />
            {/* 
            initialize the SDK after all desired features are loaded, set useEmulator to false
            to avoid connecting the SDK to running emulators.
            */}
            <Script 
                strategy="defer" 
                src="/__/firebase/init.js?useEmulator=true"
            />
        </Fragment>
    )
}

export default FBScripts;