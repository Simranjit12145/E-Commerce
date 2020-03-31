package com.example.springbootmongodb.service;

import com.example.springbootmongodb.model.Product;
import com.example.springbootmongodb.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    //CreateOperation
    public Product createProduct(String name,String description,int price,String pnumber){

        return productRepository.save(new Product(name,description,price,pnumber));
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    //RetrieveOperation
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product findByName(String name){
        return productRepository.findByName(name);
    }

    //UpdateOperation

    public Product updateProduct(String name,String description,int price,String pnumber){

        Product p = productRepository.findByName(name);
        p.setDescription(description);
        p.setPrice(price);
        p.setNumber(pnumber);
        return productRepository.save(p);
    }

    //DeleteOperation

    public void deleteAllProducts(){
        productRepository.deleteAll();
    }

    public void deleteProduct(String name){

        Product p = productRepository.findByName(name);
        productRepository.delete(p);
    }
}
