import { Button, Container, Divider, Link, Paper, Typography } from "@mui/material";

export default function NotFound() {
    return (
        <Container component={Paper} sx={{ height: 400 }}>
            <Typography>Ooops - the page cannot be found</Typography>
            <Divider />
            <Button>Return to shop</Button>
        </Container>
    )
}
