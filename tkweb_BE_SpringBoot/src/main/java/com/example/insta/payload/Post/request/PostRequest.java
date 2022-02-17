package com.example.insta.payload.Post.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class PostRequest {
    @NotBlank
    @Size(max = 100)
    private String title;

    private String Content;

}