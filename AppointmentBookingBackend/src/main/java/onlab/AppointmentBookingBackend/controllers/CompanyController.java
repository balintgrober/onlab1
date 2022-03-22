package onlab.AppointmentBookingBackend.controllers;

import onlab.AppointmentBookingBackend.models.Company;
import onlab.AppointmentBookingBackend.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping("companies")
    public List<Company> getCompanies(){
        return companyService.getCompanies();
    }

    @GetMapping("companies/{id}")
    public Company getCompany(@PathVariable("id") String id){
        return companyService.getCompany(id);
    }

    @PostMapping("companies")
    public void postCompany(Company company){
        companyService.createCompany(company);
    }

    @PutMapping("companies/{id}")
    public void putCompany(Company company){
        companyService.updateCompany(company);
    }

    @DeleteMapping("companies/{id}")
    public void deleteCompany(@PathVariable("id") String id){
        companyService.deleteCompany(id);
    }

}
