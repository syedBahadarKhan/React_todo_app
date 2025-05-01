// import { useState } from "react";
// import './likebutton.css';

// function Likebutton(){
//     let [like, Setlike]= useState(false);
//     let [count, Setcount] = useState(0);
//   let toggleLike =()=>{
//     Setlike(!like);
//     Setcount(count+1);
//   };
//   let color = {
//     color:"red"
//   }

//   return(
//     <>
//     <div className="likebutton">
//         <p onClick={toggleLike}>{like ? (<i className="fa-regular fa-heart" ></i>)
//         : (<i className="fa-solid fa-heart" style={color} ></i>)}  </p>
//             <h2>clicks = {count}</h2>
//     </div>
    
//     </>
//   )
// }

// export default Likebutton;