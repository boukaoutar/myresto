package com.examilw.myresto.modele;

import java.util.Map;

public class Commande {
    private Map<Product, Integer> products;
    private boolean status;

    public Commande() {
    }

    public Commande(Map<Product, Integer> products, boolean status) {
        this.products = products;
        this.status = status;
    }

    public Map<Product, Integer> getProducts() {
        return products;
    }

    public void setProducts(Map<Product, Integer> products) {
        this.products = products;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public double getPrice() {
        double price = 0;
        for (Map.Entry<Product, Integer> entry : products.entrySet()) {
            price += entry.getKey().getPrice() * entry.getValue();
        }
        return price;
    }
}
