//importing React and some of the hooks from react
import { useState, useEffect } from "react"
//importing json() function from D3
import { json } from "d3"
//importing feature() and mesh() from TopoJSON
import { feature, mesh } from "topojson"

//the file containing the geographic information of the states in the USA in .json format
const jsonUrl = "https://unpkg.com/us-atlas@3.0.0/states-10m.json"
//useData() in React is an local store to share data across components based on hooks
export const useData = () => {
  const [data, setData] = useState(null)

  //using useEffect() lets us perform side effects in function components
  useEffect(() => {
    json(jsonUrl).then((topology) => {
      //assigning the ojects to 'states' constant
      const { states } = topology.objects
      setData({
        land: feature(topology, states),
        interiors: mesh(topology, states, (a, b) => a !== b),
      })
    })
  }, [])
  //returnd the map
  return data
}
