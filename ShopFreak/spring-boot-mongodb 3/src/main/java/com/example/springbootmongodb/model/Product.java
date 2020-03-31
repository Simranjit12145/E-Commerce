package com.example.springbootmongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Product {
    @Id
    String id;

    String  name,description,pnumber;
    int price;


    public Product(String name, String description, int price,String pnumber) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.pnumber=pnumber;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getNumber() {
        return pnumber;
    }
    public void setNumber(String pnumber)
    {
        this.pnumber=pnumber;
    }


}
