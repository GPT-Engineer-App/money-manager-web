import { Container, VStack, Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Expenses = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {};

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Expenses</Heading>
        <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Input placeholder="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Button onClick={handleSubmit}>Add Expense</Button>
      </VStack>
    </Container>
  );
};

export default Expenses;
