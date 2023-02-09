package com.examilw.myresto.modele;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Client {
    private Map<Product, Integer> products;
    private String email;
    private String firstName;
    private String lastName;

    public Client() {}

    public Client(String email, String firstName, String lastName) {
        this.products = new HashMap<>();
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Map<Product, Integer> getProducts() {
        return products;
    }

    public void setProducts(Map<Product, Integer> products) {
        this.products = products;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void addProduct(Product product, int quantity) {
        if (products == null) {
            products = new HashMap<>();
        }
        products.put(product, quantity);
    }

    public void removeProduct(Product product) {
        if (products != null) {
            products.remove(product);
        }
    }

}

