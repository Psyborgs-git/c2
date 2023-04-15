import React from 'react';


// Material UI
import { Button, Collapse, IconButton, Stack, TextField } from '@mui/material';

// Icons
import { Add, Delete, Email, Phone } from '@mui/icons-material';

// Relay
import { useMutation } from 'react-relay';
import { ContactMutation, ContactMutation$variables } from './__generated__/ContactMutation.graphql';

// GraphQL
const graphql = require('babel-plugin-relay/macro');

interface ContactProps {

};

function Contact(props: ContactProps) {
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = React.useState<ContactMutation$variables['input']>({});
    const [commit, isInFlight] = useMutation<ContactMutation>(
        graphql`
            mutation ContactMutation($input: ContactMutationInput!) {
                contact(input: $input) {
                    success
                    error
                    contact {
                        id
                        name
                        emails
                        mobile{
                            edges{
                                node{
                                    id number countryCode
                                }
                            }
                        }
                        currentPosition
                        company
                    }
                }
            }
        `
    );
    const _submit = () => {
        return commit({
            variables: {
                input,
            },
            onCompleted: (response, errors) => {

                if (response?.contact?.success) {
                    setInput({});
                    setOpen(false);
                }
                if (response?.contact?.error) {
                    alert(response?.contact?.error);
                }
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    const _add_number = () => {
        setInput({
            ...input,
            numbers: [
                ...(input?.numbers ?? []),
                {
                    countryCode: "",
                    number: ""
                }
            ]
        })
    }
    const _add_email = () => {
        setInput({
            ...input,
            emails: [
                ...(input?.emails ?? []),
                ""
            ]
        })
    }

    return (
        <Stack
            sx={{
                height: "max-content",
                color: 'primary.contrastText',
                display: 'flex',
                maxWidth: "sm",
                my: 1,
                bgcolor: "transparent"
            }}
            gap={1}
        >
            <Collapse in={open}>

                <Stack
                    gap={1}
                    sx={{
                        height: "max-content",
                        minHeight: "60px",
                        alignSelf: "center",
                        justifyContent: "center",
                        display: "flex",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.125)",
                        p: 2,
                        borderRadius: "9px",
                        bgcolor: "background.paper",
                    }}
                >

                    <TextField
                        placeholder='Name'
                        label='Name'
                        variant="filled"
                        required
                        value={input.name}
                        onChange={e => setInput({ ...input, name: e.target.value })}
                    />
                    <Stack direction="row" gap={1} justifyContent="space-between" >
                        <TextField
                            placeholder='Position'
                            label='Position'
                            variant="standard"
                            value={input?.currentPosition}
                            onChange={(e) => setInput({ ...input, currentPosition: e.target.value })}
                        />
                        <TextField
                            placeholder='Company'
                            label='Company'
                            variant="standard"
                            value={input?.company}
                            onChange={(e) => setInput({ ...input, company: e.target.value })}
                        />
                    </Stack>

                    <Stack direction="row" gap={1} justifyContent="space-between" >
                        <IconButton
                            color="success"
                            onClick={_add_number}
                            children={
                                <>
                                    <Add />
                                    <Phone />
                                </>
                            }
                        />
                        <IconButton
                            color="info"
                            onClick={_add_email}
                            children={
                                <>
                                    <Add />
                                    <Email />
                                </>
                            }
                        />
                    </Stack>

                    <Stack p={1} gap={1} >
                        {
                            input.numbers?.map(
                                (number, index) => (
                                    <Stack key={index} direction="row" gap={1} justifyContent="space-between" >
                                        <TextField
                                            placeholder='Country Code'
                                            label='Country Code'
                                            value={number?.countryCode}
                                            defaultValue="+91"
                                            onChange={
                                                (e) => setInput({
                                                    ...input,
                                                    numbers: input.numbers?.map(
                                                        (number, i) => i === index ? { ...number, countryCode: e.target.value } : number
                                                    )
                                                })
                                            }
                                        />
                                        <TextField
                                            placeholder={`Number ${index + 1}`}
                                            label={`Number ${index + 1}`}
                                            value={number?.number}
                                            onChange={
                                                (e) => setInput({
                                                    ...input,
                                                    numbers: input.numbers?.map(
                                                        (number, i) => i === index ? { ...number, number: e.target.value } : number
                                                    )
                                                })
                                            }
                                        />
                                        <IconButton
                                            sx={{
                                                color: 'error.main',
                                                width: '45px',
                                                height: '45px',
                                                borderRadius: '50%',
                                            }}
                                            onClick={() => {
                                                setInput({
                                                    ...input,
                                                    numbers: input.numbers?.filter(
                                                        (number, i) => i !== index
                                                    )
                                                })
                                            }} >
                                            <Delete />
                                        </IconButton>
                                    </Stack>
                                ))
                        }

                        {
                            input.emails?.map(
                                (email, index) => (
                                    <Stack key={index} direction="row" gap={1} justifyContent="space-between" >
                                        <TextField
                                            placeholder={`Email ${index + 1}`}
                                            label={`Email ${index + 1}`}
                                            value={email}
                                            onChange={
                                                (e) => setInput({
                                                    ...input,
                                                    emails: input.emails?.map(
                                                        (email, i) => i === index ? e.target.value : email
                                                    )
                                                })
                                            }
                                        />
                                        <IconButton
                                            sx={{
                                                color: 'error.main',
                                                width: '45px',
                                                height: '45px',
                                                borderRadius: '50%',
                                            }}
                                            onClick={() => {
                                                setInput({
                                                    ...input,
                                                    emails: input.emails?.filter(
                                                        (email, i) => i !== index
                                                    )
                                                })
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Stack>
                                )
                            )
                        }
                    </Stack>

                    <Button variant="outlined" onClick={_submit} >
                        {isInFlight ? "Loading..." : "Add Contact"}
                    </Button>

                </Stack>

            </Collapse>

            <Stack direction="row" gap={1} alignItems="center" px={1} justifyContent="space-evenly" >
                <IconButton
                    sx={{
                        mx: 'auto',
                        my: 1,
                        color: 'text.primary',
                        height: '45px',
                        width: '45px',
                        borderRadius: '50%',
                        ":hover": {
                            backgroundColor: 'primary.main',
                            color: 'background.paper',
                        },
                        transition: 'transform 300ms ease-in-out',
                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.125)',

                        ...(
                            open && {
                                transform: 'rotate(45deg)',
                                backgroundColor: 'background.backdrop',
                            }
                        )
                    }}
                    onClick={() => setOpen(!open)}
                    disabled={isInFlight}
                >
                    <Add />
                </IconButton>
            </Stack>

        </Stack>
    );

};

export default Contact;
