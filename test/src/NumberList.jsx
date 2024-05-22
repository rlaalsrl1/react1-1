export default function NumberList(){
    //const {numbers} = props;
    const numbers = [1, 2, 3, 4 ,5]

    const todoLists = [
        {   id: 1,
            todo: "할일1"
        },
        {   id: 2,
            todo: "할일2"
        },
        {   id: 3,
            todo: "할일3"
        },
        {   id: 4,
            todo: "할일4"
        },
        {   id: 5,
            todo: "할일5"
        },
    ]

    const listItems = numbers.map((number, index) =>
        <li key={index}>{number}</li>
    )
    //id를 키값으로 사용
    const itemLists = numbers.map((todoList) =>
        <li key={todoList.id}>{todoList.todo}</li>
    )
    //배열의 인덱스를 키값으로 사용
    const foos = todoLists.map((foo, index) =>
    <li key={index}>{foo.todo}</li>
    )
    const bars = todoLists.map((bar) =>
    <li key={`todoLists-id-${bar.id}`}>{bar.todo}</li>
    )

    return(
        <>
        <ul>{listItems}</ul>
        <ul>{itemLists}</ul>
        <ul>{foos}</ul>
        <ul>{bars}</ul>
        </>
    )
}