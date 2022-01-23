/*Aqui vão as funções e é onde eu ACESSO o banco de dados; no model eu criei os 
modelos que intepretam o banco de dados, aqui eu pelo pelo import (Notes), 
jogo numa variável assincrona (dentro do home, faço a variável
    notes, puxando o Model*/

import { Request, Response } from 'express';
import { Produtos } from "../models/Produtos";

//CREATE
export const home = async (req: Request, res: Response) => {

    let produtoinput: string = req.body.produto as string;
    let categoriainput: string = req.body.categoria as string;
    let precoinput: number = parseFloat(req.body.preco as string);
    let quantidadeinput: number = parseInt(req.body.quantidade as string);





    if (produtoinput && precoinput && categoriainput && quantidadeinput) {
        const novoproduto = await Produtos.create({
            produto: produtoinput,
            categoria: categoriainput,
            preco: precoinput,
            quantidade: quantidadeinput,

        });

    };



    let listadeprodutos = await Produtos.findAll();

    //Aqui eu pego os preços da lista de produtos e transformo em um array
    let listadeprecos = listadeprodutos.map(listadeprodutos => { return listadeprodutos.preco * listadeprodutos.quantidade });

    let precototal = 0;

    //Aqui eu somo todos os preços que estão no array
    for (let i = 0; i < listadeprecos.length; i++) {
        precototal += listadeprecos[i];
        precototal.toFixed(2);
    }


    //READ

    res.render('pages/home', {
        listadeprodutos,
        precototal,


    });
};

export const carnes = async (req: Request, res: Response) => {

    let produtoinput: string = req.body.produto as string;
    let categoriainput: string = req.body.categoria as string;
    let precoinput: number = parseFloat(req.body.preco as string);
    let quantidadeinput: number = parseInt(req.body.quantidade as string);






    if (produtoinput && precoinput && categoriainput && quantidadeinput) {
        const novoproduto = await Produtos.create({
            produto: produtoinput,
            categoria: categoriainput,
            preco: precoinput,
            quantidade: quantidadeinput,

        });

    };



    let listadeprodutos = await Produtos.findAll({
        where: {
            categoria: "carnes"
        }
    });

    //Aqui eu pego os preços da lista de produtos e transformo em um array
    let listadeprecos = listadeprodutos.map(listadeprodutos => { return listadeprodutos.preco * listadeprodutos.quantidade });

    let precototal = 0;

    //Aqui eu somo todos os preços que estão no array
    for (let i = 0; i < listadeprecos.length; i++) {
        precototal += listadeprecos[i];
        precototal.toFixed(2);
    }







    //READ

    res.render('pages/home', {
        listadeprodutos,
        precototal,


    });
};


export const higiene = async (req: Request, res: Response) => {

    let produtoinput: string = req.body.produto as string;
    let categoriainput: string = req.body.categoria as string;
    let precoinput: number = parseFloat(req.body.preco as string);
    let quantidadeinput: number = parseInt(req.body.quantidade as string);






    if (produtoinput && precoinput && categoriainput && quantidadeinput) {
        const novoproduto = await Produtos.create({
            produto: produtoinput,
            categoria: categoriainput,
            preco: precoinput,
            quantidade: quantidadeinput,

        });

    };



    let listadeprodutos = await Produtos.findAll({
        where: {
            categoria: "Hig. & Limp."
        }
    });

    //Aqui eu pego os preços da lista de produtos e transformo em um array
    let listadeprecos = listadeprodutos.map(listadeprodutos => { return listadeprodutos.preco * listadeprodutos.quantidade });

    let precototal = 0;

    //Aqui eu somo todos os preços que estão no array
    for (let i = 0; i < listadeprecos.length; i++) {
        precototal += listadeprecos[i];
        precototal.toFixed(2);
    }







    //READ

    res.render('pages/home', {
        listadeprodutos,
        precototal,


    });
};


export const bebidas = async (req: Request, res: Response) => {

    let produtoinput: string = req.body.produto as string;
    let categoriainput: string = req.body.categoria as string;
    let precoinput: number = parseFloat(req.body.preco as string);
    let quantidadeinput: number = parseInt(req.body.quantidade as string);






    if (produtoinput && precoinput && categoriainput && quantidadeinput) {
        const novoproduto = await Produtos.create({
            produto: produtoinput,
            categoria: categoriainput,
            preco: precoinput,
            quantidade: quantidadeinput,

        });

    };



    let listadeprodutos = await Produtos.findAll({
        where: {
            categoria: "Bebidas"
        }
    });

    //Aqui eu pego os preços da lista de produtos e transformo em um array
    let listadeprecos = listadeprodutos.map(listadeprodutos => { return listadeprodutos.preco * listadeprodutos.quantidade });

    let precototal = 0;

    //Aqui eu somo todos os preços que estão no array
    for (let i = 0; i < listadeprecos.length; i++) {
        precototal += listadeprecos[i];
        precototal.toFixed(2);
    }







    //READ

    res.render('pages/home', {
        listadeprodutos,
        precototal,


    });
};

export const hortifruit = async (req: Request, res: Response) => {

    let produtoinput: string = req.body.produto as string;
    let categoriainput: string = req.body.categoria as string;
    let precoinput: number = parseFloat(req.body.preco as string);
    let quantidadeinput: number = parseInt(req.body.quantidade as string);






    if (produtoinput && precoinput && categoriainput && quantidadeinput) {
        const novoproduto = await Produtos.create({
            produto: produtoinput,
            categoria: categoriainput,
            preco: precoinput,
            quantidade: quantidadeinput,

        });

    };



    let listadeprodutos = await Produtos.findAll({
        where: {
            categoria: "Hortifruit"
        }
    });

    //Aqui eu pego os preços da lista de produtos e transformo em um array
    let listadeprecos = listadeprodutos.map(listadeprodutos => { return listadeprodutos.preco * listadeprodutos.quantidade });

    let precototal = 0;

    //Aqui eu somo todos os preços que estão no array
    for (let i = 0; i < listadeprecos.length; i++) {
        precototal += listadeprecos[i];
        precototal.toFixed(2);
    }







    //READ

    res.render('pages/home', {
        listadeprodutos,
        precototal,


    });
};


export const doces = async (req: Request, res: Response) => {

    let produtoinput: string = req.body.produto as string;
    let categoriainput: string = req.body.categoria as string;
    let precoinput: number = parseFloat(req.body.preco as string);
    let quantidadeinput: number = parseInt(req.body.quantidade as string);






    if (produtoinput && precoinput && categoriainput && quantidadeinput) {
        const novoproduto = await Produtos.create({
            produto: produtoinput,
            categoria: categoriainput,
            preco: precoinput,
            quantidade: quantidadeinput,

        });

    };



    let listadeprodutos = await Produtos.findAll({
        where: {
            categoria: "Doces"
        }
    });

    //Aqui eu pego os preços da lista de produtos e transformo em um array
    let listadeprecos = listadeprodutos.map(listadeprodutos => { return listadeprodutos.preco * listadeprodutos.quantidade });

    let precototal = 0;

    //Aqui eu somo todos os preços que estão no array
    for (let i = 0; i < listadeprecos.length; i++) {
        precototal += listadeprecos[i];
        precototal.toFixed(2);
    }







    //READ

    res.render('pages/home', {
        listadeprodutos,
        precototal,


    });
};





//DELETE
export const excluir = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    await Produtos.destroy({
        where: { id }
    });

    res.redirect("back");
};

//UPDATE
export const aumentar = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let result = await Produtos.findAll({ where: { id } });
    if (result.length > 0) {
        let valor = result[0];
        valor.quantidade++;
        await valor.save()
    };
    res.redirect("back");
};

export const diminuir = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let result = await Produtos.findAll({ where: { id } });
    if (result.length > 0) {
        let valor = result[0];
        valor.quantidade--;
        await valor.save()
    };
    res.redirect("back");
};






