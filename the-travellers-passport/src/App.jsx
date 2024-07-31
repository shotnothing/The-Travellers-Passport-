import { useState } from 'react'

import {
  ChakraProvider,
  Image,
  Box,
  Input,
  ScaleFade,
} from '@chakra-ui/react'

import baseImage from './assets/base.png'
import medicalImage from './assets/medical.png'
import silosoImage from './assets/siloso.png'
import soldiersImage from './assets/soldiers.png'
import watersImage from './assets/waters.png'

function App() {
  const [keyword, setKeyword] = useState('')

  const [cp1, setCP1] = useState(false)
  const [cp2, setCP2] = useState(false)
  const [cp3, setCP3] = useState(false)
  const [cp4, setCP4] = useState(false)

  const [imageTopLeft, setImageTopLeft] = useState(null)
  const [imageTopRight, setImageTopRight] = useState(null)
  const [imageBottomLeft, setImageBottomLeft] = useState(null)
  const [imageBottomRight, setImageBottomRight] = useState(null)

  const keywordUpdate = (e) => {
    setKeyword(e.target.value)
    if (e.target.value.toLowerCase() === 'waters') {
      setCP1(true)
    }

    if (e.target.value.toLowerCase() === 'siloso' && cp1) {
      setCP2(true)
    }

    if (e.target.value.toLowerCase() === 'soldiers' && cp2) {
      setCP3(true)
    }

    if (e.target.value.toLowerCase() === 'medical' && cp3) {
      setCP4(true)
    }

  }

  const askForImage = (setImage) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {

        const reader = new FileReader();
        reader.onload = (event) => {
          setImage(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Please select an image file.');
      }
    };
    input.click();
  }

  return (
    <ChakraProvider>

      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={baseImage}
          alt="base"
          objectFit="cover"
        />
      </Box>

      <Input
        placeholder="Enter keyword here:"
        size="lg"
        position="absolute"
        top="18vh"
        left="23vw"
        width="20vw"
        backgroundColor="white"
        fontFamily="serif"
        value={keyword}
        onChange={(e) => keywordUpdate(e)}
      />

      {cp1 && (
        <Image
          src={watersImage}
          alt="waters"
          objectFit="cover"
          position="absolute"
          top="23vh"
          left="19.5vw"
          width="10vw"
        />
      )}

      {cp2 && (
        <Image
          src={silosoImage}
          alt="siloso"
          objectFit="cover"
          position="absolute"
          top="37vh"
          left="37.5vw"
          width="10vw"
        />
      )}

      {cp3 && (
        <Image
          src={soldiersImage}
          alt="soldiers"
          objectFit="cover"
          position="absolute"
          top="50vh"
          left="19.5vw"
          width="10vw"
        />
      )}

      {cp4 && (
        <Image
          src={medicalImage}
          alt="medical"
          objectFit="cover"
          position="absolute"
          top="65vh"
          left="37.5vw"
          width="10vw"
        />
      )}


      <Box
        position="absolute"
        top="20vh"
        left="51vw"
        width="12.5vw"
        height="24.5vh"
        onClick={() => askForImage(setImageTopLeft)}
      >
        <Image
          src={imageTopLeft}
          alt="imageTopLeft"
          objectFit="contain"
          width="100%"
          height="100%"
          visibility={imageTopLeft != null ? 'visible' : 'hidden'}
        />
      </Box>


      <Box
        position="absolute"
        top="19.5vh"
        left="68vw"
        width="12.5vw"
        height="24.5vh"
        onClick={() => askForImage(setImageTopRight)}
      >
        <Image
          src={imageTopRight}
          alt="imageTopRight"
          objectFit="contain"
          width="100%"
          height="100%"
          visibility={imageTopRight != null ? 'visible' : 'hidden'}
        />
      </Box>

      <Box
        position="absolute"
        top="56vh"
        left="51vw"
        width="12.5vw"
        height="24.5vh"
        onClick={() => askForImage(setImageBottomLeft)}
      >
        <Image
          src={imageBottomLeft}
          alt="imageBottomLeft"
          objectFit="contain"
          width="100%"
          height="100%"
          visibility={imageBottomLeft != null ? 'visible' : 'hidden'}
        />
      </Box>

      <Box
        position="absolute"
        top="56vh"
        left="68vw"
        width="12.5vw"
        height="24.5vh"
        onClick={() => askForImage(setImageBottomRight)}
      >
        <Image
          src={imageBottomRight}
          alt="imageBottomRight"
          objectFit="contain"
          width="100%"
          height="100%"
          visibility={imageBottomRight != null ? 'visible' : 'hidden'}
        />
      </Box>




      






    </ChakraProvider>
  )
}

export default App
