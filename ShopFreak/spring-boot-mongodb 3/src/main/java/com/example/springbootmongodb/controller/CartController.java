package com.example.springbootmongodb.controller;

import com.example.springbootmongodb.model.Cart;
import com.example.springbootmongodb.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin( origins = "http://localhost:4200")
public class CartController {
    @Autowired
    private CartService cartService;


    @RequestMapping(method = RequestMethod.GET, value = "/createCart")
    public String createCart(@RequestParam String name, @RequestParam String description, @RequestParam int price) {
        Cart c = cartService.createCart(name,description,price);
        return c.toString();
    }

   @RequestMapping(method = RequestMethod.POST, value = "/createCart")
    public String createCart(@RequestBody Cart cart) {
        cart.setName(cart.getName());
        cart.setDescription(cart.getDescription());
        cart.setPrice(34);
        cartService.createCart(cart);
        return ("Hey, " + cart.getName()  + " have been entered in the cart successfully");
    }


    @RequestMapping("/getAllCarts")
    public List<Cart> getAllCarts() {
        return cartService.getAllCarts();
    }

    @RequestMapping("/updateCart")
    public String updateCart(@RequestParam String name, @RequestParam String description, @RequestParam int price) {
        Cart c = cartService.updateCart(name,description,price);
        return c.toString();
    }

    @RequestMapping("/deleteCart")
    public String deleteCart(@RequestParam String name) {
        cartService.deleteCart(name);
        return "Deleted " + name;
    }

    @RequestMapping("/deleteAllCarts")
    public String deleteAllCarts() {
        cartService.deleteAllCarts();
        return "Deleted All Records";
    }
}
