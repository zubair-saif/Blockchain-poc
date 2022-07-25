import { Row, Card, Col, Container } from "react-bootstrap";
import { TransactionContext } from "../context/TransactionsContext";
import { useContext } from "react";
const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);
    console.log('transactions', transactions)
    return (


        <Container Container className="my-4" >

            {
                currentAccount ? (
                    <h3>
                        Latest Transactions
                    </h3 >
                ) : (
                    <h3>
                        Connect your account to see the latest transactions
                    </h3>
                )}
            <Row xs={1} md={2} className="g-4">

                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <span>{transactions}</span>

                        {[...transactions].reverse().map((transaction, index) => (
                            <Card className="shadow border-0" key={index}>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{transaction.keyword}</Card.Title>
                                    <Card.Text>
                                        {transaction.message}
                                        {transaction.amount}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}

                    </Col>
                ))}
            </Row>
        </Container >

    )
}
export default Transactions;