package onlab.AppointmentBookingBackend.controllers;


import onlab.AppointmentBookingBackend.models.Mail;
import onlab.AppointmentBookingBackend.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/email")
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("new")
    public void newAppointment(@RequestBody Mail maildata){
        emailService.sendBookedEmail(maildata);
    }

    @PostMapping("deleted")
    public void deletedAppointment(@RequestBody Mail maildata){
        emailService.sendDeletedEmail(maildata);
    }

    @PostMapping("edited")
    public void editedAppointment(@RequestBody Mail maildata){
        emailService.sendEditedEmail(maildata);
    }


}
