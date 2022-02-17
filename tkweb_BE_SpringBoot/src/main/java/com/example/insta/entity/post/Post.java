package com.example.insta.entity.post;

import com.example.insta.entity.BaseEntity;
import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Post extends BaseEntity {
    private String title;
    private String content;
    private String imagePath;
}
