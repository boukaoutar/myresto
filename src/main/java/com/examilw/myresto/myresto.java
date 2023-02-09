package com.examilw.myresto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.examilw.myresto.DAO"})
public class myresto {

    public static void main(String[] args) {
        SpringApplication.run(myresto.class, args);
    }

}
