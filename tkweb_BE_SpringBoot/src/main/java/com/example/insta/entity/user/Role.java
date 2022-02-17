package com.example.insta.entity.user;

import com.example.insta.entity.BaseEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="role")
@Data
public class Role extends BaseEntity {
    private String roleName;
}
