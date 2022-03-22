package onlab.AppointmentBookingBackend.services;

import onlab.AppointmentBookingBackend.models.Appointment;
import onlab.AppointmentBookingBackend.repositories.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public void createAppointment(Appointment appointment){
        appointmentRepository.save(appointment);
    }

    public Appointment getAppointment(String id){
        return appointmentRepository.findById(id).get();
    }

    public List<Appointment> getAppointments(){
        List<Appointment> result = new ArrayList<>();
        appointmentRepository.findAll().forEach(result::add);
        return result;
    }

    public void updateAppointment(Appointment appointment){
        Appointment a = appointmentRepository.findById(appointment.getId()).get();
        a = appointment;
        appointmentRepository.save(a);
    }

    public void deleteAppointment(String id){
        appointmentRepository.deleteById(id);
    }

}
