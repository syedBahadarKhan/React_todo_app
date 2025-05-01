import { useState } from "react"

export default function Likebutton(){
    let [like, Setlike] =useState(false);//state #1
    let [click, Setclick] = useState(0); //state #2//we can can create multiple state variable inside the function component
     let  toggleLike =() =>{
        Setlike(!like);
        Setclick(click+1);
     }

     let color = {
        color : "red"
     }
    return(
        <div>
            <p onClick={toggleLike}>
                {like ? (<i class="fa-solid fa-thumbs-up" style={color}></i>) 
                :( <i className="fa-regular fa-thumbs-up" ></i>)  }
                {/* <h2>clicks = {click}</h2> */}
                </p>
                
        </div>
    )

}