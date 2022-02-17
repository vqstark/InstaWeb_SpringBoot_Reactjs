package com.example.insta.repository;

import com.example.insta.entity.user.Role;
import com.example.insta.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByRoleName(String rolename);
}
