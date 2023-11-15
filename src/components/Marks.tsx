//importing d3.geoPath() to display geographic data
import * as d3 from "d3"
import "../App.css"

// Define the Albers USA projection for the mainland
const projectionMainland = d3.geoAlbersUsa()

// Define a separate projection for the territories (e.g., Mercator)
// const projectionTerritories = d3.geoMercator()

// Create geoPath generators with the respective projections
const pathMainland = d3.geoPath().projection(projectionMainland)
// const pathTerritories = d3.geoPath().projection(projectionTerritories)

// const path = geoPath(projection)

const clickFn = (feature) => {
  console.log("CLicked", feature.properties.name)
}
//the following statements exports a const declaration
export const Marks = ({ data: { land, interiors }, cities }) => (
  <g className="marks">
    {land.features.map((feature, index) => (
      <path
        key={index}
        className="land"
        d={pathMainland(feature)}
        onClick={() => {
          clickFn(feature)
        }}
      />
    ))}
    {/* <path className="" d={pathTerritories(interiors)} /> */}
    {cities.map((d) => {
      const [x, y] = projectionMainland([d.lng, d.lat])
      return <circle cx={x} cy={y} r={4} />
    })}
  </g>
)
