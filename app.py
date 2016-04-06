import os
from flask import Flask, render_template, json, jsonify

app = Flask(__name__)

my_numbers = {"number": 5}

@app.route('/')
def main():
    return render_template('index.html')
    
@app.route('/testdata')
def numbersapi():
    return jsonify(my_numbers)
    
@app.route('/simon')
def renderSimon():
    return render_template('simon.html')

    
if __name__ == '__main__':
    app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))
