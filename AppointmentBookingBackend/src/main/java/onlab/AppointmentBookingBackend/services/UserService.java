package onlab.AppointmentBookingBackend.services;

import onlab.AppointmentBookingBackend.models.User;
import onlab.AppointmentBookingBackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(User user){
        userRepository.save(user);
    }
    public User getUser(String id){
        return userRepository.findById(id).get();
    }

    public List<User> getUsers(){
        List<User> result = new ArrayList<>();
        userRepository.findAll().forEach(result::add);
        return  result;
    }

    public void updateUser(User user){
        User u = userRepository.findById(user.getId()).get();
        u = user;
        userRepository.save(u);
    }

    public void deleteUser(String id){
        userRepository.deleteById(id);
    }

}
