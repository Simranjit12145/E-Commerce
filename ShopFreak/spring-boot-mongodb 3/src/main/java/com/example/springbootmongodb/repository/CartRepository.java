package com.example.springbootmongodb.repository;
import com.example.springbootmongodb.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {

    Cart findByName(String name);
}