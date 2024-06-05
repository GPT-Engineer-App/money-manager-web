import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4}>
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/expenses">
        Expenses
      </Button>
      <Button as={Link} to="/savings">
        Savings
      </Button>
      <Button as={Link} to="/investments">
        Investments
      </Button>
    </HStack>
  );
};

export default Navigation;
