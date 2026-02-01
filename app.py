from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return send_from_directory(".", "index.html")

@app.route("/reverse", methods=["POST"])
def reverse_string():
    data = request.get_json()
    text = data.get("text", "")
    return jsonify({
        "reversed": text[::-1]
    })

@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(".", filename)

if __name__ == "__main__":
    app.run(debug=True)
