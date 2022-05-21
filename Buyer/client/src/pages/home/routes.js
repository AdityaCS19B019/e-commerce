import React from 'react'
import Landing from '../landing'
import Search from '../search'

const routes = [
    {
        path : "/",
        exact : true ,
        component : Landing
    },
    {
        path : "/search",
        exact : true ,
        component : Search
    }
]
export default routes