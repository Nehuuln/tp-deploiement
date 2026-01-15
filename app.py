from flask import Flask

app = Flask(__name__)

@app.route("/")
def counter():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Counter App</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0;
            }
            .container {
                text-align: center;
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            #counter {
                font-size: 48px;
                margin: 20px 0;
                color: #333;
            }
            button {
                font-size: 24px;
                padding: 15px 30px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Compteur</h1>
            <div id="counter">0</div>
            <button onclick="increment()">+1</button>
        </div>
        <script>
            let count = 0;
            function increment() {
                count++;
                document.getElementById('counter').textContent = count;
            }
        </script>
    </body>
    </html>
    """

@app.route("/health")
def health():
    return "OK"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3001)
