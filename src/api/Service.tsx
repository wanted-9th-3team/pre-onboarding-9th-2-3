import ITravelInfo from './TravelDTO'

const getTravelInfo = async (): Promise<ITravelInfo[] | null> => {
  const data = await fetch('../data/mock_data.json')

  if (data) {
    const travelList = data.json()
    return travelList
  }
  return null
}

export default { getTravelInfo }
