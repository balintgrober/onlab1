package onlab.AppointmentBookingBackend.controllers;

import onlab.AppointmentBookingBackend.models.User;
import onlab.AppointmentBookingBackend.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public User loginUser(@RequestBody User user){
        return authService.loginUser(user);
    }

    @PostMapping("/register")
    public void regsterUser(@RequestBody User user){
        authService.registerUser(user);
    }

}
