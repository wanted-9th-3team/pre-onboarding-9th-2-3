import ITravelInfo from './TravelDTO'

const getTravelInfo = async () => {
  const response = await fetch('src/data/mock_data.json')

  if (response.ok) {
    const data = await response.json()
    return data as ITravelInfo[]
  }
  return null
}

export default getTravelInfo
