package onlab.AppointmentBookingBackend.services;

import onlab.AppointmentBookingBackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthService {

    @Autowired
    private UserService userService;

    public void registerUser(User user){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.createUser(user);
    }

    public User loginUser(User user){
        List<User> users = userService.getUsers();

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        for(User u : users){
            if(u.getEmail().equals(user.getEmail()) && passwordEncoder.matches(user.getPassword(), u.getPassword())){
                return u;
            }
        }

        User result = new User();
        user.setId(null);
        return result;

    }

}
