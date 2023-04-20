import React, { useEffect } from 'react'

// Chakra imports
import { Box, Button,Select, Flex, Grid, Link, Input, Text, useColorModeValue, SimpleGrid, Heading } from '@chakra-ui/react'
import Card from 'components/card/Card.js'
import axios from 'axios'
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import MiniCalendar from "components/calendar/MiniCalendar";
import CheckTable from "views/admin/default/components/CheckTable";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorBrand = useColorModeValue('brand.500', 'white')

  const [respo, setRespo] = React.useState({
    alert: true,
    predictions: 'with_mask',
    detail: 'Scanning.!',
  })
  const MINUTE_MS = 6000

  useEffect(() => {
    const interval = setInterval(() => {
      capture()
    }, MINUTE_MS)
    return () => clearInterval(interval)
  }, [])
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    fetch(imageSrc)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], 'File name', { type: 'image/png' })
        console.log('🚀 ~ file: index.js ~ line 84 ~ .then ~ file', file)
        setSelectedFile(file)
        handleSubmission(file)
      })
  }, [webcamRef])

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  }
  const [selectedFile, setSelectedFile] = React.useState()

  const changeHandler = event => {
    setSelectedFile(event.target.files[0])
  }

  const handleSubmission = file => {
    const formData = new FormData()

    formData.append('image', file)
    // formData.append("image", selectedFile);

    axios
      .post('http://ec2-54-242-87-59.compute-1.amazonaws.com:8000/api/v1.0/mask-predictions/', formData)
      .then(res => {
        console.log(res)
        console.log(res.data)
        setRespo(res.data)
      })
  }
  const handleSubmissionFil = () => {
    const formData = new FormData()

    // formData.append("image", file);
    formData.append('image', selectedFile)

    axios
      .post('http://ec2-54-242-87-59.compute-1.amazonaws.com:8000/api/v1.0/mask-predictions/', formData)
      .then(res => {
        console.log(res)
        console.log(res.data)
        setRespo(res.data)
      })
  }
  const people = [
    'home','away','nutral'
  ];
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2Flex flexDirection="row"' }}>
          <Card align="center" direction="column" w="50%">
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">Select your team</Text>
            < Select
    id="balance"
    variant="outline"
    mt="5px"
    width="100%"
    me="0px"
    defaultValue="usd"
  >
    
  { people.map(person =>  <option value="usd">{person}</option>)}
   
  </Select>
            <Box h="240px" mt="auto"></Box>
          </Card>
          <Card align="center" direction="column" w="50%">
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
              Select there team
            </Text>
            < Select
    id="balance"
    variant="outline"
    mt="5px"
    width="100%"
    me="0px"
    defaultValue="usd"
  >
    
  { people.map(person =>  <option value="usd">{person}</option>)}
   
  </Select>
            <Box h="240px" mt="auto"></Box>
          </Card>

       </Flex>
        
      </Grid>
      <Button
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
   
            fontWeight="500"

          >
            
           SUBMIT
          </Button>
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex flexDirection="row" gridArea={{  }}>
          <Card align="center" direction="column" w="80%">
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
          </Card>
          <Card align="center" direction="column" w="50%">
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
          </Card>

       </Flex>
        
      </Grid>
      
    </Box>
  )
}
