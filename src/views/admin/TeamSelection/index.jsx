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

  const [respo, setRespo] = React.useState(['home','away','nutral'])
  const MINUTE_MS = 6000

  useEffect(() => {

  }, [])
 
  const [temp, setTemp] = React.useState()
  const [wind, setWind] = React.useState("");
  const [hum, setHum] = React.useState("");
  const [value, setValue] = React.useState("LK");
 
  const opt = [
    'home','away','nutral'
  ];
  const handleOnSubmit = () => {
    const data ={
    "venue" : value,
    "Temp" : temp,
    "Humidity" : hum,
    "Wind" : wind
}
    console.log("🚀 ~ file: index.jsx:42 ~ handleOnSubmit ~ data:", data)
    // console.log(thereTeam);
    axios
      .post(
        "http://127.0.0.1:5000/team",
        {
         data
        }
      )
      .then((response) => {
        console.log(
          "🚀 ~ file: testimonials.jsx:15 ~ .then ~ response:",
          response
        );
        setRespo(response)
        
        // setResponse(response.data);
      });
  };
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
     <Flex flexDirection="row" gridArea={{  }}>
  <Select width={'200px'} value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        {opt.map((character) => (
          <option key={character} value={character}>
            {character}
          </option>
        ))}
      </Select>
   <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Temperature"
                mb="24px"
                size="lg"
                width="200px"
                onChange={(e) => setTemp(e.target.value)}
                
                variant="auth"
              /> <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Wind"
                mb="24px"
                size="lg"
                width="200px"
                onChange={(e) => setWind(e.target.value)}
                
                variant="auth"
              /> <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Humidity"
                mb="24px"
                size="lg"
                width="200px"
                onChange={(e) => setHum(e.target.value)}
                
                variant="auth"
              />
              </Flex>
               <Button
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            onClick={()=>handleOnSubmit()}
            fontWeight="500"

          >
            
           SUBMIT
          </Button> 
          {respo.map((character) => (
          <Text me='34mx' fontSize='sm' fontWeight='500' >
            -{character}
          </Text>
        ))}
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
