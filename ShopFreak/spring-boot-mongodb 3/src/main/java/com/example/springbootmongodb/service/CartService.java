package com.example.springbootmongodb.service;

import com.example.springbootmongodb.model.Cart;
import com.example.springbootmongodb.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    //CreateOperation
    public Cart createCart(String name,String description,int price){

        return cartRepository.save(new Cart(name,description,price));
    }

    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    //RetrieveOperation
    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    public Cart findByName(String name){
        return cartRepository.findByName(name);
    }

    //UpdateOperation

    public Cart updateCart(String name,String description,int price){

        Cart c =cartRepository.findByName(name);
        c.setDescription(description);
        c.setPrice(price);
        return cartRepository.save(c);
    }

    //DeleteOperation

    public void deleteAllCarts(){
        cartRepository.deleteAll();
    }

    public void deleteCart(String name){

        Cart c = cartRepository.findByName(name);
        cartRepository.delete(c);
    }
}
