// import React, { useState,useEffect } from "react";

// export default function UserStatus(props){
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange(status){
//         setIsOnline(status.setIsOnline)
//     }
//     //componentDidMount, componentDidUpdate와 비슷하게 작동
//     useEffect(() =>{
//         ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
//         return() =>{
//             ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
//         }
//         //브라우저  API를 사용해서 document의 title을 자동 업데이트
//         // document.title = `총 ${count}번 클릭했습니다.`;
//     });
//     if(isOnline ===null){
//         return '대기 중...';
//     }
//     return isOnline ? '온라인' : '오프라인';

// }