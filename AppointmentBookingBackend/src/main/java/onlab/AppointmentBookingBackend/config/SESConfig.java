package onlab.AppointmentBookingBackend.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SESConfig {

    @Value("${aws.accesskey}")
    private String amazonAccessKey;

    @Value("${aws.secretkey}")
    private String amazonSecretKey;

    public AWSCredentialsProvider awsCredentialsProvider() {
        return new AWSStaticCredentialsProvider(amazonAWSCredentials());
    }

    @Bean
    public AWSCredentials amazonAWSCredentials() {
        return new BasicAWSCredentials(amazonAccessKey, amazonSecretKey);
    }

    @Bean
    public AmazonSimpleEmailService getAmazonSimpleEmailService(){
        return AmazonSimpleEmailServiceClientBuilder.standard().withCredentials(awsCredentialsProvider()).withRegion(Regions.EU_CENTRAL_1).build();
    }


}
