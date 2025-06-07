package com.nisanth.removebg.service.impl;

import com.nisanth.removebg.dto.UserDto;
import com.nisanth.removebg.repository.UserRepository;
import com.nisanth.removebg.service.UserService;
import com.nisanth.removebg.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public UserDto saveUser(UserDto userDto) {
     Optional<UserEntity> optionalUser=userRepository.findByClerkId(userDto.getClerkId());
     if(optionalUser.isPresent()){
        UserEntity existingUser= optionalUser.get();
        existingUser.setEmail(userDto.getEmail());
        existingUser.setLastName(userDto.getLastName());
        existingUser.setFirstName(userDto.getFirstName());
        existingUser.setPhotoUrl(userDto.getPhotoUrl());
        if(userDto.getCredits()!=null)
        {
            existingUser.setCredits(userDto.getCredits());

        }
        existingUser=userRepository.save(existingUser);
       return maptoDto(existingUser);

     }

     // for new user
       UserEntity newUser= mapToEntity(userDto);
     userRepository.save(newUser);
     return maptoDto(newUser);
    }

    private UserDto maptoDto(UserEntity newUser) {
       return UserDto.builder()
                .clerkId(newUser.getClerkId())
                .firstName(newUser.getFirstName())
                .lastName(newUser.getLastName())
                .email(newUser.getEmail())
                .credits(newUser.getCredits())
                .build();
    }

    private UserEntity mapToEntity(UserDto userDto) {
       return  UserEntity.builder()
                .clerkId(userDto.getClerkId())
                .email(userDto.getEmail())
                .lastName(userDto.getLastName())
                .firstName(userDto.getFirstName())
                .photoUrl(userDto.getPhotoUrl())
                .build();
    }
}
