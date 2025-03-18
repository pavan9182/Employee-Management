package com.pavan.www.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pavan.www.model.User_login;
import com.pavan.www.repo.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public boolean authenticateUser(String username, String password) {
        User_login user = userRepository.findByUsername(username);

        if (user == null) {
            System.out.println("No user found with username: " + username);
            return false;
        }

        System.out.println("User found: " + user.getUsername() + ", Password: " + user.getPassword());
       
        return user.getPassword().equals(password);
    }

}