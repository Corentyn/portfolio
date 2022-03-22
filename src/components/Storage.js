import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import React from "react";

export const firebaseConfig = {
  apiKey: "AIzaSyCgAXfyS3u5E1gBeOyD9ontOuq1M2KCMnk",
  authDomain: "reactportfoliocorentyn.firebaseapp.com",
  projectId: "reactportfoliocorentyn",
  storageBucket: "reactportfoliocorentyn.appspot.com",
  messagingSenderId: "188297901392",
  appId: "1:188297901392:web:f20f760d30cbd8c2036855",
  measurementId: "G-QRR0Y6WVKY",
};

// export const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const starsRef = ref(storage, "cv.pdf");

const Storage = () => {
  let urlCv = "#";
  if (urlCv === "#" || urlCv === "") {
    getDownloadURL(starsRef).then((urlCv) => {
      const varBa = document.getElementById("myimg");
      if (varBa != null) {
        varBa.setAttribute("href", urlCv);
        // this.setUrl();
      }
    });
  }
  return (
    <a
      className="text-center text-xl border-purple-500 border-2 pl-4 pr-4 pt-2 pb-2 text-white rounded-md hover:bg-purple-500"
      href={urlCv}
      target="_blank"
      id="myimg"
      rel="noreferrer"
    >
      Mon CV
    </a>
  );
};

export default Storage;
