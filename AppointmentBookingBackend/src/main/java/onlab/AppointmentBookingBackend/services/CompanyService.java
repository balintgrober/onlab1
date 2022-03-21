package onlab.AppointmentBookingBackend.services;

import onlab.AppointmentBookingBackend.models.Company;
import onlab.AppointmentBookingBackend.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public void createCompany(Company company){
        companyRepository.save(company);
    }

    public Company getCompany(String id){
        return companyRepository.findById(id).get();
    }

    public List<Company> getCompanies(){
        List<Company> result = new ArrayList<>();
        companyRepository.findAll().forEach(result::add);
        return result;
    }

    public void updateCompany(Company company){
        Company co = companyRepository.findById(company.id).get();
        co = company;
        companyRepository.save(co);
    }

    public void deleteCompany(String id){
        companyRepository.deleteById(id);
    }

}

