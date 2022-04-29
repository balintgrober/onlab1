package onlab.AppointmentBookingBackend.services;

import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.model.*;
import onlab.AppointmentBookingBackend.models.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class EmailService {

    @Autowired
    private AmazonSimpleEmailService amazonSimpleEmailService;

    @Value("${email_from}")
    private String from;

    public void sendBookedEmail(Mail maildata){

        Date date = new Date(maildata.getTimestamp());

        String emailContent =
                "<!DOCTYPE html>\n"
                        + "<html>\n"
                        + "<head>\n"
                        + "    <meta charset=\"utf-8\">\n"
                        + "    <title>New appointment</title>\n"
                        + "</head>\n"
                        + "<body style=\"background: whitesmoke; padding: 30px; height: 100%\">\n"
                        + "<h5 style=\"font-size: 18px; margin-bottom: 6px\">Dear " + maildata.getUserName() + "," + "</h5>\n"
                        + "<p style=\"font-size: 16px; font-weight: 500\">You have booked a new appointment on " + date.toString()+ "at " + maildata.getCompanyName() + "</p>\n"
                        + "</body>\n"
                        + "</html>";


        String subject = "New Appointment";

        try {
            SendEmailRequest sendEmailRequest =
                    new SendEmailRequest()
                            .withDestination(new Destination().withToAddresses(maildata.getTo()))
                            .withMessage(new Message()
                                    .withBody(new Body()
                                            .withHtml(new Content().withCharset("UTF-8").withData(emailContent)))
                                    .withSubject(new Content().withCharset("UTF-8").withData(subject)))
                            .withSource(from);

            SendEmailResult result = amazonSimpleEmailService.sendEmail(sendEmailRequest);
        } catch (Exception e){
            e.printStackTrace();
        }

    }


    public void sendDeletedEmail(Mail maildata){
        Date date = new Date(maildata.getTimestamp());

        String emailContent =
                "<!DOCTYPE html>\n"
                        + "<html>\n"
                        + "<head>\n"
                        + "    <meta charset=\"utf-8\">\n"
                        + "    <title>Deleted appointment</title>\n"
                        + "</head>\n"
                        + "<body style=\"background: whitesmoke; padding: 30px; height: 100%\">\n"
                        + "<h5 style=\"font-size: 18px; margin-bottom: 6px\">Dear " + maildata.getUserName() + "," + "</h5>\n"
                        + "<p style=\"font-size: 16px; font-weight: 500\">You or the service provider have deleted your appointment on " + date.toString()+ " at " + maildata.getCompanyName() + "</p>\n"
                        + "</body>\n"
                        + "</html>";


        String subject = "Deleted Appointment";

        try {
            SendEmailRequest sendEmailRequest =
                    new SendEmailRequest()
                            .withDestination(new Destination().withToAddresses(maildata.getTo()))
                            .withMessage(new Message()
                                    .withBody(new Body()
                                            .withHtml(new Content().withCharset("UTF-8").withData(emailContent)))
                                    .withSubject(new Content().withCharset("UTF-8").withData(subject)))
                            .withSource(from);

            SendEmailResult result = amazonSimpleEmailService.sendEmail(sendEmailRequest);
        } catch (Exception e){
            e.printStackTrace();
        }
    }


    public void sendEditedEmail(Mail maildata){
        Date fromdate = new Date(maildata.getTimestamp());
        Date toDate = new Date(maildata.getTimeEdited());

        String emailContent =
                "<!DOCTYPE html>\n"
                        + "<html>\n"
                        + "<head>\n"
                        + "    <meta charset=\"utf-8\">\n"
                        + "    <title>Edited appointment</title>\n"
                        + "</head>\n"
                        + "<body style=\"background: whitesmoke; padding: 30px; height: 100%\">\n"
                        + "<h5 style=\"font-size: 18px; margin-bottom: 6px\">Dear " + maildata.getUserName() + "," + "</h5>\n"
                        + "<p style=\"font-size: 16px; font-weight: 500\">Your appointment at " + maildata.getCompanyName() + " has been rescheduled from " + fromdate.toString() + " to " + toDate.toString() + "</p>\n"
                        + "</body>\n"
                        + "</html>";

        String subject = "Rescheduled Appointment";

        try {
            SendEmailRequest sendEmailRequest =
                    new SendEmailRequest()
                            .withDestination(new Destination().withToAddresses(maildata.getTo()))
                            .withMessage(new Message()
                                    .withBody(new Body()
                                            .withHtml(new Content().withCharset("UTF-8").withData(emailContent)))
                                    .withSubject(new Content().withCharset("UTF-8").withData(subject)))
                            .withSource(from);

            SendEmailResult result = amazonSimpleEmailService.sendEmail(sendEmailRequest);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

}
