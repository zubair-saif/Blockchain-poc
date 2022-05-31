import { Container, Row, Col, Form, Button, Spinner, Card } from 'react-bootstrap';
import { TransactionContext } from '../context/TransactionsContext';
import { useContext } from 'react';


const Input = ({ placeholder, name, type, value, handleChange }) => (

    <Form.Group className="mb-3" controlId={name}>
        <Form.Control type={type} placeholder={placeholder} value={value} name={name} step="0.0001" onChange={(e) => handleChange(e, name)} />
    </Form.Group>
);

const Welcome = () => {
    const { currentAccount, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();
        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }
    return (
        <Container className="mx-auto my-4">
            <Row>
                <Col className='my-5'>
                    <h1>Send Crypto ,<br />
                        across the world</h1>
                    <p>Explore the crypto world.<br /> Buy and sell cryptocurrencies easily on Krypto.</p>

                    {currentAccount}
                </Col>
                <Col>
                    <Card className='shadow border-0'>
                        <Card.Body>
                            <Form>
                                <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                                <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                                <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                                <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />


                                <div className="d-grid gap-2">
                                    {isLoading ? <Spinner animation="grow" variant="warning" />
                                        : (
                                            <Button variant="primary" size="lg" type="submit" onClick={handleSubmit}>
                                                Send Now
                                            </Button>
                                        )}
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container >
    )
}

export default Welcome;