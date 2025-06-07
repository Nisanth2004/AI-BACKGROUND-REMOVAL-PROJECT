package com.nisanth.removebg.controller;

import com.nisanth.removebg.dto.UserDto;
import com.nisanth.removebg.response.RemoveBgResponse;
import com.nisanth.removebg.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public RemoveBgResponse createOrUpdateUser(@RequestBody UserDto userDto)
    {
       try{
           UserDto user=userService.saveUser(userDto);
           // user builder pattern
           return RemoveBgResponse.builder()
                   .success(true)
                   .data(user)
                   .statusCode(HttpStatus.CREATED)
                   .build();
       }
       catch(Exception e)
       {
           return RemoveBgResponse.builder()
                   .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                   .data(e.getMessage())
                   .success(false)
                   .build();
       }
    }
}
