// 
import React from 'react';

// icons
import { NoteAdd } from '@mui/icons-material';

// material
import { Button, CircularProgress, Collapse, IconButton, Input, Stack, Typography } from '@mui/material';

// relay
import { useMutation } from 'react-relay';
import { NoteModMutation } from './__generated__/NoteModMutation.graphql';

// graphql
const graphql = require('babel-plugin-relay/macro');

interface NoteModProps {
    id?: string;
}

interface NoteModState {
    id?: string;
    openForm?: boolean;
    contactId: string;
}

class NoteMod extends React.Component<NoteModProps, NoteModState> {

    constructor(props: NoteModProps) {
        super(props);
        this.state = {
            openForm: true,
            contactId: props.id ?? "RGV0YWlsczpjZGEwYmRkNy1lOGZlLTQwZjUtOGY4NC1mYTlmZmFhMjUzMzg="
        };
    }

    _toggleForm = () => {
        const { openForm } = this.state;
        this.setState({ openForm: !openForm });
    };

    NewNote = () => {

        const [title, setTitle] = React.useState<string>("");
        const [content, setContent] = React.useState('');
        const [commit, isInFlight] = useMutation<NoteModMutation>(
            graphql`
                mutation NoteModMutation($input: NoteMutationInput!) {
                    note(input: $input) {
                        success
                        error
                        note {
                            id title content createdAt lastUpdated
                        }
                    }
                }
            `,
        );

        const _submit = () => {
            commit({
                variables: {
                    input: {
                        title: title,
                        content: content,
                        contactId: this.state.contactId,
                        id: this.state.id ?? null
                    }
                },
                onCompleted: (response, error) => {
                    if (error) {
                        console.log(error);
                    }
                    if (response) {
                        if (response?.note?.success) {
                            setTitle("");
                            setContent("");
                            this._toggleForm();
                        }
                        if (response?.note?.error) {
                            alert(response.note.error);
                        }
                    }
                },
                updater: (store, data) => {
                    if (data?.note?.success && data?.note?.note) {
                        const contact = store.get(this.state.contactId);
                        const notes = contact?.getLinkedRecords("notes");
                        const newNote = store.get(data?.note?.note?.id);
                        if (notes && newNote) {
                            contact?.setLinkedRecords([...notes, newNote], "notes");
                        }
                    }
                },
                onError: (err) => console.error(err),
            });
        }

        return (
            <Stack
                gap={1.5}
                sx={{
                    p: 1,
                    minHeight: "60px",
                    height: "max-content",
                    py: 3
                }}
            >

                <Stack
                    direction="row"
                    gap={1}
                    justifyContent={"space-between"}
                    alignItems="center"
                    sx={{
                        p: 1,
                        bgcolor: "background.paper",
                    }}
                >
                    <Typography
                        variant="h6"
                        children={title?.length > 0 ? title : "New Note"}
                    />
                </Stack>

                <Input
                    placeholder="Title"
                    inputProps={{ 'aria-label': 'Title' }}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <Input
                    placeholder="Content"
                    inputProps={{ 'aria-label': 'Content' }}
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    multiline
                />

                <Button
                    variant="contained"
                    sx={{
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.125)",
                        p: 1,
                        color: "background.paper",
                        borderRadius: 1,
                        display: "flex",
                        width: "100%",
                        maxWidth: "sm",
                        minHeight: "36px",
                        height: "max-content",
                        my: 2
                    }}

                    onClick={_submit}
                >
                    {isInFlight ? <CircularProgress /> : "Save"}
                </Button>

            </Stack>
        )
    };

    render() {
        const { NewNote, _toggleForm } = this;
        const { openForm } = this.state;

        return (
            <Stack gap={1} alignItems="center" >

                <Collapse
                    sx={{
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.125)",
                        bgcolor: "background.paper",
                        borderRadius: 1,
                        display: "flex",
                        width: "100%",
                        maxWidth: "sm",
                    }}
                    in={openForm}
                    children={<NewNote />}
                />

                <IconButton
                    size="medium"
                    onClick={_toggleForm}
                    sx={{
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.125)",
                        p: 1,
                        bgcolor: "background.paper",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        mt: 1
                    }}
                    children={<NoteAdd />}
                />

            </Stack>
        );
    }

}

export default NoteMod;
