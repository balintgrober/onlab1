package onlab.AppointmentBookingBackend.services;

import onlab.AppointmentBookingBackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthService {

    @Autowired
    private UserService userService;

    public void registerUser(User user){
        userService.createUser(user);
    }

    public User loginUser(User user){
        List<User> users = userService.getUsers();

        for(User u : users){
            if(u.getEmail().equals(user.getEmail()) && u.getPassword().equals(user.getPassword())){
                user = u;
                return user;
            }
        }

        user = null;
        return user;

    }

}
