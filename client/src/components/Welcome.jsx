import { Container, Row, Col, Form, Button, Spinner, Card } from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container className="mx-auto my-4">
            <Row>
                <Col className='my-5'>
                    <h1>Send Crypto ,<br />
                        across the world</h1>
                    <p>Explore the crypto world.<br /> Buy and sell cryptocurrencies easily on Krypto.</p>


                </Col>
                <Col>
                    <Card className='shadow border-0'>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="addressto">
                                    <Form.Control type="text" placeholder="Address to" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="amount">
                                    <Form.Control type="number" placeholder="Amount(ETH)" min={0} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Keyword(Gif)">
                                    <Form.Control type="text" placeholder="Keyword(Gif)" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="message">
                                    <Form.Control type="text" placeholder="Enter Message" />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg" type="submit">
                                        Send Now  <Spinner animation="grow" variant="warning" />

                                    </Button>                        </div>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container >
    )
}
export default Welcome;