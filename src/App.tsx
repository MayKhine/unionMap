import { useData } from "./components/useData"
import { Marks } from "./components/Marks"
import { useCities } from "./components/useCities"
const width = 960
const height = 600

//useData() in React is an local store to share data across components based on hooks
export const App = () => {
  const data = useData()
  const cities = useCities()
  console.log("Cities", cities)

  if (!data) {
    return <pre>Loading...</pre>
  }
  console.log("US DATA : ", data)
  return (
    <svg width={width} height={height}>
      <Marks data={data} cities={cities} />
    </svg>
  )
}
