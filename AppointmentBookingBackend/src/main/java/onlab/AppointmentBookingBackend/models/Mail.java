package onlab.AppointmentBookingBackend.models;

public class Mail {

    private String to;
    private String userName;
    private String companyName;
    private long timestamp;
    private long timeEdited;

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public long getTimeEdited() {
        return timeEdited;
    }

    public void setTimeEdited(long timeEdited) {
        this.timeEdited = timeEdited;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
