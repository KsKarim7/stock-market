import React from 'react';
import { Accordion } from 'react-bootstrap';
import './QnA.css'

const QnA = () => {
    return (
        <div className='my-5 container'>
            <h2 className='my-5 text-center text-secondary'>Q & A Portal</h2>
            <Accordion >
                <Accordion.Item>
                    <Accordion.Header>Question no.1: Difference between JS and Node.js.</Accordion.Header>
                    <Accordion.Body>
                        Answer: Difference between Javascript(js) and Node.js is written below:
                        <br />
                        <br />
                        <span className='fw-bold'>Javascript</span> : Is is a object oriented scripting language that is used for writing scripts on dynamic HTML pages with interactive effects on webpage.It is an interpreted scripting language which can be run in any browser as like JS core in safari ,V8 in chrome. Also for that it is known as browser's language.
                        <br />
                        <span className='fw-bold'>Node.js</span> : It is a Javascript runtime environment which represents a list of objects and methods accessible to Javascript code when run in the V8 engine(which is js engine inside of node.js that parses and runs Javascript ) or via the node interpreter.Here we can write Javascript on a stand-alone machine (physical machine) not on the browser.It is used as a server side component

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item >
                    <Accordion.Header>Question no.2: When should you use node.js and when should you use mongodb?</Accordion.Header>
                    <Accordion.Body>
                        Answer:<span className='fw-bold'>Node.js</span> is used for non-blocking event-driven servers for its single-threaded nature. It utilizes the great V8 JAVASCRIPT engine. It runs Javascript, so we can use the same language on server and client, and even share some code between them. The synergy of Node.js  loT is the best possible for implementing loT development projects.The synergy of Node.js IoT is the best possible for implementing IoT development projects.
                        <br />
                        <span className='fw-bold'>MongoDB</span> is a general-purpose database used in various ways to support applications in many different industries. For example: telecommunications, gaming, finances, healthcare and retail.Document databases allow us to embed documents to describe nested structures and tolerate variations in data in generations of documents.Another reason of using mongodb is it facilitate to store database in json(Javascript object notation), which is very fast and efficient. With mongoDb we can store a  collection inside another collection.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>Question no.3: Difference between SQL and NoSQL databases?</Accordion.Header>
                    <Accordion.Body>
                        Answer: Difference between SQL and NoSQL databases is written below:
                        <br />
                        <br />
                        <div className='ans-container'>
                            <div className='me-2'>
                                <h5 className='underline text-center'>SQL</h5>
                                <li>'S-Q-L' as 'See-Quel' is primarily called Rational Databases.</li>
                                <li>SQL databases are vertically scalable.</li>
                                <li>SQL databases are better for multi-row transactions.</li>
                                <li>SQL data bases follow table ACID properties.</li>
                                <li>SQL databases have fixed or static or predefined schema.</li>

                            </div>
                            <div className='ms-2'>
                                <h5 className='text-center underline'>NoSQL</h5>
                                <li>NoSQL is Non-relational or Disturbed Database.</li>
                                <li>NoSQL databases are horizontally scalable.</li>
                                <li>NoSQL databases are better for unstructured data like documents or JSON</li>
                                <li>NoSQL database follows the Brewers CAP theorem.</li>
                                <li>NoSQL databases have dynamic schema.</li>

                            </div>

                        </div>


                    </Accordion.Body>
                </Accordion.Item >
                <Accordion.Item>
                    <Accordion.Header>Question no.4: Purpose of JWT and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        <p>Answer: JWT that is json web tokens is commonly used for Managing Authorization between two parties.Also crete a standard way between two parties to communicate securely.JSON Web Tokens are an open industry standard RFC 7519 method for representing claims securely between parties.In it's compact form, JSON Web Tokens consists of three parts separated by dot('.'), which are:
                            <li>Header</li>
                            <li>Payload</li>
                            <li>Signature</li>
                        </p>


                    </Accordion.Body>
                </Accordion.Item >
            </Accordion>
        </div>
    );
};

export default QnA;