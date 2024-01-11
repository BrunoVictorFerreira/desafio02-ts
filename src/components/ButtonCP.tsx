import { Button } from "@chakra-ui/react";

export const ButtonCP = ({ eventOnClick }: any) => {
  return (
    <>
      <Button
        onClick={eventOnClick}
        bgColor="#9c44dc"
        color="white"
        size="sm"
        width="100%"
        marginTop="5px"
      >
        Button
      </Button>
    </>
  );
};
