package com.example.insta.repository;


import com.example.insta.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u from User u where u.username = :username")
    User findByUsername(String username);

    @Query("SELECT u from User u where u.id = :id")
    User findById1(Long id);
}
