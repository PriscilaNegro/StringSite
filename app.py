from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# Conectar ao MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",  # seu usuário do MySQL
    password="sua_senha",  # sua senha do MySQL
    database="stringart_db"
)

# Rota para retornar as informações da página "Sobre Nós"
@app.route('/api/sobre', methods=['GET'])
def get_sobre():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM sobre")
    results = cursor.fetchall()
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
