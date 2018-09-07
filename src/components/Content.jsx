import React from 'react';
import { Jumbotron, Button, Glyphicon, Badge } from 'react-bootstrap';

const Content = (props) => (
    <div className="content">
        <Jumbotron />
        {props.data.map((item) => (
            <div>
                <h4>{item.name} - {item.role}</h4>
                <Badge>{props.data.length}</Badge>
            </div>
        ))}
    </div>
);

export default Content;


