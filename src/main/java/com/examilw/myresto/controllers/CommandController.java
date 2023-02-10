package com.examilw.myresto.controllers;
import com.examilw.myresto.DAO.CommandDAO;
import com.examilw.myresto.modele.Command;
import com.examilw.myresto.modele.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class CommandController {

    @Autowired
    private CommandDAO commandDAO;

    @PostMapping("/api/command")
    public void addCommand(@RequestBody Map<Product, Integer> products) {
        Command command = new Command();
        command.setProducts(products);
        command.setStatus(false);
        command.setisValidateGerant(false);
        commandDAO.addCommand(command);
    }

    @PutMapping("/api/command/{id}/status")
    public void updateCommandStatus(@PathVariable int id, @RequestParam boolean status) {
        commandDAO.updateCommandStatus(id, status);
    }

    @PutMapping("/api/command/{id}/validateGerant")
    public void updateCommandValidateGerant(@PathVariable int id, @RequestParam boolean validateGerant) {
        commandDAO.updateCommandValidateGerant(id, validateGerant);
    }

    @GetMapping("/api/command")
    public List<Command> getAllCommands() {
        return commandDAO.getAllCommands();
    }

    @GetMapping("/api/command/{id}")
    public Command getCommand(@PathVariable int id) {
        return commandDAO.getCommand(id);
    }


    @GetMapping("/api/products")
    public List<Product> getAllProducts() {
        return commandDAO.getAllProduct();
    }



}
