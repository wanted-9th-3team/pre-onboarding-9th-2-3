const dateConvertor = (date: string) => {
  const convertedDate = new Date(date).toLocaleString().split(':00')[0]
  return convertedDate
}

export default dateConvertor
