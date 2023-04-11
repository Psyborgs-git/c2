import React, { PropsWithChildren } from 'react';

// @components
// basic
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextInput from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Cancel, Check, Password, Visibility, VisibilityOff } from '@mui/icons-material';


// nav
import { useNavigate } from 'react-router-dom';

// styling
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// @graphql
import { useMutation } from 'react-relay';
import { AuthenticationInput, AuthenticationMutation } from './__generated__/AuthenticationMutation.graphql';
import { InputAdornment } from '@mui/material';
import { url } from '../relay/environment';
import { AuthenticationSignupMutation } from './__generated__/AuthenticationSignupMutation.graphql';
const graphql = require("babel-plugin-relay/macro")

const mutation = graphql`
   mutation AuthenticationMutation($i:AuthenticationInput!){
        authenticate(input:$i){
            token
            id
            success
            error
        }
    }
`;

const signupMutation = graphql`
    mutation AuthenticationSignupMutation($i:SignupInput!){ 
        signup(input:$i){
            token
            success
            error   
        }
    }
`;

interface AuthenticationProps {
    onCompleted?: () => void;
}

interface AuthenticationState {
    authMode?: "login" | "signup";
    input?: AuthenticationInput;
    readyToSubmit: boolean;
    mode: "credentials" | "mobile"
}

const EnterAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    1000% {
        opacity: 1;
        transform: translateY(0px);
    }
`

const INP = styled(TextInput)`
    animation: ${EnterAnim} 0.8s ease-in-out;
    transition: all 0.8s ease-in;
`

class Authentication extends React.Component<AuthenticationProps, AuthenticationState> {

    constructor(props: AuthenticationProps) {
        super(props);
        this.state = {
            readyToSubmit: false,
            input: {},
            authMode: "login",
            mode: "credentials"
        };
    }

    componentWillUnmount() {
        if (this.props.onCompleted) {
            this.props.onCompleted();
        }
    }

    CredentialsForm = () => {
        const { input, authMode } = this.state;
        const [credentials, setCredentials] = React.useState<AuthenticationInput["credentials"]>({
            password: "",
            username: ""
        });
        const [password2, setPassword2] = React.useState<string>("");
        const [showpassword, setShowPassword] = React.useState<boolean>(false);
        const [usernameAvailable, setUsernameAvailable] = React.useState<boolean>(false);
        const [checkingUsername, setCheckingUsername] = React.useState<boolean>(false);

        const readyToSubmit: boolean = Boolean(
            authMode === "signup" ?
                ((usernameAvailable) && (credentials?.password === password2))
                : (
                    credentials &&
                    (credentials.username.length > 0) &&
                    (credentials.password.length > (process.env.NODE_ENV === "development" ? 3 : 7))
                )
        );

        React.useEffect(() => {
            console.log("credentials changed");

            const newInp = input ?? {};
            if (newInp.mobile) {
                newInp.mobile = null;
            }

            if (newInp.credentials !== credentials) {
                newInp["credentials"] = credentials;
            }


            this.setState({ input: newInp });

        },
            [input, credentials]
        );

        React.useEffect(() => {
            console.log("credentials status change");
            this.setState({ readyToSubmit });
        },
            [readyToSubmit]
        );



        const _checkUsername = () => {
            // @ts-ignore
            if (credentials?.username?.length > 4) {
                setCheckingUsername(true);
                fetch(url + '/user/check_username/' + credentials?.username)
                    .then(res => res.json())
                    .then(res => {
                        setUsernameAvailable(res.available);
                        setCheckingUsername(false);
                    })
                    .catch(err => console.log(err))
            }
            else {
                setUsernameAvailable(false);
                alert("Username must be at least 5 characters long")
            }
        };

        return (
            <>
                <INP
                    placeholder="Username"
                    label="Username"
                    type="text"
                    InputProps={{
                        endAdornment: authMode === "signup" &&
                            (
                                <InputAdornment position="end">
                                    {checkingUsername ?
                                        <CircularProgress size={20} />
                                        : usernameAvailable ?
                                            <Check color='success' /> :
                                            <Cancel color='error' />
                                    }
                                </InputAdornment>
                            ),
                    }}
                    onBlur={authMode === "signup" ? _checkUsername : undefined}
                    value={credentials?.username}
                    onChange={(e: any) => setCredentials({ ...credentials, username: e.target.value } as AuthenticationInput["credentials"])}
                />
                <INP
                    placeholder="Password"
                    label="Password"
                    value={credentials?.password}
                    type={showpassword ? "text" : "password"}
                    color={readyToSubmit ? "success" : "info"}
                    onChange={(e: any) => setCredentials({ ...credentials, password: e.target.value } as AuthenticationInput["credentials"])}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" sx={{ cursor: "pointer" }} >
                                {showpassword ?
                                    <VisibilityOff onClick={() => setShowPassword(!showpassword)} /> :
                                    <Visibility onClick={() => setShowPassword(!showpassword)} />
                                }
                            </InputAdornment>
                        )
                    }}
                />
                {
                    (authMode === "signup") &&
                    <INP
                        placeholder="Password (again)"
                        label="Password (again)"
                        value={password2}
                        type={showpassword ? "text" : "password"}
                        color={
                            password2.length > 5 ?
                                credentials?.password === password2 ? "success" : "error"
                                : "info"
                        }
                        onChange={(e: any) => setPassword2(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Password color='inherit' />
                                </InputAdornment>
                            )
                        }}
                    />
                }
            </>
        )
    }

    MobileForm = () => {

        const { input } = this.state;

        React.useEffect(
            () => {
                const newInp = input ?? {};
                if (newInp.credentials) { newInp.credentials = null; this.setState({ input: newInp }) }
                if (newInp.mobile && (!newInp.mobile.whatsapp)) { newInp.mobile.whatsapp = true; this.setState({ input: newInp }) }

            },
            [input]
        )

        return (
            <>
                {
                    input?.mobile?.verification?.id ?
                        <INP
                            placeholder='OTP'
                            label='OTP'
                            type="otp"
                            value={input?.mobile?.verification?.otp ?? undefined}
                            onChange={(e: any) => this.setState({
                                input: {
                                    ...input,
                                    mobile: {
                                        verification: {
                                            ...input?.mobile?.verification,
                                            otp: e.target.value
                                        }
                                    }
                                }
                            })}
                        />
                        : <Stack spacing={1} direction={"row"} >
                            <INP
                                placeholder="Country Code"
                                label="Country Code"
                                defaultValue={"+91"}
                                value={input?.mobile?.mobile?.countryCode ?? undefined}
                                sx={{ width: "20%" }}
                                onChange={(e: any) => this.setState({
                                    input: {
                                        ...input, mobile: {
                                            mobile: {
                                                ...input?.mobile?.mobile,
                                                countryCode: e.target.value
                                            }
                                        }
                                    }
                                })}
                            />
                            <INP
                                placeholder="Mobile Number"
                                helperText="Please enter your Mobile number"
                                label="Mobile Number"
                                sx={{ width: "80%" }}
                                value={input?.mobile?.mobile?.number ?? undefined}
                                inputMode="tel"
                                type='mobile'
                                onChange={(e: any) => this.setState({
                                    input: {
                                        ...input, mobile: {
                                            mobile: {
                                                ...input?.mobile?.mobile,
                                                number: e.target.value
                                            }
                                        }
                                    },
                                    readyToSubmit: e.target.value.length === 10
                                })}
                            />
                        </Stack>
                }
            </>
        )
    }

    InputForm = ({ children }: PropsWithChildren<any>) => {
        const { mode } = this.state;
        const [commit, isInFlight] = useMutation<AuthenticationMutation>(mutation);
        const [errors, setErrors] = React.useState<Array<string>>([]);
        const nav = useNavigate();
        const isReady = this.state.readyToSubmit;
        const [signup, isSigningUp] = useMutation<AuthenticationSignupMutation>(signupMutation);

        const _login = () => {
            if (this.state.input) {
                return commit({
                    variables: { i: this.state.input },
                    onCompleted: (res, err) => {
                        if (res.authenticate?.error) {
                            return setErrors([JSON.parse(res.authenticate?.error?.replace(/'/g, '"'))])
                        } else if (res.authenticate?.success) {
                            if (res.authenticate.token) {
                                localStorage.setItem("token", res.authenticate.token);
                                return nav("/");
                            }
                            else if (res.authenticate.id) {
                                const newInput: AuthenticationInput = {
                                    mobile: {
                                        verification: {
                                            id: res.authenticate.id
                                        }
                                    }
                                }

                                return this.setState({ input: newInput })
                            }
                        }
                    }
                })
            }
        }

        const _signup = () => {
            if (this.state.input) {

                return signup({
                    variables: {
                        i: {
                            "password": this.state.input.credentials?.password,
                            "username": this.state.input.credentials?.username
                        }
                    },
                    onCompleted: (res, err) => {
                        if (res.signup?.error) {
                            return setErrors([JSON.parse(res.signup?.error?.replace(/'/g, '"'))])
                        } else if (res.signup?.success) {
                            if (res.signup.token) {
                                localStorage.setItem("token", res.signup.token);
                                return nav("/");
                            }
                        }
                    }
                })
            }
        }

        const _submit = () => {
            if (!isReady) {
                return setErrors([...errors, "Please provide complete information before proceedig."])
            }
            else {
                if (this.state.authMode === "login") {
                    return _login();
                }
                else if (this.state.authMode === "signup") {
                    return _signup();
                }
            }
        };

        const _toggleMode = () => {
            this.setState({ mode: mode === "credentials" ? "mobile" : "credentials" })
        };


        return (
            <Stack
                sx={{
                    width: "100%",
                    height: "max-content",
                    mt: 9,
                    py: 3,
                    transition: "linear 0.8s"
                }}
                maxWidth="sm"
                spacing={2}
                onKeyDown={(e: any) => {
                    if (isReady && e.key === "Enter") {
                        return _submit();
                    }
                }}
            >

                {children}

                <Stack direction="row" alignItems="ceter" justifyContent="space-between" >
                    <Typography variant="button" >
                        Use Anonymous mode ?
                    </Typography>
                    <Switch
                        checked={mode === "credentials"}
                        color={mode === "credentials" ? 'success' : "default"}
                        onChange={_toggleMode}
                    />
                </Stack>

                <Button
                    startIcon={(isInFlight || isSigningUp) && <CircularProgress color="primary" variant="determinate" />}
                    onClick={_submit}
                    type="submit"
                    color="primary"
                    variant="outlined"
                    disabled={(!isReady) || (isInFlight || isSigningUp)}
                    children={(isInFlight || isSigningUp) ? "Processing..." : "Submit"}
                />

                <Button
                    variant="text"
                    color="info"
                    onClick={
                        () => {
                            this.setState({ authMode: this.state.authMode === "login" ? "signup" : "login" })
                        }
                    }
                    children={this.state.authMode === "login" ? "Try to Signup ?" : "Login ?"}
                />

                {
                    errors.length > 0 &&
                    errors.map(
                        (error, i) => (<Alert
                            color="error"
                            key={i}

                        >
                            {/* // <Report /> */}
                            {error}
                        </Alert>
                        )
                    )

                }

            </Stack >
        )
    }

    HeaderStack = () => {

        return (
            <Stack direction="row" alignItems='center' justifyContent="space-between" >
                <Typography
                    children={
                        this.state.mode === "credentials" ?
                            "Anonymous Mode" : "Whatsapp Mode"
                    }
                    variant="h6"
                />
                {/* <IconButton variant="plain" onClick={() => nav(-1)} children={<Close />} /> */}
            </Stack>
        )
    }

    render() {
        const { InputForm, CredentialsForm, MobileForm, state, HeaderStack } = this;
        return (
            <Container
                sx={{
                    width: "100%",
                    height: "100%",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    pt: "6rem"
                }}
            >

                <Container
                    sx={{
                        maxWidth: "500px",
                        width: "90%",
                        margin: "auto",
                        borderRadius: 9,
                        transition: "all 0.8s ease-in",
                        p: "1rem",
                        mt: "21px",
                        height: "max-content",
                        mb: 3
                    }}
                    maxWidth="xs"
                >

                    {/* header stack */}
                    <HeaderStack />

                    {/* body */}
                    <InputForm>
                        {
                            state.mode === "credentials" ?
                                <CredentialsForm />
                                : <MobileForm />
                        }
                    </InputForm>
                    {/*  */}

                </Container>

            </Container>
        );
    }

}

export default Authentication;
