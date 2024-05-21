package recea.licenta.evidentacheltuielmasini.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import recea.licenta.evidentacheltuielmasini.dto.LoginDto;
import recea.licenta.evidentacheltuielmasini.dto.RegisterDto;
import recea.licenta.evidentacheltuielmasini.service.AuthService;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
@CrossOrigin
public class AuthController {

    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){
        String raspuns = authService.register(registerDto);

        return new ResponseEntity<>(raspuns, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public  ResponseEntity<String > login(@RequestBody LoginDto loginDto){

        String raspuns = authService.login(loginDto);

        return ResponseEntity.ok(raspuns);
    }
}
