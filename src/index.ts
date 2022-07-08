import express, {Request, Response} from "express";

const app = express()
const port = 3003

app.get("/onramp", ( request: Request, response: Response ) => {

    const depositAddress = request.query.wallet || ""
    const depositCurrency = request.query.crypto || ""

    console.log( depositCurrency + ':' + depositAddress )

    response.send(
        `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>ORE ID Fiat Onramp POC</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        </head>
        <body>
            <div class="container">
                <h1 class="header">ORE ID Fiat Onramp POC</h1>

                <iframe
                    src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0&onlyCryptos=${depositCurrency}&wallets=${depositCurrency}:${depositAddress}&isAddressEditable=false"
                    height="600px"
                    width="440px"
                    title="Onramper widget"
                    frameborder="0"
                    allow="accelerometer;
                    autoplay; camera; gyroscope; payment"
                    style="box-shadow: 1px 1px 1px 1px
                    rgba(0,0,0,0.2);"
                    >
                    <a href="https://widget.onramper.com" target="_blank">Buy crypto</a>
                </iframe>
            </body>
        </html>
        `
    )
})

app.listen( port, () => {
    console.log( `server stated at http://localhost:${port}` )
})

// http://localhost:3003/onramp?crypto=WAXP&wallet=testsataikon