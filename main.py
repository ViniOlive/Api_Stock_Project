import json
import pymongo
from pymongo import MongoClient
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from datetime import datetime

app = Flask(__name__)
cors = CORS(app)
user_db = "Dev"
pass_db = "teste123"
db_name = "StockSale"


def connect():
    connection_string = f"mongodb+srv://{user_db}:{pass_db}@stockcontroldev.v8gl9k6.mongodb.net/?retryWrites=true"
    client = MongoClient(connection_string)

    return client[db_name]


@app.route('/Product/List', methods=['GET'])
@cross_origin()
def consultProduct():
    db_table = connect()['Stock']
    product_id = request.args.get('Product_ID')

    dict_item_aux = {}
    if product_id:
        product = [item for item in db_table.find({"Product_ID": int(product_id)})]

        for item in product:
            for key, value in item.items():
                if not key == '_id':
                    dict_item_aux.update({key: value})

        return jsonify(dict_item_aux)
    else:
        'ID do produto nao informado.'


@app.route('/Product', methods=['DELETE'])
@cross_origin()
def delProduct():
    db_table = connect()['Stock']
    product_id = request.args.get('Product_ID')
    if product_id:
        db_table.delete_one({'product_ID': int(product_id)})

        return f'Produto ID: {product_id} excluido com sucesso.'
    else:
        'Para excluir um produto informe o ID.'


@app.route('/Product/Insert', methods=['POST'])
@cross_origin()
def insertProduct():
    db_table = connect()['Stock']

    product_id = db_table.find_one(sort=[("product_ID", pymongo.DESCENDING)])["product_ID"] + 1
    dict_in = {"product_ID": product_id, "updated_date": datetime.now().strftime("%d/%m/%y - %H:%M")}

    for key, value in request.args.items():
        if value:
            if value.replace('.', '').isnumeric():
                dict_in.update({key: float(value)})
            else:
                dict_in.update({key: value})
        else:
            return f"O campo {key} deve ser preenchido."

    db_table.insert_one(dict_in)
    return f"Produto ID: {product_id} inserido com sucesso"


app.run(port=5000, host='localhost', debug=True)
