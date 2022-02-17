package com.example.insta.service;


import com.example.insta.entity.Token;

public interface TokenService {

    Token createToken(Token token);

    Token findByToken(String token);
}
