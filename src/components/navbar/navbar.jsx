import { Box, Flex, Heading } from '@chakra-ui/react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  

  
  return (
    <Box width={'100%'} h={'10vh'} bg={'#233242'} color={'white'}>
      <Box className='wrapper' px={10} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={{base: 'column' , md: 'row'}} minH={'100%'}>
        {/* for logo */}
        <Link to={'/'}>
          <Flex  alignItems={'center'} gap={2} >
            <FaHome fontSize={'40px'} />
            <Heading>STROY DOM</Heading>
          </Flex>
        </Link>

        {/* for links */}
        <Flex fontSize={'30px'} fontWeight={'bold'} gap={5} alignItems={'center'}>
          <Link to={'/'}>Prixod</Link>
          <Link to={'/rasxod'}>Rasxod</Link>
          <Link to={'/list'}>Spiska</Link>

          {/* <Box cursor={'pointer'} display={{base: 'none' ,md: 'block'}}>
            {theme ?  <FaSun onClick={() =>{
              setTheme(false)
              localStorage.setItem('theme','gray')
              localStorage.setItem('colorText','white')
            }} /> : <FaMoon onClick={() => {
              setTheme(true)
              localStorage.setItem('colorText','black')
              localStorage.setItem('theme','orange')
            }} />}
          </Box> */}
        </Flex>


        {/* for bars */}
        {/* <Box fontSize={'30px'}>
          <HiMiniBars3BottomRight />
        </Box> */}
      </Box>
    </Box>
  )
}

export default Navbar