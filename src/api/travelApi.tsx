import axios from 'axios'
import { ITravelInfo } from '../Type'

const getTravelInfo = async () => {
  const response = await axios('src/data/mock_data.json')

  if (response) {
    const { data } = response
    return data as ITravelInfo[]
  }
  return null
}

export default getTravelInfo
