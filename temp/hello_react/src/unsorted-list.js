import React from "react";

function UnsortedList(props) {
    let listItems = [];
    for(let listedString in props.listedStrings) {
        listItems.push(<li>{listedString}</li>);
    }
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default UnsortedList;