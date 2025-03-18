package com.pavan.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pavan.www.model.User_login;

@Repository
public interface UserRepository extends JpaRepository<User_login,Long>
{
	User_login findByUsername(String username);
}