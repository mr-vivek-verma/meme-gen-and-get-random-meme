import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}

//************Get Random Meme************************************ */
// import React from "react"
// import memesData from "../memesData.js"

// export default function Meme() {
//     /**
//      * Challenge: Get a random image from the `memesData` array
//      * when the "new meme image" button is clicked.
//      *
//      * Log the URL of the image to the console. (Don't worry
//      * about displaying the image yet)
//      */

//     function getMemeImage() {
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         const url = memesArray[randomNumber].url
//         console.log(url)
//     }

//     return (
//         <main>
//             <div className="form">
//                 <input
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button
//                     className="form--button"
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//         </main>
//     )
// }
