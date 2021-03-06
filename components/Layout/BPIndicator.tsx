import React from "react";

import { Flex } from "@chakra-ui/layout";
import { useBreakpoint } from "@chakra-ui/media-query";

const BPIndicator = () => {
  const currentBP = useBreakpoint();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    !process.env.NODE_ENV ||
      (process.env.NODE_ENV === "development" && setShow(true));
  }, []);

  return show ? (
    <Flex
      position="sticky"
      bottom="0"
      left="0"
      width="14"
      height="8"
      background="gray.700"
      justifyContent="center"
      alignItems="center"
      color="white"
      fontWeight="bold"
    >
      {currentBP}
    </Flex>
  ) : null;
};

export default BPIndicator;
