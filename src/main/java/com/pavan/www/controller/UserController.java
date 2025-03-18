package com.pavan.www.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pavan.www.service.UserService;
import com.pavan.www.model.User_login;

@SuppressWarnings("unused")
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController 
{
	@Autowired
	UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<String>  login(@RequestBody Map<String, String> credintials)
	{
		String username = credintials.get("username");
        String password = credintials.get("password");
        
        if(userService.authenticateUser(username, password))
        {
            return ResponseEntity.ok("Login successful");

        }
        else 
        {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    
    }
}