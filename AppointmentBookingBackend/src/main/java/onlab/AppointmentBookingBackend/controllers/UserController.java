package onlab.AppointmentBookingBackend.controllers;

import onlab.AppointmentBookingBackend.models.User;
import onlab.AppointmentBookingBackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("users/{id}")
    public User getUser(@PathVariable("id") String id){
        return  userService.getUser(id);
    }

    @PostMapping("users")
    public void postUser(@RequestBody User user){
        userService.createUser(user);
    }

    @PutMapping("users")
    public void putUser(@RequestBody User user){
        userService.updateUser(user);
    }

    @DeleteMapping("users/{id}")
    public void deleteUser(@PathVariable("id") String id){
        userService.deleteUser(id);
    }

}
