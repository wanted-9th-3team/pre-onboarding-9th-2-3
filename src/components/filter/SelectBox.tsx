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
import {
    searchTravelSpaceLists,
    selectPriceRange,
  } from '../../store/trip/tripSelector'

function SelectBox() {
    const dispatch = useAppDispatch()
    const price = useSelector(selectPriceRange)

    const priceMinRef = useRef<HTMLDivElement | null>(null)
    const priceMaxRef = useRef<HTMLDivElement | null>(null)

    const [priceRange, setPriceRange] = useState([0, 30000])

    const priceChangeHandler = (value: number[]) => {
        setPriceRange(value)
    
        if (!priceMinRef.current || !priceMaxRef.current) return
        priceMinRef.current.innerText = String(value[0])
        priceMaxRef.current.innerText = String(value[1])
    }
    

    return (
        <Stack marginBottom='20px' w='50%' alignItems='center'>
          <Button colorScheme='red'>
            검색
          </Button>
          <Stack w='100%' flexDirection='row' alignItems='center'>
            <Text width='50px' mr='35px'>
              가격
            </Text>
            <RangeSlider
              defaultValue={[0, 1000000000]}
              min={0}
              max={price[1]}
              step={5000}
              onChange={priceChangeHandler}
              position='relative'
            >
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='tomato' />
              </RangeSliderTrack>
              <RangeSliderThumb
                boxSize={15}
                index={0}
                ref={priceMinRef}
                width='50px'
                height='30px'
              />
              <RangeSliderThumb
                boxSize={15}
                index={1}
                ref={priceMaxRef}
                width='50px'
                height='30px'
              />
            </RangeSlider>
          </Stack>
        </Stack>
      )
}