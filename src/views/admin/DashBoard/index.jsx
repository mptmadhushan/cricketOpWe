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
  const [ourTeam, setOurTeam] = React.useState(null);
  const [thereTeam, setThereTeam] = React.useState(null);

  const [respo, setRespo] = React.useState({
    alert: true,
    predictions: 'with_mask',
    detail: 'Scanning.!',
  })
  const MINUTE_MS = 6000

  useEffect(() => {
    
  }, [])
  const handleChange1 = (selectedOption) => {
    setOurTeam(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  const handleChange2 = (selectedOption) => {
    setThereTeam(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  const people = [
    'home','away','nutral'
  ];
  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(thereTeam);
    axios
      .post(
        "http://ec2-13-229-183-94.ap-southeast-1.compute.amazonaws.com:5006/qna",
        {
          question:
          thereTeam,
        }
      )
      .then((response) => {
        console.log(
          "🚀 ~ file: testimonials.jsx:15 ~ .then ~ response:",
          response
        );
        
        // setResponse(response.data);
      });
  };
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
            onChange={handleChange1}
    id="balance"
    variant="outline"
    mt="5px"
    width="100%"
    me="0px"
    defaultValue="usd"
  >
    
  { people.map(person =>  <option value="usd">{person}</option>)}
   
  </Select>
  <Select options={options} onChange={handleChange1} autoFocus={true} />

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
          <div className="mt-4">
          {ourTeam && <>You've selected {ourTeam.value}</>}
        </div>
       </Flex>
        
      </Grid>
      <Button
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            onClick={handleOnSubmit}
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
