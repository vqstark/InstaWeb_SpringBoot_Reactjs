package com.example.insta.payload.Post.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class CommentRequest {
    @NotNull
    @Size(max = 50)
    private String body;

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
