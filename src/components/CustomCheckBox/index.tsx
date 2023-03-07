import { Box, chakra, Flex, Text, useCheckbox } from '@chakra-ui/react'

export default function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props)

  return (
    <chakra.label
      display='flex'
      flexDirection='row'
      alignItems='center'
      gridColumnGap={2}
      rounded='lg'
      px={3}
      py={1}
      cursor='pointer'
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems='center'
        justifyContent='center'
        border='2px solid'
        borderRadius='10px'
        borderColor='blue.500'
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && (
          <Box w={2} h={2} borderRadius='10px' bg='blue.500' />
        )}
      </Flex>
      <Text color='gray.700' {...getLabelProps()}>
        {props.value}
      </Text>
    </chakra.label>
  )
}
