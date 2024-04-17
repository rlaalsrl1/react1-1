import React from "react"
 const styles={
    
 }
export default function Comment(props){
    return(
        <><div>
            <h1>{props.name} {props.Comment}</h1>
        </div><div style={styles.wrapper}>
                <div style={styles.imageContainer}>
                    <img
                        src=""
                        style={styles.image} />
                </div>
            </div></>
    //     <div style={styles.contentContainer}>
    //         <span style={styles.nameText}>{props.name}</span>
    //         <span style={styles.CommentText}>{props.Comment}</span>
    //     </div>
        /* <div className="comment">
            <UserInfo user={props.author}/>
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                (formatData{props.text})
            </div>
        </div>*/
    )
}