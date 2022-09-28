import React from "react"
import axios from 'axios'

const [apiKey, setApikey] = React.useState("AIzaSyAwvf96qHtrNvxVvBLtfyWbejrfWWXWUkg")
const [data, setData] = React.useState([])
const Category = ["Computer Science", "ARTS", "PHILOSOPHY & PSYCHOLOGY", "RELIGION"]


for(let i =0; i < Category.length; i++){

    const url = "https://www.googleapis.com/books/v1/volumes?q="+Category[0]+"&key="+apiKey+"&maxResults=10"
    React.useEffect(() => {
        axios.get(url).then(response => {
            console.log(response)
        })
    })
}

export default function Data(){
    const [apiKey, setApikey] = React.useState("AIzaSyAwvf96qHtrNvxVvBLtfyWbejrfWWXWUkg")
    const [data, setData] = React.useState([])
    const Category = ["Computer Science", "ARTS", "PHILOSOPHY & PSYCHOLOGY", "RELIGION"]
    const url2 = "javascript"

// for(let i =0; i < Category.length; i++){

   const url = "https://www.googleapis.com/books/v1/volumes?q="+Category[0]+"&key="+apiKey+"&maxResults=10"
    
// }


    axios.get(url).then(response => {
        setData(response.data.item)
    })
}



const [show, setShow] = React.useState(true)


function handleclick(){
    setShow()
}

export default [
    {
        title: "Mount Fuli",
        location: "Japan",
        googlemapurl: "jdncjn",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount fulji is jfnv",
        imageurl: "https://unsplash.com/photos/WLxQvbMyfans"
    },

    {
        title: "gdhdhdh",
        location: "Japan",
        googlemapurl: "jdncjn",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount fulji is jfnv",
        imageurl: "https://unsplash.com/photos/WLxQvbMyfans"
    },

    {
        title: "jdkdkdk",
        location: "Japan",
        googlemapurl: "jdncjn",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount fulji is jfnv",
        imageurl: "https://unsplash.com/photos/WLxQvbMyfans"
    },

    {
        title: "jdkfkfl",
        location: "Japan",
        googlemapurl: "jdncjn",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount fulji is jfnv",
        imageurl: "https://unsplash.com/photos/WLxQvbMyfans"
    },

    {
        title: "Mount Fuli",
        location: "Japan",
        googlemapurl: "jdncjn",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount fulji is jfnv",
        imageurl: "https://unsplash.com/photos/WLxQvbMyfans"
    },

    {
        title: "har",
        location: "Japan",
        googlemapurl: "jdncjn",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount fulji is jfnv",
        imageurl: "https://unsplash.com/photos/WLxQvbMyfans"
    }
]