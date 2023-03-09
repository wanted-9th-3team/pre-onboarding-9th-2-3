import axios from 'axios'

export default async () => {
  try {
    return await axios.get('/src/data/mock_data.json')
  } catch (e) {
    return e
  }
}
