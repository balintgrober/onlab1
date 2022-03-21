package onlab.AppointmentBookingBackend.repositories;

import onlab.AppointmentBookingBackend.models.Company;
import org.springframework.data.repository.CrudRepository;

public interface CompanyRepository extends CrudRepository<Company, String> {
}
