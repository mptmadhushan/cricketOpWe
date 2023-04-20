import React, { useEffect } from 'react'

// Chakra imports
import { Box, Button,Select, Flex, Grid,  FormControl,
  FormLabel, Link, Input, Text, useColorModeValue, SimpleGrid, Heading } from '@chakra-ui/react'
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
  const [userName, setUserName] = React.useState("");
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
  const listItems = people.map(person => <Select
    id="balance"
    variant="outline"
    mt="5px"
    width="30%"
    me="0px"
    defaultValue="usd"
  >
  { people.map(person =>  <option value="usd">{person}</option>)}
   
  </Select>);
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(1, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex flexDirection="row" justify='space-between' width='100%'  gap="16px" flexWrap="wrap">
             {/* {listItems} */}
           
       </Flex>
        
      </Grid> <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(1, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
     <p>Select match venue</p>
            < Select
    id="balance"
    variant="outline"
    mt="5px"
    width="30%"
    me="0px"
    defaultValue="usd"
  >
  { people.map(person =>  <option value="usd">{person}</option>)}
   
  </Select>
   <Input
                isRequired={true}
                fontSize="sm"
                placeholder="temperature"
                mb="24px"
                size="lg"
                width="200px"
                onChange={(e) => setUserName(e.target.value)}
                
                variant="auth"
              /> <Input
                isRequired={true}
                fontSize="sm"
                placeholder="wind"
                mb="24px"
                size="lg"
                width="200px"
                onChange={(e) => setUserName(e.target.value)}
                
                variant="auth"
              /> <Input
                isRequired={true}
                fontSize="sm"
                placeholder="humidity"
                mb="24px"
                size="lg"
                width="200px"
                onChange={(e) => setUserName(e.target.value)}
                
                variant="auth"
              />
      </Grid>
      
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
