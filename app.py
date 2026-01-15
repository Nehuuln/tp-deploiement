from flask import Flask

app = Flask(__name__)

@app.route("/")
def counter():
    return """
    <h1>Compteur</h1>
    <div id="counter">0</div>
    <button onclick="increment()">+1</button>
    <script>
        let count = 0;
        function increment() {
            count++;
            document.getElementById('counter').textContent = count;
        }
    </script>
    """

@app.route("/health")
def health():
    return "OK"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3001)
