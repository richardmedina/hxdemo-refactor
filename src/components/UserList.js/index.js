import React from 'react'


export default ({userList}) => 
    userList.map (i => <UserListItem key={i.id} ></UserListItem>);