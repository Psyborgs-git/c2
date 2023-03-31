import { Container } from '@mui/material';
import React from 'react';

interface ApparelProps {

}

interface ApparelState {

}

class Apparel extends React.Component<ApparelProps, ApparelState> {

    constructor(props: ApparelProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <h1>Apparel</h1>
            </Container>
        );
    }

}

export default Apparel;
