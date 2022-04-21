package onlab.AppointmentBookingBackend.repositories;

import onlab.AppointmentBookingBackend.models.User;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface UserRepository extends CrudRepository<User, String> {
}
