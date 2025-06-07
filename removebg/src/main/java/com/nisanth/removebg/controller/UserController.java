package com.nisanth.removebg.controller;

import com.nisanth.removebg.dto.UserDto;
import com.nisanth.removebg.response.RemoveBgResponse;
import com.nisanth.removebg.service.UserService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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
    public ResponseEntity<?> createOrUpdateUser(@RequestBody UserDto userDto, Authentication authentication)
    {

        RemoveBgResponse response=null;
       try{

           // check the authentication object is present or not

           if(!authentication.getName().equals(userDto.getClerkId())){
               response= RemoveBgResponse.builder()
                       .success(false)
                       .data("User does not have permission to access the resource")
                       .statusCode(HttpStatus.FORBIDDEN)
                       .build();

              return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
           }
           UserDto user=userService.saveUser(userDto);
           // user builder pattern
           response= RemoveBgResponse.builder()
                   .success(true)
                   .data(user)
                   .statusCode(HttpStatus.OK)
                   .build();


           return ResponseEntity.status(HttpStatus.OK).body(response);
       }
       catch(Exception e)
       {
           response= RemoveBgResponse.builder()
                   .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                   .data(e.getMessage())
                   .success(false)
                   .build();

           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
       }
    }
}
