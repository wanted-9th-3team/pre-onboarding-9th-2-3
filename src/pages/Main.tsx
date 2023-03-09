import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Grid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Select,
  Button,
  Center,
  Heading,
} from '@chakra-ui/react'
import { resetTrip, filterTrip } from '../store/reducers/trip'
import { RootState } from '../store/store'
import TripItem from '../components/TripItem'
import TripItemDetailModal from '../components/TripItemDetailModal'
import city from '../data/city.json'

function CustomNumberInput(props: {
  defaultValue: number
  onChange: (e: any) => void
}) {
  const { defaultValue, onChange } = props
  return (
    <NumberInput
      size='md'
      defaultValue={defaultValue}
      min={0}
      max={100000}
      onChange={onChange}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

function CitySelect(props: { onChange: (e: any) => void }) {
  const { onChange } = props
  const options = city.map(item => (
    <option value={item.name} key={item.idx}>
      {item.name}
    </option>
  ))
  return <Select onChange={onChange}>{options}</Select>
}

function Main() {
  const tripItems = useSelector(
    (state: RootState) => state.trip.filteredTripItems
  )

  const trip = tripItems.map((item, idx) => (
    <TripItem key={item.idx} idx={idx} />
  ))

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const minPrice = useRef(0)
  const maxPrice = useRef(100000)
  const cityList = useRef('전체')

  useEffect(() => {
    dispatch(resetTrip)
  }, [dispatch])

  const setMinPrice = (e: any) => {
    minPrice.current = e
  }
  const setMaxPrice = (e: any) => {
    maxPrice.current = e
  }

  const setCity = (e: any) => {
    cityList.current = e.target.value
  }

  const searchTrip = () => {
    if (minPrice.current <= maxPrice.current) {
      dispatch(
        filterTrip({
          min: minPrice.current,
          max: maxPrice.current,
          city: cityList.current,
        })
      )
    }
  }

  return (
    <div>
      <Heading>상품 목록</Heading>
      <Button
        onClick={() => {
          navigate('/reservations')
        }}
      >
        장바구니
      </Button>
      <Grid gap={6} templateColumns='repeat(4, 1fr)'>
        {trip}
      </Grid>
      <Center>
        <Stack shouldWrapChildren direction='row'>
          <CustomNumberInput defaultValue={0} onChange={setMinPrice} />
          <CustomNumberInput defaultValue={100000} onChange={setMaxPrice} />
          <CitySelect onChange={setCity} />
          <Button onClick={searchTrip}>검색</Button>
        </Stack>
      </Center>
      <TripItemDetailModal />
    </div>
  )
}

export default Main
