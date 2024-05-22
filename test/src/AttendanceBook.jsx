export default function AttendanceBook(props){

    const students =[
        {
            name: "Inje",
        },
        {
            name: "Steve",
        },
        {
            name: "Bill",
        },
        {
            name: "Jeff",
        },
    ];
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    )
}