package onlab.AppointmentBookingBackend.controllers;

import onlab.AppointmentBookingBackend.models.User;
import onlab.AppointmentBookingBackend.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
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
