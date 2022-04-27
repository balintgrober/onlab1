package onlab.AppointmentBookingBackend.repositories;

import onlab.AppointmentBookingBackend.models.Appointment;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface AppointmentRepository extends CrudRepository<Appointment, String> {
}
