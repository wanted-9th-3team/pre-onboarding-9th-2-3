import {
  Stack,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import { MouseEvent, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store/store'
import { searchTravelSpaceLists } from '../../store/trip/tripSelector'
import { setSearchCategory } from '../../store/trip/tripSlice'

function SelectBox() {
  const dispatch = useAppDispatch()
  const tripSpaceList = useSelector(searchTravelSpaceLists)

  const priceMinRef = useRef<HTMLDivElement | null>(null)
  const priceMaxRef = useRef<HTMLDivElement | null>(null)
  const [selectSpace, setselectSpace] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 30000])

  const spaceButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const currentSpace = e.currentTarget.value
    setselectSpace(prev => {
      if (prev.includes(currentSpace)) {
        return prev.filter(space => space !== currentSpace)
      }
      return [...prev, currentSpace]
    })
  }

  const priceChangeHandler = (value: number[]) => {
    setPriceRange(value)

    if (!priceMinRef.current || !priceMaxRef.current) return
    priceMinRef.current.innerText = String(value[0])
    priceMaxRef.current.innerText = String(value[1])
  }

  const sortTripListHandler = () => {
    const sortCategory = { priceRange, selectSpace }
    dispatch(setSearchCategory(sortCategory))
  }

  return (
    <Stack marginBottom='20px' w='50%' alignItems='center'>
      <Button colorScheme='red' onClick={sortTripListHandler}>
        검색
      </Button>
      <Stack w='100%' flexDirection='row' alignItems='center'>
        <Text width='50px' mr='20px'>
          가격
        </Text>
        <RangeSlider
          defaultValue={[0, 30000]}
          min={0}
          max={30000}
          step={5000}
          onChange={priceChangeHandler}
        >
          <RangeSliderTrack bg='red.100'>
            <RangeSliderFilledTrack bg='tomato' />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} ref={priceMinRef}>
            0
          </RangeSliderThumb>
          <RangeSliderThumb boxSize={6} index={1} ref={priceMaxRef}>
            30000
          </RangeSliderThumb>
        </RangeSlider>
      </Stack>

      <Stack
        w='100%'
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
      >
        <Text width='50px'>공간</Text>
        <ButtonGroup gap='1'>
          {tripSpaceList.map(option => (
            <Button
              key={option}
              value={option}
              colorScheme={selectSpace.includes(option) ? 'whatsapp' : 'gray'}
              onClick={spaceButtonHandler}
            >
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Stack>
  )
}

export default SelectBox
