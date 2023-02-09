package com.examilw.myresto.modele;

import java.util.HashMap;
import java.util.Map;

public class Command {
    private int id;
    private boolean status;
    private boolean validateGerant;
    private Map<Product, Integer> products;



    public Command() {
    }

    public Command( int id,boolean status,boolean validateGerant) {
        this.validateGerant = validateGerant;
        this.status = status;
        this.products = new HashMap<>();


    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
    public boolean isValidateGerant() {
        return validateGerant;
    }

    public void setisValidateGerant(boolean validateGerant) {
        this.validateGerant = validateGerant;
    }

    public double getPrice() {
        double price = 0;
        if (this.products.isEmpty()) return 0;
        for (Map.Entry<Product, Integer> entry : this.products.entrySet()) {
            price += entry.getKey().getPrice() * entry.getValue();
        }
        return price;
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
    public Map<Product, Integer> getProducts() {
        return products;
    }

    public void setProducts(Map<Product, Integer> products) {
        this.products = products;
    }
}
