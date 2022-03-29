package onlab.AppointmentBookingBackend.controllers;

import onlab.AppointmentBookingBackend.models.Appointment;
import onlab.AppointmentBookingBackend.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("appointments")
    public List<Appointment> getAppointments(){
        return appointmentService.getAppointments();
    }

    @GetMapping("appointments/{id}")
    public Appointment getAppointment(@PathVariable("id") String id){
        return appointmentService.getAppointment(id);
    }

    @PostMapping("appointments")
    public void postAppointment(@RequestBody Appointment appointment){
        appointmentService.createAppointment(appointment);
    }

    @PutMapping("appointments/{id}")
    public void putAppointment(@RequestBody Appointment appointment){
        appointmentService.updateAppointment(appointment);
    }

    @DeleteMapping("appointments/{id}")
    public void deleteAppointment(@PathVariable("id") String id){
        appointmentService.deleteAppointment(id);
    }

}
