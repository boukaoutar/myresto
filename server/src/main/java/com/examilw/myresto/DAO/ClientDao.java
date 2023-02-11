package com.examilw.myresto.DAO;

import com.examilw.myresto.modele.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class ClientDao {

    @Autowired
    private DataSource dataSource;

    public void createAccount(Client client,String password) {
        String sql = "INSERT INTO client (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, client.getFirstName());
            preparedStatement.setString(2, client.getLastName());
            preparedStatement.setString(3, client.getEmail());
            preparedStatement.setString(4, password);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Client getClient(String email) {
        final String emailFinal = email;
        String sql = "SELECT id,firstName,lastName,email FROM client where email = ?";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql);) {
            preparedStatement.setString(1, emailFinal);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String firstName = resultSet.getString("firstName");
                String lastName = resultSet.getString("lastName");
                String mail = resultSet.getString("email");
                Client client = new Client(email,firstName,lastName);
                client.setId(id);
                return client;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public boolean checkPassword(String email,String pwd) {
        final String emailFinal = email;
        String sql = "SELECT password FROM client where email = ?";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql);) {
            preparedStatement.setString(1, emailFinal);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                String password = resultSet.getString("password");
                if(password.equals(pwd)){
                    return true;
                } else return false;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }



}