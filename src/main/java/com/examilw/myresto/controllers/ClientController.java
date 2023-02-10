package com.examilw.myresto.controllers;

import com.examilw.myresto.DAO.ClientDao;
import com.examilw.myresto.modele.Client;
import com.examilw.myresto.modele.Product;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private ClientDao clientDAO;


    @GetMapping("/check-session")
    public String checkSession(HttpSession session) {
        if (session.getAttribute("client") != null) {
            return "session exists";
        } else {
            return "session does not exist";
        }
    }

    @GetMapping("/{email}")
    public Client getClient(@PathVariable String email) {
         return clientDAO.getClient(email);
    }

    @PostMapping("/createAccount")
    public void createAccount(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String firstName = body.get("firstName");
        String lastName = body.get("lastName");
        String pwd = body.get("password");

        Client client = new Client( email, firstName, lastName);
        clientDAO.createAccount(client,pwd);
    }
    @PostMapping("/Login")
    public boolean Login(@RequestBody Map<String, String> body, HttpSession session) {
        String email = body.get("email");
        String pwd = body.get("password");
        if(clientDAO.checkPassword(email,pwd)){
            session.setAttribute("client", clientDAO.getClient(email));
           return true;
        } else return false;
    }

    @PostMapping("/Logout")
    public boolean logout(HttpSession session) {
        session.invalidate();
        return true;
    }
}

