package com.examilw.myresto.DAO;

import com.examilw.myresto.modele.Client;
import com.examilw.myresto.modele.Command;
import com.examilw.myresto.modele.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class CommandDAO {

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


    public int addCommand(Command command) {
        String sql = "INSERT INTO command (date_commande,price,status,validation_gerant) VALUES (?,?,?,?)";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
            String formattedDate = dateFormat.format(date);
            preparedStatement.setString(1, formattedDate);
            preparedStatement.setDouble(2, command.getPrice());
            preparedStatement.setBoolean(3, command.isStatus());
            preparedStatement.setBoolean(4, command.isValidateGerant());
            preparedStatement.executeUpdate();
            ResultSet resultSet = preparedStatement.getGeneratedKeys();
            if (resultSet.next()) {
                return resultSet.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    public void updateCommandStatus(int id, boolean status) {
        String sql = "UPDATE command SET status = ? WHERE id = ?";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setBoolean(1, status);
            preparedStatement.setInt(2, id);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void updateCommandValidateGerant(int id, boolean validateGerant) {
        String sql = "UPDATE command SET validate_gerant = ? WHERE id = ?";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setBoolean(1, validateGerant);
            preparedStatement.setInt(2, id);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void insertRelCommandClient(int idCommand, int idClient) {
        String sql = "INSERT INTO rel_command_client (id_command, id_client) VALUES (?, ?)";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, idCommand);
            preparedStatement.setInt(2, idClient);
            preparedStatement.executeUpdate();
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void insertRelCommandProduct(int idCommand, int idProduct) {
        String sql = "INSERT INTO rel_command_product (id_command, id_product) VALUES (?, ?)";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, idCommand);
            preparedStatement.setInt(2, idProduct);
            preparedStatement.executeUpdate();
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public Map<Product,Integer> getAllProductCommand(int id) {
        final int idFinal = id;
        String sql = "SELECT * FROM rel_command_product where id_command = ?";
        Map<Product,Integer> products_command = new HashMap<>();
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql);) {
            preparedStatement.setInt(1, idFinal);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id_command = resultSet.getInt("id_command");
                int id_product = resultSet.getInt("id_product");
                Product product = getProduct(id_product);
                int quantity = resultSet.getInt("quantity");
                products_command.put(product,quantity);
            }
            return products_command;

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;

    }

    public List<Command> getAllCommands() {
        String sql = "SELECT * FROM command";
        List<Command> commands = new ArrayList<>();
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                boolean status = resultSet.getBoolean("status");
                boolean validateGerant = resultSet.getBoolean("validate_gerant");
                Command command = new Command(id,status, validateGerant);
                command.setProducts(getAllProductCommand(id));
                commands.add(command);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return commands;
    }
    public Command getCommand(int id) {
        final int idFinal = id;
        String sql = "SELECT * FROM command where id = ?";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql);) {
            preparedStatement.setInt(1, idFinal);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id_command = resultSet.getInt("id");
                boolean status = resultSet.getBoolean("status");
                boolean validateGerant = resultSet.getBoolean("validate_gerant");
                Command command = new Command(id_command,status, validateGerant);
                command.setProducts(getAllProductCommand(id));
                return command;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public Product getProduct(int id) {
        final int idFinal = id;
        String sql = "SELECT * FROM product where id = ?";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql);) {
            preparedStatement.setInt(1, idFinal);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id_produit = resultSet.getInt("id");
                String name = resultSet.getString("name");
                double price = resultSet.getDouble("price");
                String img = resultSet.getString("img");
                Product product = new Product(id,name,price,img);
                return product;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

}