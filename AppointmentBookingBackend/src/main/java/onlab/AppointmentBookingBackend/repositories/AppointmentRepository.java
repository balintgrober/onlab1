package onlab.AppointmentBookingBackend.repositories;

import onlab.AppointmentBookingBackend.models.Appointment;
import org.springframework.data.repository.CrudRepository;

public interface AppointmentRepository extends CrudRepository<Appointment, String> {
}
