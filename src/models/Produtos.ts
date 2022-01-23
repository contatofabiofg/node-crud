/* Esse model, feito para o sequelize interpretar o banco de dados, basicamente tem
os imports necessários, os types (que aqui chamamos de interface) e o Model propriamente 
dito, que contem todas as informações da tabela no banco de dados */

import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ProdutosInstance extends Model {
  id: number,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
}

export const Produtos = sequelize.define<ProdutosInstance>("Produtos", { //Notes, primeiro argumento, o objeto como o segundo
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  produto: {
    type: DataTypes.STRING
  },
  categoria: {
    type: DataTypes.STRING
  },
  preco: {
    type: DataTypes.FLOAT
  },
  quantidade: {
    type: DataTypes.INTEGER
  },
  precoparcial: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.getDataValue("preco") * this.getDataValue("quantidade")}`;
    }
  },


}, { //aqui, outro argumento como objeto
  tableName: "produtos",
  timestamps: false

});