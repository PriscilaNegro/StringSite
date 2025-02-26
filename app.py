from flask import Flask, render_template

app = Flask(__name__)

@app.route('/crie-conta')  
def crie_conta():
    return render_template('crie-conta.html')

if __name__ == '__main__':
    app.run(debug=True)
