import React from 'react';


// Material UI
import { Button, Collapse, IconButton, Input, Stack } from '@mui/material';

// Icons
import { Add, Email, Phone } from '@mui/icons-material';

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
                console.log(response);
                console.log(errors);

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
            },
            updater: (store, data) => {
                if (data?.contact?.success) {
                    const x = store.getRoot();
                    const connection = x.getLinkedRecord("connection");
                    // @ts-ignore
                    const newContact = store.get(data?.contact?.contact?.id);
                    const clientContacts = connection?.getLinkedRecords('contacts');
                    // @ts-ignore
                    connection?.setLinkedRecords([...clientContacts, newContact], 'contacts');
                }
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
                my: 1
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
                        backdropFilter: 'blur(9px)',
                        borderRadius: "9px",
                    }}
                >

                    <Input placeholder='Name' value={input.name} onChange={e => setInput({ ...input, name: e.target.value })} />
                    <Stack direction="row" gap={1} justifyContent="space-between" >
                        <Input
                            placeholder='Position'
                            value={input?.currentPosition}
                            onChange={(e) => setInput({ ...input, currentPosition: e.target.value })}
                        />
                        <Input
                            placeholder='Company'
                            value={input?.company}
                            onChange={(e) => setInput({ ...input, company: e.target.value })}
                        />
                    </Stack>

                    <Stack p={1} gap={1} >
                        {
                            input.numbers?.map(
                                (number, index) => (
                                    <Stack key={index} direction="row" gap={1} justifyContent="space-between" >
                                        <Input
                                            placeholder='Country Code'
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
                                        <Input
                                            placeholder={`Number ${index + 1}`}
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
                                    </Stack>
                                ))
                        }

                        {
                            input.emails?.map(
                                (email, index) => (
                                    <Stack key={index} direction="row" gap={1} justifyContent="space-between" >
                                        <Input
                                            placeholder={`Email ${index + 1}`}
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
                {open &&
                    <IconButton
                        color="success"
                        onClick={_add_number}
                        children={<Phone />}
                    />
                }

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

                {open &&
                    <IconButton
                        color="info"
                        children={<Email />}
                        onClick={_add_email}
                    />
                }
            </Stack>

        </Stack>
    );

};

export default Contact;
