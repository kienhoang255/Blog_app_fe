import { ChakraProvider, Container } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="70%" height="auto" pb={10} bg="blue.600">
        <HomePage />
      </Container>
    </ChakraProvider>
  );
}

export default App;
