package onlab.AppointmentBookingBackend.repositories;

import onlab.AppointmentBookingBackend.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
}
