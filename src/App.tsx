import { ChakraProvider, Box } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="white">
        <Box backgroundColor="#FFFFFF" borderRadius="25px">
          <Header />
          <Card />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
