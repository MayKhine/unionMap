import { useState, useEffect } from "react"
import { csv } from "d3"

const csv_url =
  "https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv"

const row = (d) => {
  if (d.country != "United States") {
    return
  }
  d.lat = +d.lat
  d.lng = +d.lng
  d.population = +d.population
  return d
}
export const useCities = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csv_url, row).then(setData)
  }, [])
  console.log(data)
  return data
}
